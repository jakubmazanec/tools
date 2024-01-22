import {type Workspace} from '@jakubmazanec/carson';
import path from 'node:path';

export function getWorkspaceDirectoryName(workspace: Workspace | Workspace<false>) {
  return path.basename(workspace.path);
}
