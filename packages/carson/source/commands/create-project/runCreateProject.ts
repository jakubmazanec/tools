import {type CommandArguments} from '@jakubmazanec/cli';
import Observable from 'zen-observable';

import {type Workspace} from '../../workspace.js';
import {type createProjectCommand} from './createProjectCommand.js';

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

      // if the project doesn't have config with a template ID, it's on purpose, but it's still needed for the next update, so we'll add it manually
      project.config.template ??= templateId;

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
