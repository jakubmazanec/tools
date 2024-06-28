import {ensureEmptyDirectory, findExistingDirectory, isRootPath} from '@jakubmazanec/fs-utils';
import {jsonSchema, type PackageJson, packageJsonSchema, readFile} from '@jakubmazanec/zod-utils';
import glob from 'fast-glob';
import fs from 'fs-extra';
import json5 from 'json5';
import _ from 'lodash';
import path from 'node:path';
import {z} from 'zod';

import {
  CARSON_CONFIG_DIRECTORY,
  PACKAGE_JSON_FILENAME,
  WORKSPACE_CONFIG_FILENAME,
  WORKSPACE_SNAPSHOT_FILENAME,
} from '../constants.js';
import {applyTemplateRenders} from '../template/applyTemplateRenders.js';
import {readCarsonTemplate} from '../template/internals.js';
import {renderCarsonTemplate} from '../template/renderCarsonTemplate.js';
import {
  compareProjectPath,
  containsProject,
  containsWorkspace,
  getPackageJsonWorkspaces,
  getRepositoryBranches,
  getRepositoryUrl,
} from './internals.js';
import {Project} from './Project.js';
import {saveWorkspaceConfig} from './saveWorkspaceConfig.js';
import {workspaceConfigSchema} from './WorkspaceConfig.js';
import {type WorkspaceConfig} from './WorkspaceConfig.js';
import {type WorkspaceCreateOptions} from './WorkspaceCreateOptions.js';
import {type WorkspaceCreateProjectOptions} from './WorkspaceCreateProjectOptions.js';
import {WorkspaceDependencies} from './WorkspaceDependencies.js';
import {WorkspaceError} from './WorkspaceError.js';
import {type WorkspaceFindAndReadOptions} from './WorkspaceFindAndReadOptions.js';
import {type WorkspaceOptions} from './WorkspaceOptions.js';
import {type WorkspacePackageJson} from './WorkspacePackageJson.js';
import {type WorkspaceProjectGlobs} from './WorkspaceProjectGlobs.js';
import {type WorkspaceProjects} from './WorkspaceProjects.js';
import {type WorkspaceRepository} from './WorkspaceRepository.js';
import {type WorkspaceUpdateOptions} from './WorkspaceUpdateOptions.js';

/**
 * Workspace represent a directory, usually a git repository, that contains {@link Project} instances.
 *
 * @typeParam M If true, the workspace is multi-project workspace (so-called "monorepo").
 */
export class Workspace<M extends boolean = true> {
  /** Workspace path. */
  readonly path: string;

  /** Does the workspace contain a multiple projects? */
  readonly isMultiProject: M;

  /** Globs used to find projects. */
  projectGlobs: WorkspaceProjectGlobs<M>;

  /** Workspace projects. */
  projects: WorkspaceProjects<M>;

  /** Workspace configuration; if it's not found, the default is an empty object. */
  config: WorkspaceConfig;

  /** Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not found, the default is an empty object. */
  packageJson: WorkspacePackageJson<M>;

  /** Workspace git repository. */
  repository?: WorkspaceRepository;

  /** Dependencies of all projects. */
  dependencies: WorkspaceDependencies<M> = [] as unknown as WorkspaceDependencies<M>;

  /** Development dependencies of all projects. */
  devDependencies: WorkspaceDependencies<M> = [] as unknown as WorkspaceDependencies<M>;

  /** All dependencies of all projects and workspace dependencies. */
  allDependencies: WorkspaceDependencies<M> = [] as unknown as WorkspaceDependencies<M>;

  /** Versions of each dependency. */
  dependencyVersions: Record<string, string[]> = {};

  /** Errors found during reading from the file system. */
  errors: Array<InstanceType<typeof WorkspaceError>> = [];

