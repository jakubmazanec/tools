// TODO: enable tests when this is fixed: https://github.com/vadimdemedes/ink/issues/688
import {render} from 'ink-testing-library';
import {describe, expect, test} from 'vitest';

import {Command} from '../../source/program/Command.js';
import {Program} from '../../source/program/Program.js';
import {Help} from '../../source/ui/Help.js';

describe.todo('Help', () => {
  test('works', async () => {
    let program = await Program.create({
      name: 'App',
      version: '1.0.0',
      description: 'Test CLI app',
      bin: 'foo',
    });

    program.addCommand(
      new Command('do stuff', async () => {}, {
        parameters: [
          {
            type: 'string',
          },
        ],
        options: {
          foo: {
            type: 'number',
          },
        },
      }),
    );

    let {lastFrame} = render(<Help program={program} />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35mApp[39m [90m1.0.0[39m
      [37mTest CLI app[39m

      [36mi[39m [97mUsage[39m
        [90mfoo[39m do stuff [90m[<parameters>][39m [90m[<options>][39m"
    `);
  });
});
