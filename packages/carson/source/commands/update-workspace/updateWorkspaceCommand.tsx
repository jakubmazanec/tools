import {Command} from '@jakubmazanec/cli';
import path from 'node:path';

import {Workspace} from '../../workspace.js';
import {UpdateWorkspace} from './UpdateWorkspace.js';

export const updateWorkspaceCommand = new Command(
  'update workspace',
  async (args, program) => {
    let resolvedPath = path.resolve(process.cwd(), args.options.path ?? '');
    let workspace = await Workspace.findAndRead(resolvedPath, {throwIfNotFound: true});

    if (workspace.errors[0]) {
      throw workspace.errors[0];
    }

    for (let project of workspace.projects) {
      if (project.errors[0]) {
        throw project.errors[0];
      }
    }

    await program.renderElement(<UpdateWorkspace workspace={workspace} args={args} />);
  },
  {
    description: 'Updates files in a workspace.',
    options: {
      path: {
        type: 'string',
      },
    },
  },
);
