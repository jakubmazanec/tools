import {vitest, describe, test, expect} from 'vitest';

import {Command} from '../../src/program/Command.js';
import {Program} from '../../src/program/Program.js';

describe('Program', () => {
  test('works', async () => {
    let action = vitest.fn(async () => {});
    let program = await Program.create({
      name: 'App',
      version: '1.0.0',
      description: 'Test CLI app',
      bin: 'foo',
    });
    let command = new Command('do stuff', action, {
      options: {
        help: {
          type: 'boolean',
          defaultValue: false,
        },
      },
      allowUnknownParameters: true,
    });

    program.addCommand(command);

    await program.run(['do', 'stuff']);

    expect(program).toMatchObject({
      name: 'App',
      version: '1.0.0',
      description: 'Test CLI app',
      bin: 'foo',
    });
    expect(action).toHaveBeenCalledTimes(1);
  });
});
