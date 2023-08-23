import {Command} from '@jakubmazanec/cli';
import path from 'node:path';

import {CreateProject} from './CreateProject.js';
import {Workspace} from '../../workspace.js';

export const createProjectCommand = new Command(
  'create project',
  async (args, program) => {
    let targetPath = path.resolve(process.cwd(), args.options.path ?? '');
    let workspace = await Workspace.findAndRead(targetPath, {throwIfNotFound: true});

    if (workspace.errors[0]) {
      throw workspace.errors[0];
    }

    for (let project of workspace.projects) {
      if (project.errors[0]) {
        throw project.errors[0];
      }
    }

    await program.renderElement(<CreateProject args={args} workspace={workspace} />);
  },
  {
    description: 'Creates a new project in an existing workspace.',
    options: {
      path: {
        type: 'string',
      },
      template: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
);
