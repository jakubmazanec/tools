import {type WorkspaceDependencyProject} from '../WorkspaceDependencyProject.js';

export function compareWorkspaceDependencyProjectName(
  projectA: WorkspaceDependencyProject,
  projectB: WorkspaceDependencyProject,
) {
  if (projectA.name < projectB.name) {
    return -1;
  } else if (projectA.name > projectB.name) {
    return 1;
  }

  return 0;
}
