import {type CommandArguments} from '@jakubmazanec/cli';
import Observable from 'zen-observable';

import {type createProjectCommand} from './createProjectCommand.js';
import {type Workspace} from '../../workspace.js';

export type CreateProjectOptions = {
  projectPath: string;
  projectName: string;
  templateId: string;
  workspace: Workspace | Workspace<false>;
  args: CommandArguments<typeof createProjectCommand>;
};

export type CreateProjectStatus = string;

export function runCreateProject({
  projectPath,
  templateId,
  projectName,
  workspace,
  args,
}: CreateProjectOptions) {
  return new Observable<CreateProjectStatus>((observer) => {
    (async () => {
      observer.next('Creating files');

      let project = await workspace.createProject({
        projectPath,
        projectName,
        templateId,
        args,
      });

      observer.next('Updating the new project');

      await project.update({args});
    })()
      .then(() => {
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
}
