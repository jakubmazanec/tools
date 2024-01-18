import {type Arguments, type Argv} from '@jakubmazanec/args';
import {type IsEqual, type Simplify} from '@jakubmazanec/ts-utils';
import {describe, expect, test} from 'vitest';

import {type Program} from '../../src/program.js';
import {Command} from '../../src/program/Command.js';

describe('Command', () => {
  describe('correct typings', () => {
    test('no errors', () => {
      let command = new Command('do stuff', async () => {}, {
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
      });
      let isTypeCorrect: IsEqual<
        Simplify<typeof command>,
        {
          readonly name: 'do stuff';
          readonly description?: string;
          readonly parameters: readonly [{readonly type: 'string'}];
          readonly options: {readonly foo: {readonly type: 'number'}};
          readonly allowUnknownOptions: false;
          readonly allowUnknownParameters: false;
          parseArguments: (argv: Argv) => Arguments<{
            commands: readonly ['do stuff'];
            parameters: readonly [{readonly type: 'string'}];
            options: {readonly foo: {readonly type: 'number'}};
            allowUnknownOptions: false;
            allowUnknownParameters: false;
          }>;
          run: (
            parsedArguments: Arguments<{
              commands: readonly ['do stuff'];
              parameters: readonly [{readonly type: 'string'}];
              options: {readonly foo: {readonly type: 'number'}};
              allowUnknownOptions: false;
              allowUnknownParameters: false;
            }>,
            program: Program,
          ) => Promise<void>;
        }
      > = true;

      expect(isTypeCorrect).toBe(true); // this test is only for typechecking
    });

    test('runtime types correspond', () => {
      let command = new Command('do stuff', async () => {}, {
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
      });

      expect(command).toMatchObject({
        name: 'do stuff',
        parameters: [{type: 'string'}],
        options: {foo: {type: 'number'}},
        allowUnknownOptions: false,
        allowUnknownParameters: false,
      });
    });
  });
});
