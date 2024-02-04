import {Command} from '@jakubmazanec/cli';

import {CreateWorkspace} from './CreateWorkspace.js';

export const createWorkspaceCommand = new Command(
  'create workspace',
  async (args, program) => {
    await program.renderElement(<CreateWorkspace args={args} />);
  },
  {
    description: 'Creates a new workspacee.',
    options: {
      path: {
        type: 'string',
      },
      template: {
        type: 'string',
      },
    },
  },
);
