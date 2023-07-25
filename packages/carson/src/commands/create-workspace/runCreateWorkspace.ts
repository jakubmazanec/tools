import {type CommandArguments} from '@jakubmazanec/cli';
import Observable from 'zen-observable';

import {type createWorkspaceCommand} from './createWorkspaceCommand.js';
import {Workspace} from '../../workspace.js';

export type CreateWorkspaceOptions = {
  workspacePath: string;
  templateId: string;
  args: CommandArguments<typeof createWorkspaceCommand>;
};

export type CreateWorkspaceStatus = string;

export function runCreateWorkspace({workspacePath, templateId, args}: CreateWorkspaceOptions) {
  return new Observable<CreateWorkspaceStatus>((observer) => {
    (async () => {
      observer.next('Creating files');

      let workspace = await Workspace.create({
        args,
        path: workspacePath,
        templateId,
      });

      observer.next('Updating the new workspace');

      await workspace.update({args});
    })()
      .then(() => {
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
}
