import {Command} from '@jakubmazanec/cli';
import path from 'node:path';

import {UpdateWorkspace} from './UpdateWorkspace.js';
import {Workspace} from '../../workspace.js';

export const updateWorkspaceCommand = new Command(
  'update workspace',
  async (args, program) => {
    let resolvedPath = path.resolve(process.cwd(), args.options.path ?? '');
    let workspace = await Workspace.findAndRead(resolvedPath, {throwIfNotFound: true});

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
