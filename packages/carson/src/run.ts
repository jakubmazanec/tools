import {Program, getProgramDetail} from '@jakubmazanec/cli';
import {readPackageJson} from '@jakubmazanec/zod-utils';
import path from 'node:path';

import {createWorkspaceCommand, updateWorkspaceCommand, createProjectCommand} from './commands.js';
import {PACKAGE_PATH} from './constants.js';

let programDetail = getProgramDetail(
  await readPackageJson(path.join(PACKAGE_PATH, 'package.json'), {throwOnZodError: true}),
);

let program = await Program.create({
  ...programDetail,
  displayName: 'Carson',
  checkForUpdate: true,
});

program.addCommand(createWorkspaceCommand);
program.addCommand(createProjectCommand);
program.addCommand(updateWorkspaceCommand);

await program.run(process.argv.slice(2));
