import {render} from 'ink-testing-library';

import {Command} from '../../src/program/Command.js';
import {Program} from '../../src/program/Program.js';
import {Help} from '../../src/ui/Help.js';

describe('Help', () => {
  test('works', () => {
    let program = new Program({
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
