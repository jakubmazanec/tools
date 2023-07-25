import {type Project, type Workspace} from '@jakubmazanec/carson';
import semver from 'semver';

export {default as lodash} from 'lodash';
export {default as semver} from 'semver';

const MAIN_BRANCH_NAMES = new Set(['main', 'master']);
const DEVELOPMENT_BRANCH_NAMES = new Set(['development', 'develop', 'dev']);

const DEPENDENCY_VERSIONS: Record<string, string> = {
  '@changesets/cli': '^2.0.0',
  '@jakubmazanec/carson': '^0.0.0',
  '@jakubmazanec/carson-templates': '^0.0.0',
  '@jest/globals': '^29.0.0',
  '@swc/cli': '^0.1.0',
  '@swc/core': '^1.0.0',
  '@testing-library/jest-dom': '^5.0.0',
  '@types/node': '^16.0.0',
  chokidar: '^3.0.0',
  'cross-env': '^7.0.0',
  'del-cli': '^5.0.0',
  eslint: '^8.0.0',
  jest: '^29.0.0',
  'patch-package': '^6.0.0',
  prettier: '^2.0.0',
  'prettier-plugin-packagejson': '^2.0.0',
  'ts-jest': '^29.0.0',
  'ts-node': '^10.0.0',
  turbo: '^1.0.0',
  typedoc: '^0.24.0',
  'typedoc-plugin-markdown': '^3.0.0',
  typescript: '^5.0.0',
};

export function getMainBranch(workspace: Workspace | Workspace<false>) {
  for (let branch of workspace.repository?.branches ?? []) {
    if (MAIN_BRANCH_NAMES.has(branch)) {
      return branch;
    }
  }

  return undefined;
}

export function getDevelopmentBranch(workspace: Workspace | Workspace<false>) {
  for (let branch of workspace.repository?.branches ?? []) {
    if (DEVELOPMENT_BRANCH_NAMES.has(branch)) {
      return branch;
    }
  }

  return undefined;
}

export function getMajorVersion(version: string) {
  return Number(version.split('.')[0]!.replace(/\D/, ''));
}

export function getDependencies(dependencies: string[], workspace: Workspace | Workspace<false>) {
  const result: Record<string, string> = {};

  for (const dependency of dependencies) {
    const version = DEPENDENCY_VERSIONS[dependency];

    if (version) {
      result[dependency] = version;
    }
  }

  const projectNames = workspace.projects.map((project) => project.name);

  for (const [dependencyName, dependencyVersion] of Object.entries(result)) {
    const installedDependency = workspace.allDependencies.find(
      (dependency) => dependencyName === dependency.name,
    );

    // if the dependency is already installed in the workspace, we might want to use that existing version
    if (installedDependency) {
      const version = [...installedDependency.exactVersions].sort().reverse()[0] as string;

      // if the dependency is actually a project in the workspace, we use existing version
      if (projectNames.includes(dependencyName)) {
        if (semver.prerelease(version)?.length) {
          result[dependencyName] = version;
        } else {
          result[dependencyName] = `^${version}`;
        }
      }

      // we use existing version only if major versions match; we don't want the user of this template to be able to overwrite any major version number and use potentially incompatible version
      if (getMajorVersion(version) === getMajorVersion(dependencyVersion)) {
        if (semver.prerelease(version)?.length) {
          result[dependencyName] = version;
        } else {
          result[dependencyName] = `^${version}`;
        }
      }
    }
  }

  return result;
}

export function getReferences(
  workspace: Workspace | Workspace<false>,
  project: Project | Project<false>,
) {
  let references = [];
  let currentProject = project;

  for (let dependency of workspace.allDependencies) {
    for (let project of workspace.projects) {
      if (dependency.name === project.name) {
        for (let dependencyProject of dependency.projects) {
          if (dependencyProject.name === currentProject.name) {
            references.push({
              path: `${currentProject.relativePath
                .split('/')
                .map(() => '..')
                .join('/')}/${project.relativePath}`,
            });
          }
        }
      }
    }
  }

  references.sort((a, b) => a.path.localeCompare(b.path));

  return references;
}
