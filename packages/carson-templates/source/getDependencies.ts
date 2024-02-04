import {type Workspace} from '@jakubmazanec/carson';
import semver from 'semver';

import {TEMPLATE_PACKAGE_NAME} from './constants.js';
import {DEPENDENCY_VERSIONS} from './dependency-versions.js';

function getMajorVersion(version: string) {
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

  const projectNames = new Set(workspace.projects.map((project) => project.name));

  for (const [dependencyName, dependencyVersion] of Object.entries(result)) {
    if (dependencyName === TEMPLATE_PACKAGE_NAME) {
      continue;
    }

    const installedDependency = workspace.allDependencies.find(
      (dependency) => dependencyName === dependency.name,
    );

    // if the dependency is already installed in the workspace, we might want to use that existing version
    if (installedDependency) {
      const version = [...installedDependency.exactVersions].sort().reverse()[0] as string;

      // if the dependency is actually a project in the workspace, we use existing version
      if (projectNames.has(dependencyName)) {
        if (semver.prerelease(version)?.length) {
          result[dependencyName] = version;
        } else {
          result[dependencyName] = `^${version}`;
        }
      }

      // we use existing version if its major version is equal or greater than major version recommended by the template
      if (getMajorVersion(version) >= getMajorVersion(dependencyVersion)) {
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
