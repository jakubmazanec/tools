import {type Workspace} from '@jakubmazanec/carson';

import {MAIN_BRANCH_NAMES} from './constants.js';

export function getMainBranch(workspace: Workspace | Workspace<false>) {
  for (let branch of workspace.repository?.branches ?? []) {
    if (MAIN_BRANCH_NAMES.has(branch)) {
      return branch;
    }
  }

  return undefined;
}
