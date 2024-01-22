import {type Project, type Workspace} from '@jakubmazanec/carson';

export function getReferences(
  workspace: Workspace | Workspace<false>,
  project: Project | Project<false>,
) {
  let references = [];

  for (let dependency of workspace.allDependencies) {
    for (let workspaceProject of workspace.projects) {
      if (dependency.name === workspaceProject.name) {
        for (let dependencyProject of dependency.projects) {
          if (dependencyProject.name === project.name) {
            references.push({
              path: `${project.relativePath
                .split('/')
                .map(() => '..')
                .join('/')}/${workspaceProject.relativePath}`,
            });
          }
        }
      }
    }
  }

  references.sort((a, b) => a.path.localeCompare(b.path));

  return references;
}
