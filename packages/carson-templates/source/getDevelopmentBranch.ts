import {type Workspace} from '@jakubmazanec/carson';

import {DEVELOPMENT_BRANCH_NAMES} from './constants.js';

export function getDevelopmentBranch(workspace: Workspace | Workspace<false>) {
  for (let branch of workspace.repository?.branches ?? []) {
    if (DEVELOPMENT_BRANCH_NAMES.has(branch)) {
      return branch;
    }
  }

  return undefined;
}
