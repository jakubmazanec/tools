import {type CommandArguments} from '@jakubmazanec/cli';
import Observable from 'zen-observable';

import {Workspace} from '../../workspace.js';
import {type createWorkspaceCommand} from './createWorkspaceCommand.js';

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

      // if the workspace doesn't have config with a template ID, it's on purpose, but it's still needed for the next update, so we'll add it manually
      workspace.config.template ??= templateId;

      await workspace.update({args});
    })()
      .then(() => {
        observer.complete();
      })
      .catch((error: unknown) => {
        observer.error(error);
      });
  });
}