  constructor(options: WorkspaceOptions<M>) {
    this.path = options.path;

    if (options.isMultiProject === undefined || options.isMultiProject) {
      this.isMultiProject = true as M;

      let projectGlobOption = (options as WorkspaceOptions<true>).projectGlobs;

      if (projectGlobOption) {
        this.projectGlobs = projectGlobOption as WorkspaceProjectGlobs<M>;
      } else {
        this.projectGlobs = [] as string[] as WorkspaceProjectGlobs<M>;
      }

      this.projects = [] as Array<Project<M>> as WorkspaceProjects<M>;

      let {projects} = options as WorkspaceOptions<true>;

      if (projects) {
        this.addProjects(projects.map((project) => new Project({...project, workspace: this})));
      }

      let packageJsonOption = (options as WorkspaceOptions<true>).packageJson;

      if (packageJsonOption) {
        this.packageJson = packageJsonOption as M extends true ? PackageJson : null;
      } else {
        let emptyPackageJson: PackageJson = {};

        this.packageJson = emptyPackageJson as M extends true ? PackageJson : null;
      }
    } else {
      this.isMultiProject = false as M;
      this.projectGlobs = null as M extends true ? string[] : null;
      this.packageJson = null as M extends true ? PackageJson : null;
      this.projects = [] as Array<Project<M>> as WorkspaceProjects<M>;

      let {projects} = options as WorkspaceOptions<false>;

      if (projects) {
        this.addProjects(projects.map((project) => new Project({...project, workspace: this})));
      }
    }

    let configOption = options.config;

    if (configOption) {
      this.config = configOption;
    } else {
      let emptyWorkspaceConfig: WorkspaceConfig = {};

      this.config = emptyWorkspaceConfig;
    }

    if (options.repository) {
      this.repository = options.repository;
    }

    if (options.errors) {
      this.errors = options.errors;
    }

    // add missing project globs
    if (this.isMultiProject && !(this.projectGlobs as string[]).length) {
      let packageJsonWorkspaces = getPackageJsonWorkspaces(this.packageJson as PackageJson);

      if (packageJsonWorkspaces) {
        this.projectGlobs = [...packageJsonWorkspaces] as M extends true ? string[] : null;
      }
    }

    this.sortProjects();
    this.updateDependencies();
  }

  /**
   * Creates new workspace within the file system.
   *
   * @param options Options.
   * @returns The new workspace.
   */
  static async create({args, path: workspacePath, templateId}: WorkspaceCreateOptions) {
    // TODO: test that workspace returned by this method has the same value of isMultiProject when the same workspace is after its creation re-read with .read()
    let workspace = new this({
      path: workspacePath,
      config: {
        template: templateId,
      },
    });

    try {
      await ensureEmptyDirectory(workspace.path, {allowGit: true});
    } catch {
      throw new WorkspaceError('WORKSPACE_PATH_NOT_EMPTY', {
        messageParameters: [workspace.path],
        data: {
          path: workspace.path,
        },
      });
    }

    let template = await readCarsonTemplate(templateId);
    let templateRenders = await renderCarsonTemplate({
      template,
      templateData: {
        workspace,
        args,
      },
    });

    if (!template.config.autoEject) {
      await saveWorkspaceConfig({
        workspacePath: workspace.path,
        workspaceConfig: {template: templateId},
      });
    }

    await applyTemplateRenders({
      templateRenders,
      targetPath: workspace.path,
      snapshotPath:
        template.config.autoEject ?
          undefined
        : path.join(workspace.path, CARSON_CONFIG_DIRECTORY, WORKSPACE_SNAPSHOT_FILENAME),
      ignoreStrategies: ['check'],
    });

    return Workspace.read(workspace.path);
  }

