import {type Workspace} from '@jakubmazanec/carson';
import path from 'node:path';

const GIT_REPO_REGEXP = /\/([^\/]+?)(\.git)?$/;

export function getWorkspaceName(workspace: Workspace | Workspace<false>) {
  if (workspace.packageJson?.name) {
    return workspace.packageJson.name;
  }

  if (workspace.repository?.url) {
    let matches = workspace.repository.url.match(GIT_REPO_REGEXP);

    if (matches?.[1]) {
      return matches[1];
    }
  }

  return path.basename(workspace.path);
}
