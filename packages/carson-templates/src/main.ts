import {type Project, type Workspace} from '@jakubmazanec/carson';

export {default as lodash} from 'lodash';

export function getMajorVersion(version: string) {
  return Number(version.split('.')[0]!.replace(/\D/, ''));
}

export function getDependencies(
  defaultDependencies: Record<string, string>,
  workspace: Workspace | Workspace<false>,
) {
  let dependencies = {...defaultDependencies};

  let projectNames = workspace.projects.map((project) => project.name);

  for (let [dependencyName, dependencyVersion] of Object.entries(dependencies)) {
    let installedDependency = workspace.allDependencies.find(
      (dependency) => dependencyName === dependency.name,
    );

    // if the dependency is already installed in the workspace, we might want to use that existing version
    if (installedDependency) {
      let version = [...installedDependency.exactVersions].sort().reverse()[0] as string;

      // if the dependency is actually a project in the workspace, we use existing version
      if (projectNames.includes(dependencyName)) {
        dependencies[dependencyName] = `^${version}`;
      }

      // we use existing version only if major versions match; we don't want the user of this template to be able to overwrite any major version number and use potentially incompatible version
      if (getMajorVersion(version) === getMajorVersion(dependencyVersion)) {
        dependencies[dependencyName] = `^${version}`;
      }
    }
  }

  return dependencies;
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