  static async read(workspacePath: string): Promise<Workspace | Workspace<false>> {
    let resolvedWorkspacePath = path.resolve(workspacePath);

    if (!(await fs.pathExists(resolvedWorkspacePath))) {
      throw new WorkspaceError('NO_SUCH_WORKSPACE_PATH', {
        messageParameters: [resolvedWorkspacePath],
        data: {
          path: resolvedWorkspacePath,
        },
      });
    }

    // load root package.json
    let rootPackageJsonPath = path.join(resolvedWorkspacePath, 'package.json');
    let doesRootPackageJsonExist = await fs.pathExists(rootPackageJsonPath);
    let rootPackageJson: PackageJson | z.ZodError;

    if (doesRootPackageJsonExist) {
      rootPackageJson = await readFile(rootPackageJsonPath, packageJsonSchema, {
        parser: (rawString: string) => json5.parse<unknown>(rawString),
      });
    } else {
      rootPackageJson = {};
    }

    if (rootPackageJson instanceof z.ZodError) {
      rootPackageJson = {};

      // even if the package.json file has errors, maybe there's still a correct workspace field
      try {
        let rootJson = await readFile(rootPackageJsonPath, jsonSchema, {
          parser: (rawString: string) => json5.parse<unknown>(rawString),
          throwOnZodError: true,
        });
        let projectGlobs = getPackageJsonWorkspaces(rootJson);

        // add back to the empty package.json object
        if (projectGlobs) {
          rootPackageJson.workspaces = projectGlobs;
        }
      } catch {
        // no-op
      }
    }

    // load workspace config
    let workspaceConfigPath = path.join(
      resolvedWorkspacePath,
      CARSON_CONFIG_DIRECTORY,
      WORKSPACE_CONFIG_FILENAME,
    );
    let doesWorkspaceConfigExist = await fs.pathExists(workspaceConfigPath);
    let workspaceConfig: WorkspaceConfig | z.ZodError;

    if (doesWorkspaceConfigExist) {
      workspaceConfig = await readFile(workspaceConfigPath, workspaceConfigSchema, {
        parser: (rawString: string) => json5.parse<unknown>(rawString),
      });
    } else {
      workspaceConfig = {};
    }

    if (workspaceConfig instanceof z.ZodError) {
      workspaceConfig = {};
    }

    // how to find projects
    let packageJsonProjectGlobs = getPackageJsonWorkspaces(rootPackageJson);
    let workspaceConfigProjectGlobs = workspaceConfig.projects;

    if (
      packageJsonProjectGlobs?.length &&
      workspaceConfigProjectGlobs?.length &&
      !_.isEqual(packageJsonProjectGlobs, workspaceConfigProjectGlobs)
    ) {
      throw new WorkspaceError('PROJECT_GLOBS_MISMATCH', {
        data: {
          path: resolvedWorkspacePath,
        },
      });
    }

    let projectGlobs = packageJsonProjectGlobs ?? workspaceConfigProjectGlobs;

    // we're dealing with single-project workspace
    if (!projectGlobs) {
      let workspace = new this({
        path: resolvedWorkspacePath,
        isMultiProject: false,
      });

      await workspace.read();
      await workspace.readProjects();

      return workspace;
    }

    // we're dealing with multi-project workspace
    let workspace = new this({
      path: resolvedWorkspacePath,
      isMultiProject: true,
      projectGlobs,
      packageJson: rootPackageJson,
    });

    await workspace.read();
    await workspace.readProjects();

    return workspace;
  }

