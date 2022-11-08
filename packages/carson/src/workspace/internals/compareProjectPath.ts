import {type Project} from '../Project.js';

export function compareProjectPath<M extends boolean = true>(
  projectA: Project<M>,
  projectB: Project<M>,
) {
  if (projectA.path < projectB.path) {
    return -1;
  } else if (projectA.path > projectB.path) {
    return 1;
  }

  return 0;
}
