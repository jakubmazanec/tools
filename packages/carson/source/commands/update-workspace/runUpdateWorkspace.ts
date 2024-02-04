import {type CommandArguments} from '@jakubmazanec/cli';
import Observable from 'zen-observable';

import {type Workspace} from '../../workspace.js';
import {type updateWorkspaceCommand} from './updateWorkspaceCommand.js';

export type UpdateWorkspaceAndProjectsOptions = {
  workspace: Workspace | Workspace<false>;
  args: CommandArguments<typeof updateWorkspaceCommand>;
};

export type UpdateWorkspaceAndProjectsStatus = string;

export function runUpdateWorkspace({workspace, args}: UpdateWorkspaceAndProjectsOptions) {
  return new Observable<UpdateWorkspaceAndProjectsStatus>((observer) => {
    (async () => {
      // update workspace
      observer.next('Updating workspace');

      await workspace.update({args});

      // update projects
      for (let project of workspace.projects) {
        observer.next(`Updating project ${project.name ?? '?'}`);

        await project.update({args});
      }
    })()
      .then(() => {
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
}