  /**
   * Traverses file system up from the search path and tries to find a directory that is a root of a workspace.
   *
   * @param searchPath Search path.
   * @returns Workspace path, if found.
   */
  static async find(searchPath: string): Promise<string | undefined> {
    let startingPath = await findExistingDirectory(path.resolve(searchPath));
    let currentPath = startingPath;
    let singlePackageWorkspacePath: string | undefined;
    let multiPackageWorkspacePath: string | undefined;

    while (
      !(isRootPath(currentPath) || (singlePackageWorkspacePath && multiPackageWorkspacePath))
    ) {
      if (await containsWorkspace(currentPath)) {
        let packageJsonPath = path.join(currentPath, PACKAGE_JSON_FILENAME);
        let workspaceConfigPath = path.join(
          currentPath,
          CARSON_CONFIG_DIRECTORY,
          WORKSPACE_CONFIG_FILENAME,
        );

        if (await fs.pathExists(packageJsonPath)) {
          let packageJson = await readFile(packageJsonPath, jsonSchema, {
            parser: (rawString: string) => json5.parse<unknown>(rawString),
          });

          if (!(packageJson instanceof Error)) {
            let projectGlobs = getPackageJsonWorkspaces(packageJson);

            if (projectGlobs?.length) {
              multiPackageWorkspacePath ??= currentPath;
            } else {
              singlePackageWorkspacePath ??= currentPath;
            }
          }
        }
        if (await fs.pathExists(workspaceConfigPath)) {
          let workspaceConfig = await readFile(workspaceConfigPath, workspaceConfigSchema, {
            parser: (rawString: string) => json5.parse<unknown>(rawString),
          });

          if (!(workspaceConfig instanceof z.ZodError)) {
            let projectGlobs = workspaceConfig.projects;

            if (projectGlobs?.length) {
              multiPackageWorkspacePath ??= currentPath;
            } else {
              singlePackageWorkspacePath ??= currentPath;
            }
          }
        } else {
          singlePackageWorkspacePath ??= currentPath;
        }
      }

      currentPath = path.dirname(currentPath);
    }

    if (multiPackageWorkspacePath) {
      return multiPackageWorkspacePath;
    } else if (singlePackageWorkspacePath) {
      return singlePackageWorkspacePath;
    }

    return undefined;
  }

  /**
   * Traverses file system up from the search path and tries to find and read a workspace.
   */
  static async findAndRead<O extends WorkspaceFindAndReadOptions | undefined = undefined>(
    searchPath: string,
    options?: O,
  ): Promise<
    O extends undefined ? Workspace | Workspace<false> | undefined
    : NonNullable<O>['throwIfNotFound'] extends true ? Workspace | Workspace<false>
    : Workspace | Workspace<false> | undefined
  > {
    let workspacePath = await Workspace.find(searchPath);

    if (workspacePath) {
      return Workspace.read(workspacePath) as Promise<
        O extends undefined ? Workspace | Workspace<false> | undefined
        : NonNullable<O>['throwIfNotFound'] extends true ? Workspace | Workspace<false>
        : Workspace | Workspace<false> | undefined
      >;
    } else if (options?.throwIfNotFound) {
      throw new WorkspaceError('NO_WORKSPACE_FOUND', {
        messageParameters: [searchPath],
        data: {
          path: searchPath,
        },
      });
    }

    return undefined as unknown as Promise<
      O extends undefined ? Workspace | Workspace<false> | undefined
      : NonNullable<O>['throwIfNotFound'] extends true ? Workspace | Workspace<false>
      : Workspace | Workspace<false> | undefined
    >;
  }

