import {ensureEmptyDirectory, pathToPosixPath} from '@jakubmazanec/fs-utils';
import {type PackageJson, packageJsonSchema, readFile} from '@jakubmazanec/zod-utils';
import fs from 'fs-extra';
import json5 from 'json5';
import path from 'node:path';
import {z} from 'zod';

import {
  CARSON_CONFIG_DIRECTORY,
  PROJECT_CONFIG_FILENAME,
  PROJECT_SNAPSHOT_FILENAME,
} from '../constants.js';
import {applyTemplateRenders} from '../template/applyTemplateRenders.js';
import {renderCarsonTemplate} from '../template/renderCarsonTemplate.js';
import {type ProjectConfig, projectConfigSchema} from './ProjectConfig.js';
import {type ProjectCreateOptions} from './ProjectCreateOptions.js';
import {ProjectError} from './ProjectError.js';
import {type ProjectOptions} from './ProjectOptions.js';
import {type ProjectUpdateOptions} from './ProjectUpdateOptions.js';
import {saveProjectConfig} from './saveProjectConfig.js';
import {type Workspace} from './Workspace.js';

/**
 * Project represent a self-contained piece of software (e.g. a package, or an app) that is part of a {@link Workspace}. Currently only Node.js projects are supported.
 *
 * @typeParam M If true, the project belongs to a multi-project workspace.
 */
export class Project<M extends boolean = true> {
  /** Project name. */
  name?: string;

  /** Project path. */
  path: string;

  /** Project path relative to workspace path. */
  relativePath: string;

  /** Project configuration; if it's not found, the default is an empty object. */
  config: ProjectConfig;

  /** Parsed project `package.json` file; if it's not found, the default is an empty object. */
  packageJson: PackageJson;

  /** Parent {@link Workspace} instance. */
  workspace: Workspace<M>;

  /** Errors found during reading from the file system. */
  errors: Array<InstanceType<typeof ProjectError>> = [];

  constructor({
    path: projectPath,
    name,
    config,
    packageJson,
    workspace,
    errors,
  }: ProjectOptions<M>) {
    // TODO: check that this path and workspace path are correct, i.e. project path must always be inside of workspace path
    this.path = projectPath;

    if (name) {
      this.name = name;
    }

    if (config) {
      this.config = config;
    } else {
      this.config = {};
    }

    if (packageJson) {
      this.packageJson = packageJson;
    } else {
      this.packageJson = {};
    }

    this.workspace = workspace;

    if (errors) {
      this.errors = errors;
    }

    if (this.packageJson.name?.length) {
      this.name = this.packageJson.name;
    }

    this.relativePath = pathToPosixPath(path.relative(this.workspace.path, this.path));
  }

  static async create<M extends boolean>({
    templateId,
    workspace,
    projectPath,
    projectName,
    args,
  }: ProjectCreateOptions<M>): Promise<Project<M>> {
    let project = new this({
      path: projectPath,
      name: projectName,
      config: {
        template: templateId,
      },
      workspace,
    });

    // if the workspace is single-project, it shares a directory with the project, so we can't insist on it being an empty directory
    if (workspace.isMultiProject) {
      try {
        await ensureEmptyDirectory(project.path);
      } catch {
        throw new ProjectError('PROJECT_PATH_NOT_EMPTY', {
          messageParameters: [project.path],
          data: {
            path: project.path,
          },
        });
      }
    }

    let templateRenders = await renderCarsonTemplate({
      templateId,
      templateData: {
        workspace,
        project,
        args,
      },
    });

    await applyTemplateRenders({
      templateRenders,
      targetPath: project.path,
      snapshotPath: path.join(project.path, CARSON_CONFIG_DIRECTORY, PROJECT_SNAPSHOT_FILENAME),
      ignoreStrategies: ['check'],
    });

    await saveProjectConfig({projectPath: project.path, projectConfig: {template: templateId}});

    await project.read();

    return project;
  }

  static async read<M extends boolean>(
    projectPath: string,
    workspace: Workspace<M>,
  ): Promise<Project<M>> {
    let project = new this({
      path: projectPath,
      workspace,
    });

    await project.read();

    return project;
  }

  async read() {
    if (!(await fs.pathExists(this.path))) {
      throw new ProjectError('NO_SUCH_PROJECT_PATH', {
        messageParameters: [this.path],
        data: {
          path: this.path,
        },
      });
    }

    let errors: Array<InstanceType<typeof ProjectError>> = [];

    // load project config
    let projectConfigPath = path.join(this.path, CARSON_CONFIG_DIRECTORY, PROJECT_CONFIG_FILENAME);
    let doesProjectConfigExist = await fs.pathExists(projectConfigPath);
    let projectConfig: ProjectConfig | z.ZodError;

    if (doesProjectConfigExist) {
      projectConfig = await readFile(projectConfigPath, projectConfigSchema, {
        parser: (rawString: string) => json5.parse<unknown>(rawString),
      });
    } else {
      projectConfig = {};
    }

    if (projectConfig instanceof z.ZodError) {
      let zodError = projectConfig;

      errors.push(
        new ProjectError('INVALID_PROJECT_CONFIG', {
          messageParameters: [projectConfigPath],
          data: {
            path: projectConfigPath,
            zodIssues: zodError.issues,
          },
        }),
      );

      projectConfig = {};
    }

    // load package.json
    let packageJsonPath = path.join(this.path, 'package.json');
    let doesPackageJsonExist = await fs.pathExists(packageJsonPath);
    let packageJson: PackageJson | z.ZodError;

    if (doesPackageJsonExist) {
      packageJson = await readFile(packageJsonPath, packageJsonSchema, {
        parser: (rawString: string) => json5.parse<unknown>(rawString),
      });
    } else {
      packageJson = {};
    }

    if (packageJson instanceof z.ZodError) {
      let zodError = packageJson;

      errors.push(
        new ProjectError('INVALID_PACKAGE_JSON', {
          messageParameters: [packageJsonPath],
          data: {
            path: packageJsonPath,
            zodIssues: zodError.issues,
          },
        }),
      );

      packageJson = {};
    }

    if (packageJson.name?.length) {
      this.name = packageJson.name;
    }

    this.config = projectConfig;
    this.packageJson = packageJson;
    this.errors = errors;

    return this;
  }

  async update({args}: ProjectUpdateOptions): Promise<this> {
    if (!this.config.template) {
      throw new ProjectError('MISSING_CARSON_TEMPLATE_ID', {
        messageParameters: [path.join(this.path, CARSON_CONFIG_DIRECTORY, PROJECT_CONFIG_FILENAME)],
      });
    }

    let templateRenders = await renderCarsonTemplate({
      templateId: this.config.template,
      templateData: {
        workspace: this.workspace,
        project: this,
        args,
      },
    });

    await applyTemplateRenders({
      templateRenders,
      targetPath: this.path,
      snapshotPath: path.join(this.path, CARSON_CONFIG_DIRECTORY, PROJECT_SNAPSHOT_FILENAME),
      ignoreStrategies: ['create'],
    });

    await this.read();

    return this;
  }
}