  async read(): Promise<this> {
    if (!(await fs.pathExists(this.path))) {
      throw new WorkspaceError('NO_SUCH_WORKSPACE_PATH', {
        messageParameters: [this.path],
        data: {
          path: this.path,
        },
      });
    }

    let errors: Array<InstanceType<typeof WorkspaceError>> = [];
    let repositoryUrl = await getRepositoryUrl(this.path);
    let repositoryBranches = await getRepositoryBranches(this.path);

    // load workspace config
    let workspaceConfigPath = path.join(
      this.path,
      CARSON_CONFIG_DIRECTORY,
      WORKSPACE_CONFIG_FILENAME,
    );
    let doesWorkspaceConfigExist = await fs.pathExists(workspaceConfigPath);
    let workspaceConfig: WorkspaceConfig | z.ZodError;

    if (doesWorkspaceConfigExist) {
      workspaceConfig = await readFile(workspaceConfigPath, workspaceConfigSchema, {
        parser: (rawString: string) => json5.parse<unknown>(rawString),
      });
    } else {
      workspaceConfig = {};
    }

    if (workspaceConfig instanceof z.ZodError) {
      let zodError = workspaceConfig;
      let workspaceError = new WorkspaceError('INVALID_WORKSPACE_CONFIG', {
        messageParameters: [workspaceConfigPath],
        data: {
          path: workspaceConfigPath,
          zodIssues: zodError.issues,
        },
      });

      errors.push(workspaceError);

      workspaceConfig = {};
    }

    if (this.isMultiProject) {
      // load root package.json
      let rootPackageJsonPath = path.join(this.path, 'package.json');
      let doesRootPackageJsonExist = await fs.pathExists(rootPackageJsonPath);
      let rootPackageJson: PackageJson | z.ZodError;

      if (doesRootPackageJsonExist) {
        rootPackageJson = await readFile(rootPackageJsonPath, packageJsonSchema, {
          parser: (rawString: string) => json5.parse<unknown>(rawString),
        });
      } else {
        rootPackageJson = {};
      }

      if (rootPackageJson instanceof z.ZodError) {
        let zodError = rootPackageJson;
        let workspaceError = new WorkspaceError('INVALID_PACKAGE_JSON', {
          messageParameters: [rootPackageJsonPath],
          data: {
            path: rootPackageJsonPath,
            zodIssues: zodError.issues,
          },
        });

        errors.push(workspaceError);

        rootPackageJson = {};
      }

      // how to find projects
      let packageJsonProjectGlobs = getPackageJsonWorkspaces(rootPackageJson);
      let workspaceConfigProjectGlobs = workspaceConfig.projects;

      if (
        packageJsonProjectGlobs &&
        workspaceConfigProjectGlobs &&
        !_.isEqual(packageJsonProjectGlobs, workspaceConfigProjectGlobs)
      ) {
        throw new WorkspaceError('PROJECT_GLOBS_MISMATCH', {
          data: {
            path: this.path,
          },
        });
      }

      let projectGlobs = packageJsonProjectGlobs ?? workspaceConfigProjectGlobs;

      this.projectGlobs = (projectGlobs ?? []) as WorkspaceProjectGlobs<M>;
      this.packageJson = rootPackageJson as WorkspacePackageJson<M>;
      this.config = workspaceConfig;
      this.errors = errors;

      if (repositoryUrl) {
        this.repository = {
          url: repositoryUrl,
          branches: repositoryBranches ?? [],
        };
      } else if (repositoryBranches) {
        this.repository = {
          branches: repositoryBranches,
        };
      }

      await this.readProjects();

      return this;
    }

    // we're dealing with single-project workspace
    this.config = workspaceConfig;
    this.errors = errors;

    if (repositoryUrl) {
      this.repository = {
        url: repositoryUrl,
        branches: repositoryBranches ?? [],
      };
    } else if (repositoryBranches) {
      this.repository = {
        branches: repositoryBranches,
      };
    }

    await this.readProjects();

    return this;
  }

  async update({args}: WorkspaceUpdateOptions): Promise<this> {
    if (!this.config.template) {
      throw new WorkspaceError('MISSING_CARSON_TEMPLATE_ID', {
        messageParameters: [
          path.join(this.path, CARSON_CONFIG_DIRECTORY, WORKSPACE_CONFIG_FILENAME),
        ],
      });
    }

    let template = await readCarsonTemplate(this.config.template);
    let templateRenders = await renderCarsonTemplate({
      template,
      templateData: {
        workspace: this,
        args,
      },
    });

    await applyTemplateRenders({
      templateRenders,
      targetPath: this.path,
      snapshotPath:
        template.config.autoEject ?
          undefined
        : path.join(this.path, CARSON_CONFIG_DIRECTORY, WORKSPACE_SNAPSHOT_FILENAME),
      ignoreStrategies: ['create'],
    });

    await this.read();

    return this;
  }

  getProject(projectName: Project<M> | string): Project<M> | undefined {
    for (let project of this.projects) {
      if (project.name === projectName || project === projectName) {
        return project;
      }
    }

    return undefined;
  }

  async createProject({
    templateId,
    projectPath,
    projectName,
    args,
  }: WorkspaceCreateProjectOptions): Promise<Project<M>> {
    let resolvedProjectPath = path.resolve(projectPath);

    if (this.projects.some((project) => resolvedProjectPath === project.path)) {
      throw new WorkspaceError('DUPLICATE_PROJECT_PATH', {
        messageParameters: [resolvedProjectPath],
      });
    }

    if (this.projects.some((project) => projectName === project.name)) {
      throw new WorkspaceError('DUPLICATE_PROJECT_NAME', {messageParameters: [projectName]});
    }

    if (!this.isMultiProject && this.projects.length >= 1) {
      throw new WorkspaceError('TOO_MANY_PROJECTS');
    }

    if (!this.isMultiProject && projectPath !== this.path) {
      throw new WorkspaceError('PATH_MISMATCH');
    }

    let newProject = await Project.create({
      templateId,
      projectPath,
      projectName,
      args,
      workspace: this,
    });

    this.addProject(newProject);

    return newProject;
  }

  addProject(newProject: Project<M>): this {
    if (this.projects.some((project) => newProject.path === project.path)) {
      throw new WorkspaceError('DUPLICATE_PROJECT_PATH', {
        messageParameters: [newProject.path],
      });
    }

    if (this.projects.some((project) => newProject.name === project.name)) {
      throw new WorkspaceError('DUPLICATE_PROJECT_NAME', {messageParameters: [newProject.name]});
    }

    if (!this.isMultiProject && this.projects.length >= 1) {
      throw new WorkspaceError('TOO_MANY_PROJECTS');
    }

    if (!this.isMultiProject && newProject.path !== this.path) {
      throw new WorkspaceError('PATH_MISMATCH');
    }

    this.projects.push(newProject);
    this.sortProjects();
    this.updateDependencies();

    return this;
  }

  addProjects(newProjects: Array<Project<M>>): this {
    for (let newProject of newProjects) {
      if (this.projects.some((project) => newProject.path === project.path)) {
        throw new WorkspaceError('DUPLICATE_PROJECT_PATH', {
          messageParameters: [newProject.path],
        });
      }

      if (this.projects.some((project) => newProject.name === project.name)) {
        throw new WorkspaceError('DUPLICATE_PROJECT_NAME', {messageParameters: [newProject.name]});
      }

      if (!this.isMultiProject && this.projects.length >= 1) {
        throw new WorkspaceError('TOO_MANY_PROJECTS');
      }

      if (!this.isMultiProject && newProject.path !== this.path) {
        throw new WorkspaceError('PATH_MISMATCH');
      }

      this.projects.push(newProject);
    }

    this.sortProjects();
    this.updateDependencies();

    return this;
  }

  async readProjects(): Promise<Array<Project<M>>> {
    if (this.projectGlobs) {
      let projects: Array<Project<M>> = [];
      let packagePaths = await glob(this.projectGlobs, {
        cwd: this.path,
        onlyDirectories: true,
      });

      for (let packagePath of packagePaths) {
        let projectPath = path.join(this.path, packagePath);

        if (await containsProject(projectPath)) {
          let project = await Project.read(projectPath, this);

          projects.push(project);
        }
      }

      this.projects = projects;

      this.sortProjects();
      this.updateDependencies();
    } else if (await containsProject(this.path)) {
      this.projects = [await Project.read(this.path, this)];

      this.sortProjects();
      this.updateDependencies();
    }

    return this.projects;
  }

  protected sortProjects(): void {
    this.projects.sort(compareProjectPath);
  }

  protected updateDependencies(): void {
    this.dependencies = WorkspaceDependencies.fromWorkspace(this);
    this.devDependencies = WorkspaceDependencies.fromWorkspace(this, {
      includeOnlyDevDependencies: true,
    });
    this.allDependencies = WorkspaceDependencies.fromWorkspace(this, {
      includeDevDependencies: true,
      includeWorkspaceDependencies: true,
    });
    this.dependencyVersions = this.allDependencies.getVersions({
      useExactVersions: true,
    });
  }
}
