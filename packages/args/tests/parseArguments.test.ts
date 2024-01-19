import {type IsEqual} from '@jakubmazanec/ts-utils';
import {describe, expect, test} from 'vitest';

import {parseArguments} from '../src/parseArguments.js';
import {ParsingError} from '../src/ParsingError.js';
import {ValidationError} from '../src/ValidationError.js';
import {EMPTY_PARSED_ARGUMENTS, NUMBER_STRING, SPECIAL_CHARACTERS} from './constants.js';

describe('parseArgs()', () => {
  describe('correct typings', () => {
    test('no errors (#1)', () => {
      let result = parseArguments([], {
        commands: ['do stuff', 'undo stuff'],
      });
      let isTypeCorrect: IsEqual<
        typeof result,
        {
          readonly command: 'do stuff' | 'undo stuff' | undefined;
          readonly parameters: null;
          readonly options: null;
          readonly unknownOptions: null;
          readonly rest: string[];
          readonly errors: Error[];
        }
      > = true;

      expect(isTypeCorrect).toBeTruthy(); // this test is only for typechecking
    });

    test('no errors (#2)', () => {
      let result = parseArguments([], {
        parameters: [
          {
            description: 'Boolean parameter.',
            type: 'boolean',
          },
          {
            description: 'Required boolean parameter.',
            type: 'boolean',
            required: true,
          },
          {
            description: 'Boolean parameter with default value.',
            type: 'boolean',
            defaultValue: true,
          },
        ],
      });
      let isTypeCorrect: IsEqual<
        typeof result,
        {
          readonly command: null;
          readonly parameters: readonly [boolean | undefined, boolean | undefined, boolean];
          readonly options: null;
          readonly unknownOptions: null;
          readonly rest: string[];
          readonly errors: Error[];
        }
      > = true;

      expect(isTypeCorrect).toBeTruthy(); // this test is only for typechecking
    });

    test('no errors (#3)', () => {
      let result = parseArguments([], {
        parameters: [
          {
            description: 'Number parameter.',
            type: 'number',
          },
          {
            description: 'Required number parameter.',
            type: 'number',
            required: true,
          },
          {
            description: 'Number parameter with default value.',
            type: 'number',
            defaultValue: 42,
          },
          {
            description: 'Number parameter with choices.',
            type: 'number',
            choices: [42, 47],
          },
          {
            description: 'Required boolean parameter with choices.',
            type: 'number',
            choices: [42, 47],
            required: true,
          },
          {
            description: 'Number parameter with choices and default value.',
            type: 'number',
            choices: [42, 47],
            defaultValue: 42,
          },
        ],
      });
      let isTypeCorrect: IsEqual<
        typeof result,
        {
          readonly command: null;
          readonly parameters: readonly [
            number | undefined,
            number | undefined,
            number,
            42 | 47 | undefined,
            42 | 47 | undefined,
            42 | 47,
          ];
          readonly options: null;
          readonly unknownOptions: null;
          readonly rest: string[];
          readonly errors: Error[];
        }
      > = true;

      expect(isTypeCorrect).toBeTruthy(); // this test is only for typechecking
    });

    test('no errors (#4)', () => {
      let result = parseArguments([], {
        parameters: [
          {
            description: 'String parameter.',
            type: 'string',
          },
          {
            description: 'Required string parameter.',
            type: 'string',
            required: true,
          },
          {
            description: 'String parameter with default value.',
            type: 'string',
            defaultValue: 'foo',
          },
          {
            description: 'String parameter with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
          },
          {
            description: 'Required string parameter with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
            required: true,
          },
          {
            description: 'String parameter with choices and default value.',
            type: 'string',
            choices: ['foo', 'bar'],
            defaultValue: 'foo',
          },
        ],
      });
      let isTypeCorrect: IsEqual<
        typeof result,
        {
          readonly command: null;
          readonly parameters: readonly [
            string | undefined,
            string | undefined,
            string,
            'bar' | 'foo' | undefined,
            'bar' | 'foo' | undefined,
            'bar' | 'foo',
          ];
          readonly options: null;
          readonly unknownOptions: null;
          readonly rest: string[];
          readonly errors: Error[];
        }
      > = true;

      expect(isTypeCorrect).toBeTruthy(); // this test is only for typechecking
    });

    test('no errors (#5)', () => {
      let result = parseArguments([], {
        options: {
          booleanOption1: {
            description: 'Boolean option.',
            type: 'boolean',
          },
          booleanOption2: {
            description: 'Boolean option with default value.',
            type: 'boolean',
            defaultValue: true,
          },
          booleanOption3: {
            description: 'Required boolean option.',
            type: 'boolean',
            required: true,
          },
          booleanOption4: {
            description: 'Boolean array option.',
            type: 'boolean',
            multiple: true,
          },
          booleanOption5: {
            description: 'Boolean array option with default value.',
            type: 'boolean',
            multiple: true,
            defaultValue: [true, true],
          },
          booleanOption6: {
            description: 'Required boolean array option.',
            type: 'boolean',
            multiple: true,
            required: true,
          },
          numberOption1: {
            description: 'Number option.',
            type: 'number',
          },
          numberOption2: {
            description: 'Number option with default value.',
            type: 'number',
            defaultValue: 42,
          },
          numberOption3: {
            description: 'Required number option.',
            type: 'number',
            required: true,
          },
          numberOption4: {
            description: 'Number array option.',
            type: 'number',
            multiple: true,
          },
          numberOption5: {
            description: 'Number array option with default value.',
            type: 'number',
            multiple: true,
            defaultValue: [42, 47],
          },
          numberOption6: {
            description: 'Required number array option.',
            type: 'number',
            multiple: true,
            required: true,
          },
          numberOption7: {
            description: 'Number option with choices.',
            type: 'number',
            choices: [42, 47],
          },
          numberOption8: {
            description: 'Number option with choices and default value.',
            type: 'number',
            choices: [42, 47],
            defaultValue: 42,
          },
          numberOption9: {
            description: 'Required Number option with choices.',
            type: 'number',
            choices: [42, 47],
            required: true,
          },
          numberOption10: {
            description: 'Number array option with choices.',
            type: 'number',
            choices: [42, 47],
            multiple: true,
          },
          numberOption11: {
            description: 'Number array option with choices and default value.',
            type: 'number',
            choices: [42, 47],
            multiple: true,
            defaultValue: [42, 47],
          },
          numberOption12: {
            description: 'Required number array option with choices.',
            type: 'number',
            choices: [42, 47],
            multiple: true,
            required: true,
          },
          numberOption13: {
            description: 'Count option.',
            type: 'number',
            count: true,
          },
          numberOption14: {
            description: 'Count option with default value.',
            type: 'number',
            count: true,
            defaultValue: 42,
          },
          numberOption15: {
            description: 'Required count option.',
            type: 'number',
            count: true,
            required: true,
          },
          stringOption1: {
            description: 'Number option.',
            type: 'string',
          },
          stringOption2: {
            description: 'Number option with default value.',
            type: 'string',
            defaultValue: 'foo',
          },
          stringOption3: {
            description: 'Required string option.',
            type: 'string',
            required: true,
          },
          stringOption4: {
            description: 'Number array option.',
            type: 'string',
            multiple: true,
          },
          stringOption5: {
            description: 'Number array option with default value.',
            type: 'string',
            multiple: true,
            defaultValue: ['foo', 'bar'],
          },
          stringOption6: {
            description: 'Required string array option.',
            type: 'string',
            multiple: true,
            required: true,
          },
          stringOption7: {
            description: 'Number option with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
          },
          stringOption8: {
            description: 'Number option with choices and default value.',
            type: 'string',
            choices: ['foo', 'bar'],
            defaultValue: 'foo',
          },
          stringOption9: {
            description: 'Required Number option with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
            required: true,
          },
          stringOption10: {
            description: 'Number array option with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
            multiple: true,
          },
          stringOption11: {
            description: 'Number array option with choices and default value.',
            type: 'string',
            choices: ['foo', 'bar'],
            multiple: true,
            defaultValue: ['foo', 'bar'],
          },
          stringOption12: {
            description: 'Required string array option with choices.',
            type: 'string',
            choices: ['foo', 'bar'],
            multiple: true,
            required: true,
          },
        },
      });

      let isTypeCorrect: IsEqual<
        typeof result,
        {
          readonly command: null;
          readonly parameters: null;
          readonly options: {
            readonly booleanOption1: boolean | undefined;
            readonly booleanOption2: boolean;
            readonly booleanOption3: boolean | undefined;
            readonly booleanOption4: boolean[] | undefined;
            readonly booleanOption5: boolean[];
            readonly booleanOption6: boolean[] | undefined;

            readonly numberOption1: number | undefined;
            readonly numberOption2: number;
            readonly numberOption3: number | undefined;
            readonly numberOption4: number[] | undefined;
            readonly numberOption5: number[];
            readonly numberOption6: number[] | undefined;
            readonly numberOption7: 42 | 47 | undefined;
            readonly numberOption8: 42 | 47;
            readonly numberOption9: 42 | 47 | undefined;
            readonly numberOption10: Array<42 | 47> | undefined;
            readonly numberOption11: Array<42 | 47>;
            readonly numberOption12: Array<42 | 47> | undefined;
            readonly numberOption13: number | undefined;
            readonly numberOption14: number;
            readonly numberOption15: number | undefined;

            readonly stringOption1: string | undefined;
            readonly stringOption2: string;
            readonly stringOption3: string | undefined;
            readonly stringOption4: string[] | undefined;
            readonly stringOption5: string[];
            readonly stringOption6: string[] | undefined;
            readonly stringOption7: 'bar' | 'foo' | undefined;
            readonly stringOption8: 'bar' | 'foo';
            readonly stringOption9: 'bar' | 'foo' | undefined;
            readonly stringOption10: Array<'bar' | 'foo'> | undefined;
            readonly stringOption11: Array<'bar' | 'foo'>;
            readonly stringOption12: Array<'bar' | 'foo'> | undefined;
          };
          readonly unknownOptions: null;
          readonly rest: string[];
          readonly errors: Error[];
        }
      > = true;

      expect(isTypeCorrect).toBeTruthy(); // this test is only for typechecking
    });

    test('expected errors', () => {
      parseArguments([], {
        parameters: [
          // @ts-expect-error - this is actually invalid value for property `defaultValue`
          {
            type: 'boolean',
            required: true,
            defaultValue: 42,
          },
          {
            // @ts-expect-error - this is actually invalid value for property `type`
            type: 'foobar',
          },
          // @ts-expect-error - this is actually invalid value for property `defaultValue`
          {
            type: 'string',
            defaultValue: 42,
          },
          {
            type: 'number',
            // @ts-expect-error - this is actually invalid value for property `choices`
            choices: ['42', '47'],
          },
        ],
        options: {
          // @ts-expect-error - this is actually invalid value for property `count`
          option1: {
            type: 'string',
            count: true,
          },
          // @ts-expect-error - this is actually invalid value for property `defaultValue`
          option2: {
            type: 'string',
            defaultValue: false,
          },
          // @ts-expect-error - this is actually invalid value for property `defaultValue`
          option3: {
            type: 'number',
            multiple: true,
            defaultValue: 42,
          },
          // @ts-expect-error - you can't actually have both `defaultValue` and `required`
          option4: {
            type: 'string',
            multiple: true,
            defaultValue: ['foo'],
            required: true,
          },
        },
      });

      expect(true).toBeTruthy(); // this test is only for typechecking
    });

    test('runtime types correspond (#1)', () => {
      let result = parseArguments([], {
        parameters: [
          {
            type: 'string',
          },
        ],
        allowUnknownParameters: true,
      });

      expect(result).toEqual({
        command: null,
        parameters: [undefined],
        options: null,
        rest: [],
        unknownOptions: null,
        errors: [],
      });
      expect(result.parameters).toHaveLength(1);
      expect(typeof result.parameters[0]).toBe('undefined');
    });

    test('runtime types correspond (#2)', () => {
      let result = parseArguments(['foo', 'bar', 'baz'], {
        parameters: [
          {
            type: 'string',
          },
        ],
        allowUnknownParameters: true,
      });

      expect(result).toEqual({
        command: null,
        parameters: ['foo', 'bar', 'baz'],
        options: null,
        rest: [],
        unknownOptions: null,
        errors: [],
      });
      expect(result.parameters).toHaveLength(3);
      expect(typeof result.parameters[0]).toBe('string');
      expect(typeof result.parameters[1]).toBe('string');
      expect(typeof result.parameters[2]).toBe('string');
      expect(typeof result.parameters[3]).toBe('undefined');
    });

    test('runtime types correspond (#3)', () => {
      let result = parseArguments([], {
        parameters: [
          {
            type: 'string',
            defaultValue: 'foo',
          },
        ],
        allowUnknownParameters: true,
      });

      expect(result).toEqual({
        command: null,
        parameters: ['foo'],
        options: null,
        rest: [],
        unknownOptions: null,
        errors: [],
      });
      expect(result.parameters).toHaveLength(1);
      expect(typeof result.parameters[0]).toBe('string');
      expect(typeof result.parameters[1]).toBe('undefined');
    });
  });

  describe('commands parsing', () => {
    test.each([
      {
        label: 'commands must have valid format',
        args: [],
        config: {
          commands: [
            'too  many  spaces',
            'invalid charactersěščřžýáíé',
            '123 starting with numbers',
          ],
        } as const,
        expectedResult: {
          command: undefined,
          errors: [
            new ValidationError('INVALID_COMMAND', {messageParameters: ['too  many  spaces']}),
            new ValidationError('INVALID_COMMAND', {
              messageParameters: ['invalid charactersěščřžýáíé'],
            }),
            new ValidationError('INVALID_COMMAND', {
              messageParameters: ['123 starting with numbers'],
            }),
          ],
        },
      },
      {
        label: 'commands are parsed',
        args: ['build'],
        config: {commands: ['build', 'deploy'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: 'build',
          parameters: [],
        },
      },
      {
        label: 'only one command is parsed (#1)',
        args: ['build', 'deploy'],
        config: {commands: ['build', 'deploy'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: 'build',
          parameters: ['deploy'],
        },
      },
      {
        label: 'only one command is parsed (#2)',
        args: ['build', 'deploy'],
        config: {commands: ['build', 'deploy']} as const,
        expectedResult: {
          command: 'build',
          errors: [new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['deploy']})],
        },
      },
      {
        label: 'only one command is parsed (#3)',
        args: ['build', 'app', 'deploy', 'app'],
        config: {commands: ['build app', 'deploy app'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: 'build app',
          parameters: ['deploy', 'app'],
        },
      },
      {
        label: 'multi-word commands are parsed',
        args: ['build', 'app'],
        config: {commands: ['build app', 'deploy app'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: 'build app',
          parameters: [],
        },
      },
      {
        label: 'multi-word commands are parsed only complete',
        args: ['build', 'foobar'],
        config: {commands: ['build app', 'deploy app']} as const,
        expectedResult: {
          command: undefined,
          errors: [
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['build']}),
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['foobar']}),
          ],
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#1)',
        args: ['app', 'build'],
        config: {commands: ['build app', 'deploy app'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: undefined,
          parameters: ['app', 'build'],
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#2)',
        args: ['app', 'build'],
        config: {commands: ['build app', 'deploy app']} as const,
        expectedResult: {
          command: undefined,
          errors: [
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['app']}),
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['build']}),
          ],
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#3)',
        args: ['app', 'build', 'foobar'],
        config: {commands: ['build app', 'deploy app'], allowUnknownParameters: true} as const,
        expectedResult: {
          command: undefined,
          parameters: ['app', 'build', 'foobar'],
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#4)',
        args: ['app', '--foo', 'bar', 'build'],
        config: {
          commands: ['build app', 'deploy app'],
          allowUnknownParameters: true,
          allowUnknownOptions: true,
        } as const,
        expectedResult: {
          command: undefined,
          parameters: ['app', 'build'],
          unknownOptions: {
            foo: 'bar',
          },
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#4)',
        args: ['build', '--foo', 'bar', 'app'],
        config: {
          commands: ['build app', 'deploy app'],
          allowUnknownParameters: true,
          allowUnknownOptions: true,
        } as const,
        expectedResult: {
          command: undefined,
          parameters: ['build', 'app'],
          unknownOptions: {
            foo: 'bar',
          },
        },
      },
      {
        label: 'multi-word commands are parsed only in correct order (#5)',
        args: ['build', '--foobar', 'app'],
        config: {commands: ['build app', 'deploy app']} as const,
        expectedResult: {
          command: undefined,
          errors: [
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['build']}),
            new ParsingError('UNKNOWN_OPTION', {messageParameters: ['foobar']}),
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['app']}),
          ],
        },
      },
      {
        label: "order of command, parameters and options doesn't matter",
        args: ['baz', '--foo', 'bar', 'build', 'app'],
        config: {
          commands: ['build app', 'deploy app'],
          allowUnknownParameters: true,
          allowUnknownOptions: true,
        } as const,
        expectedResult: {
          command: 'build app',
          parameters: ['baz'],
          unknownOptions: {
            foo: 'bar',
          },
        },
      },
    ])('$label', ({args, config, expectedResult}) => {
      let result = parseArguments(args, config);

      expect(result).toEqual({
        ...EMPTY_PARSED_ARGUMENTS,
        ...expectedResult,
      });
    });
  });

  describe('parameters parsing', () => {
    test.each([
      {
        label: 'unknown parameters are parsed as strings',
        args: ['foo', 'bar', 'baz'],
        config: {
          allowUnknownParameters: true,
        } as const,
        expectedResult: {parameters: ['foo', 'bar', 'baz']},
      },
      {
        label: 'parameters are parsed as correct type',
        args: ['1', '2', '3'],
        config: {
          parameters: [{type: 'boolean'}, {type: 'number'}, {type: 'string'}],
        } as const,
        expectedResult: {parameters: [true, 2, '3']},
      },
      {
        label: 'parameters can have choices',
        args: ['42', 'foo'],
        config: {
          parameters: [
            {type: 'number', choices: [42, 47]},
            {type: 'string', choices: ['foo', 'bar']},
          ],
        } as const,
        expectedResult: {parameters: [42, 'foo']},
      },
      {
        label: 'missing required parameter leads to an error',
        args: [],
        config: {
          parameters: [{type: 'string', required: true}],
        } as const,
        expectedResult: {
          parameters: [undefined],
          errors: [new ValidationError('MISSING_PARAMETER', {messageParameters: [0]})],
        },
      },
      {
        label: 'mismatched choices and default value lead to an error',
        args: [],
        config: {
          parameters: [{type: 'string', choices: ['foo', 'bar'], defaultValue: 'baz'}],
        } as const,
        expectedResult: {
          parameters: ['baz'],
          errors: [
            new ValidationError('INVALID_PARAMETER_DEFAULT_AND_CHOICES', {
              messageParameters: [0, 'baz'],
            }),
          ],
        },
      },
      {
        label: 'required parameter can be preceded by parameter with a default value',
        args: ['foo', 'bar'],
        config: {
          parameters: [
            {type: 'string', defaultValue: 'foo'},
            {type: 'string', required: true},
          ],
        } as const,
        expectedResult: {
          parameters: ['foo', 'bar'],
          errors: [],
        },
      },
      {
        label: 'invalid required parameter order leads to an error (#1)',
        args: ['foo', 'bar'],
        config: {
          parameters: [{type: 'string'}, {type: 'string', required: true}],
        } as const,
        expectedResult: {
          parameters: ['foo', 'bar'],
          errors: [
            new ValidationError('INVALID_PARAMETER_ORDER', {
              messageParameters: [1],
            }),
          ],
        },
      },
      {
        label: 'invalid required parameter order leads to an error (#2)',
        args: [],
        config: {
          parameters: [{type: 'string'}, {type: 'string', required: true}],
        } as const,
        expectedResult: {
          parameters: [undefined, undefined],
          errors: [
            new ValidationError('INVALID_PARAMETER_ORDER', {
              messageParameters: [1],
            }),
            new ValidationError('MISSING_PARAMETER', {
              messageParameters: [1],
            }),
          ],
        },
      },
      {
        label: 'invalid required parameter order leads to an error (#3)',
        args: ['foo'],
        config: {
          parameters: [{type: 'number'}, {type: 'number', required: true}],
        } as const,
        expectedResult: {
          parameters: [Number.NaN, undefined],
          errors: [
            new ValidationError('INVALID_PARAMETER_ORDER', {
              messageParameters: [1],
            }),
            new ValidationError('MISSING_PARAMETER', {
              messageParameters: [1],
            }),
          ],
        },
      },
      {
        label: 'value different from choices leads to an error',
        args: ['baz'],
        config: {
          parameters: [{type: 'string', choices: ['foo', 'bar']}],
        } as const,
        expectedResult: {
          parameters: [undefined],
          errors: [
            new ParsingError('INVALID_PARAMETER', {
              messageParameters: ['baz', 0, '"foo", "bar"'],
            }),
          ],
        },
      },
      {
        label: 'unknown parameter leads to an error',
        args: ['foobar'],
        config: {} as const,
        expectedResult: {
          errors: [new ParsingError('UNKNOWN_PARAMETER', {messageParameters: ['foobar']})],
        },
      },
      {
        label: 'parameters can be validated',
        args: ['1', '2', '3'],
        config: {
          parameters: [
            {
              type: 'boolean',
              validate: () => {
                throw new Error('Invalid value.');
              },
            },
            {
              type: 'number',
              validate: () => {
                throw new Error('Invalid value.');
              },
            },
            {
              type: 'string',
              validate: () => {
                throw new Error('Invalid value.');
              },
            },
          ],
        } as const,
        expectedResult: {
          parameters: [true, 2, '3'],
          errors: [
            new Error('Invalid value.'),
            new Error('Invalid value.'),
            new Error('Invalid value.'),
          ],
        },
      },
    ])('$label', ({args, config, expectedResult}) => {
      let result = parseArguments(args, config);

      expect(result).toEqual({
        ...EMPTY_PARSED_ARGUMENTS,
        ...expectedResult,
      });
    });
  });

  describe('options parsing', () => {
    test.each([
      {
        label: 'options can have camel case names',
        args: ['--someOption', 'foo'],
        config: {
          options: {someOption: {type: 'string'}},
        } as const,
        expectedResult: {options: {someOption: 'foo'}},
      },
      {
        label: 'options can have kebab case names',
        args: ['--some-option', 'foo'],
        config: {
          options: {someOption: {type: 'string'}},
        } as const,
        expectedResult: {options: {someOption: 'foo'}},
      },
      {
        label: 'options can have numbers in their names',
        args: ['--some-option-123', 'foo'],
        config: {
          options: {someOption123: {type: 'string'}},
        } as const,
        expectedResult: {options: {someOption123: 'foo'}},
      },
      {
        label: 'invalid option name leads to an error',
        args: [],
        config: {
          // eslint-disable-next-line @typescript-eslint/naming-convention -- needed for the test
          options: {'foo bar': {type: 'string'}},
        } as const,
        expectedResult: {
          // eslint-disable-next-line @typescript-eslint/naming-convention -- needed for the test
          options: {'foo bar': undefined},
          errors: [
            new ValidationError('INVALID_OPTION_NAME', {
              messageParameters: ['foo bar'],
            }),
          ],
        },
      },
      {
        label: 'multiple options with the same short name lead to an error',
        args: [],
        config: {
          options: {foo: {type: 'string', shortName: 'f'}, bar: {type: 'string', shortName: 'f'}},
        } as const,
        expectedResult: {
          options: {foo: undefined, bar: undefined},
          errors: [new ValidationError('REPEATED_OPTION_NAME', {messageParameters: ['bar', 'f']})],
        },
      },
      {
        label: 'mismatched choices and default value lead to an error',
        args: [],
        config: {
          options: {option: {type: 'string', choices: ['foo', 'bar'], defaultValue: 'baz'}},
        } as const,
        expectedResult: {
          options: {option: 'baz'},
          errors: [
            new ValidationError('INVALID_OPTION_DEFAULT_AND_CHOICES', {
              messageParameters: ['option', 'baz'],
            }),
          ],
        },
      },
      {
        label: 'missing required option leads to an error',
        args: [],
        config: {
          options: {someOption: {type: 'string', required: true}},
        } as const,
        expectedResult: {
          options: {someOption: undefined},
          errors: [new ValidationError('MISSING_OPTION', {messageParameters: ['someOption']})],
        },
      },
      {
        label: 'unknown option leads to an error',
        args: ['--unknownOption'],
        config: {} as const,
        expectedResult: {
          errors: [new ParsingError('UNKNOWN_OPTION', {messageParameters: ['unknownOption']})],
        },
      },

      {
        label: 'string option is parsed',
        args: ['--foo', 'foo'],
        config: {
          options: {foo: {type: 'string'}},
        } as const,
        expectedResult: {
          options: {
            foo: 'foo',
          },
        },
      },
      {
        label: 'string option is parsed using an inline value',
        args: ['--foo=foo'],
        config: {
          options: {foo: {type: 'string'}},
        } as const,
        expectedResult: {
          options: {
            foo: 'foo',
          },
        },
      },
      {
        label: 'string option is parsed only using one value',
        args: ['--someOption', 'foo', 'bar'],
        config: {
          options: {someOption: {type: 'string'}},
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            someOption: 'foo',
          },
          parameters: ['bar'],
        },
      },
      {
        label: 'string option is parsed as `defaultValue` when nothing is passed',
        args: ['--foo'],
        config: {
          options: {
            foo: {
              type: 'string',
              defaultValue: 'foobar',
              shortName: 'O',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: 'foobar',
          },
        },
      },
      {
        label: 'subsequent values overwrite value of an option',
        args: ['--someOption', 'foo', '--someOption', 'bar', '--someOption', 'baz'],
        config: {
          options: {
            someOption: {
              type: 'string',
              defaultValue: 'foobar',
              shortName: 'O',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 'baz',
          },
        },
      },
      {
        label: 'string option is validated after parsing',
        args: ['--someOption', '2019-01'],
        config: {
          options: {
            someOption: {
              type: 'string',
              defaultValue: 'foobar',
              shortName: 'O',
              validate: (value: string) => {
                if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) {
                  throw new Error('Invalid date.');
                }
              },
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: '2019-01',
          },
          errors: [new Error('Invalid date.')],
        },
      },
      {
        label: 'string option with choices leads to an error when wrong value is passed',
        args: ['--someOption', 'qux'],
        config: {
          options: {
            someOption: {
              type: 'string',
              choices: ['foo', 'bar', 'baz'],
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: undefined,
          },
          errors: [
            new ParsingError('INVALID_OPTION', {
              messageParameters: ['qux', 'someOption', '"foo", "bar", "baz"'],
            }),
          ],
        },
      },
      {
        label: 'string option with choices is parsed',
        args: [],
        config: {
          options: {
            someOption: {
              choices: ['foo', 'bar', 'baz'] as const,
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: undefined,
          },
        },
      },
      {
        label: 'count option is incremented for each short option',
        args: ['-nnnn'],
        config: {
          options: {
            flag: {
              defaultValue: false,
              shortName: 'F',
              type: 'boolean',
            },
            num: {
              shortName: 'n',
              type: 'number',
              defaultValue: 0,
              count: true,
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: false,
            num: 4,
          },
        },
      },
      {
        label:
          'count option is incremented even when other option is in the same short options group',
        args: ['-nFnn'],
        config: {
          options: {
            flag: {
              defaultValue: false,
              shortName: 'F',
              type: 'boolean',
            },
            num: {
              shortName: 'n',
              type: 'number',
              defaultValue: 0,
              count: true,
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: true,
            num: 3,
          },
        },
      },
      {
        label: 'count option can be set using normal value',
        args: ['--num', '3', 'other value'],
        config: {
          options: {
            flag: {
              defaultValue: false,
              shortName: 'F',
              type: 'boolean',
            },
            num: {
              shortName: 'n',
              type: 'number',
              defaultValue: 0,
              count: true,
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          parameters: ['other value'],
          options: {
            flag: false,
            num: 3,
          },
        },
      },
      {
        label: 'count option is parsed using normal and inline values',
        args: ['-nn', '2', '--num', '2'],
        config: {
          options: {
            num: {
              shortName: 'n',
              type: 'number',
              defaultValue: 0,
              count: true,
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: 5,
          },
        },
      },
      {
        label: 'string[] option is parsed until next option is found',
        args: ['--opts', 'foo', 'bar', '--flag', 'baz'],
        config: {
          options: {
            flag: {
              type: 'boolean',
              defaultValue: false,
            },
            opts: {
              type: 'string',
              multiple: true,
              defaultValue: [],
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            flag: true,
            opts: ['foo', 'bar'],
          },
          parameters: ['baz'],
        },
      },
      {
        label: 'string[] option is parsed using multiple options with the same name',
        args: ['arg', '--opts', 'foo', '--opts', 'bar', '--opts', 'baz'],
        config: {
          options: {
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            opts: ['foo', 'bar', 'baz'],
          },
          parameters: ['arg'],
        },
      },
      {
        label:
          'string[] option is parsed using multiple options with the same name using the inline values',
        args: ['arg', '--opts=foo', '--opts=bar', '--opts=baz'],
        config: {
          options: {
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            opts: ['foo', 'bar', 'baz'],
          },
          parameters: ['arg'],
        },
      },
      {
        label: 'string[] and boolean options are parsed using all patterns (#1)',
        args: ['--opts', 'foo', '--opts=bar', '--flag', '-s', 'baz', '-s=qux'],
        config: {
          options: {
            flag: {
              defaultValue: false,
              shortName: 'F',
              type: 'boolean',
            },
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: true,
            opts: ['foo', 'bar', 'baz', 'qux'],
          },
        },
      },
      {
        label: 'string[] and boolean options are parsed using all patterns (#2)',
        args: ['--opts=foo', 'bar', 'baz', '--flag'],
        config: {
          options: {
            flag: {
              defaultValue: false,
              shortName: 'F',
              type: 'boolean',
            },
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: true,
            opts: ['foo', 'bar', 'baz'],
          },
        },
      },
      {
        label: 'string[] is parsed as `undefined` when nothing is passed',
        args: [],
        config: {
          options: {
            opts: {
              multiple: true,
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            opts: undefined,
          },
        },
      },
      {
        label: 'string[] is parsed as `defaultValue` when nothing is passed',
        args: [],
        config: {
          options: {
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            opts: ['qux'],
          },
        },
      },
      {
        label: 'option can have multiple same values',
        args: ['-s=foo', 'foo', 'foo'],
        config: {
          options: {
            opts: {
              defaultValue: ['qux'],
              multiple: true,
              shortName: 's',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            opts: ['foo', 'foo', 'foo'],
          },
        },
      },
      {
        label: 'number[] option is validated after parsing`',
        args: ['--nums', '1', '5', '10'],
        config: {
          options: {
            nums: {
              multiple: true,
              type: 'number',
              validate(value: number[]) {
                if (!value.every((val) => val >= 5)) {
                  throw new Error('All values must be >= 5.');
                }
              },
            },
          },
        } as const,
        expectedResult: {
          errors: [new Error('All values must be >= 5.')],
          options: {
            nums: [1, 5, 10],
          },
        },
      },
      {
        label: 'option with `arity` up to the correct number of values',
        args: ['--opts', 'foo', 'bar', 'baz'],
        config: {
          options: {
            opts: {
              type: 'string',
              multiple: true,
              arity: 2,
              defaultValue: [],
              shortName: 's',
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            opts: ['foo', 'bar'],
          },
          parameters: ['baz'],
        },
      },
      {
        label: 'option with `arity` is parsed using normal and inline values (#1)',
        args: ['-s', 'foo', '-s=bar', 'baz'],
        config: {
          options: {
            opts: {
              type: 'string',
              multiple: true,
              arity: 2,
              defaultValue: [],
              shortName: 's',
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            opts: ['foo', 'bar'],
          },
          parameters: ['baz'],
        },
      },
      {
        label: 'option with `arity` is parsed using normal and inline values (#2)',
        args: ['-s', 'foo', '--ars', '123', '456', '--opts=qux'],
        config: {
          options: {
            ars: {
              type: 'number',
              multiple: true,
              defaultValue: [],
              shortName: 'a',
            },
            opts: {
              type: 'string',
              multiple: true,
              arity: 2,
              defaultValue: [],
              shortName: 's',
            },
          },
        } as const,
        expectedResult: {
          options: {
            ars: [123, 456],
            opts: ['foo', 'qux'],
          },
        },
      },
      {
        label: 'option with `arity` must be have correct number of values parsed',
        args: ['--opts', 'foo'],
        config: {
          options: {
            opts: {
              type: 'string',
              multiple: true,
              arity: 2,
              defaultValue: [],
              shortName: 's',
            },
          },
        } as const,
        expectedResult: {
          errors: [
            new ValidationError('INVALID_OPTION_ARITY', {messageParameters: ['opts', 1, 2]}),
          ],
          options: {
            opts: ['foo'],
          },
        },
      },
      {
        label: 'option with `arity` can be parsed without a value passed',
        args: [],
        config: {
          options: {
            opts: {
              type: 'string',
              multiple: true,
              arity: 2,
              defaultValue: [],
              shortName: 's',
            },
          },
        } as const,
        expectedResult: {
          options: {
            opts: [],
          },
        },
      },
      {
        label: 'short option is expanded and parsed',
        args: ['-O', 'foo'],
        config: {
          options: {
            someOption: {
              defaultValue: 'foobar',
              shortName: 'O',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 'foo',
          },
        },
      },
      {
        label: 'short option is expanded and parsed using an inline value',
        args: ['-O=foo'],
        config: {
          options: {
            someOption: {
              defaultValue: 'foobar',
              shortName: 'O',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 'foo',
          },
        },
      },
      {
        label: 'multiple short options are parsed',
        args: ['-f', 'foo', '-b', 'bar', '-B', '42'],
        config: {
          options: {
            foo: {
              shortName: 'f',
              type: 'string',
            },
            bar: {
              shortName: 'b',
              type: 'string',
            },
            baz: {
              shortName: 'B',
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: 'foo',
            bar: 'bar',
            baz: 42,
          },
        },
      },
      {
        label: 'short options group is expanded and parsed as `true`',
        args: ['foo', '-bcd', 'bar'],
        config: {
          options: {
            option1: {
              shortName: 'a',
              type: 'boolean',
              defaultValue: false,
            },
            option2: {
              shortName: 'b',
              type: 'boolean',
              defaultValue: false,
            },
            option3: {
              shortName: 'c',
              type: 'boolean',
              defaultValue: false,
            },
            option4: {
              shortName: 'd',
              type: 'boolean',
              defaultValue: false,
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            option1: false,
            option2: true,
            option3: true,
            option4: true,
          },
          parameters: ['foo', 'bar'],
        },
      },
      {
        label: 'string option is parsed as `defaultValue` when nothing is passed',
        args: [],
        config: {
          options: {
            someOption: {
              defaultValue: 'foobar',
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 'foobar',
          },
        },
      },
      {
        label: 'string option is parsed as `undefined` when nothing is passed',
        args: [],
        config: {
          options: {
            someOption: {
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: undefined,
          },
        },
      },
      {
        label: 'string option is parsed as string even when the string is a number',
        args: ['--someOption', '123456'],
        config: {
          options: {
            someOption: {
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: '123456',
          },
        },
      },
      ...SPECIAL_CHARACTERS.map((value) => ({
        label: `string option is parsed as "${value}"`,
        args: ['--someOption', value],
        config: {
          options: {
            someOption: {
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: value,
          },
        },
      })),
      ...SPECIAL_CHARACTERS.filter((value) => !!value).map((value) => ({
        label: `string option is parsed as "${value}" using an inline value`,
        args: [`--someOption=${value}`],
        config: {
          options: {
            someOption: {
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: value,
          },
        },
      })),
      {
        label: 'string[] option is parsed with all special characters',
        args: ['--opts', ...SPECIAL_CHARACTERS],
        config: {
          options: {
            opts: {
              multiple: true,
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            opts: SPECIAL_CHARACTERS,
          },
        },
      },
      {
        label: 'string option with choices is parsed',
        args: ['--someOption', 'baz'],
        config: {
          options: {
            someOption: {
              choices: ['foo', 'bar', 'baz'],
              type: 'string',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 'baz',
          },
        },
      },
      {
        label: 'number option is parsed as `defaultValue` when nothing is passed',
        args: [],
        config: {
          options: {
            foo: {
              defaultValue: 123,
              shortName: 'n',
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: 123,
          },
        },
      },
      {
        label: 'number option is parsed as `undefined` when nothing is passed',
        args: [],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: undefined,
          },
        },
      },
      {
        label: 'number option is paersed as `NaN` when an invalid number is passed',
        args: ['--num', 'foo'],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: Number.NaN,
          },
        },
      },
      {
        label: 'number option is parsed',
        args: ['--num', '123'],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: 123,
          },
        },
      },
      {
        label: 'number option is parsed using an inline value',
        args: ['--num=123'],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: 123,
          },
        },
      },
      {
        label: 'number option with choices is parsed',
        args: ['--someOption', '2'],
        config: {
          options: {
            someOption: {
              choices: [1, 2, 3],
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            someOption: 2,
          },
        },
      },
      ...NUMBER_STRING.map((value) => ({
        label: `number option is parsed as "${value}"`,
        args: ['--num', value],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: Number(value),
          },
        },
      })),
      ...NUMBER_STRING.map((value) => ({
        label: `number option is parsed as "${value}" using an inline value`,
        args: [`--num=${value}`],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: Number(value),
          },
        },
      })),
      {
        label: 'number[] option is parsed with all special numbers',
        args: ['--nums', ...NUMBER_STRING],
        config: {
          options: {
            nums: {
              multiple: true,
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            nums: NUMBER_STRING.map((value) => Number(value)),
          },
        },
      },
      {
        label: 'number option can be parsed as having value of `Number.MAX_SAFE_INTEGER`',
        args: ['--num', String(Number.MAX_SAFE_INTEGER)],
        config: {
          options: {
            num: {
              type: 'number',
            },
          },
        } as const,
        expectedResult: {
          options: {
            num: Number.MAX_SAFE_INTEGER,
          },
        },
      },
      {
        label: 'boolean option is set to its default value if not present',
        args: [],
        config: {
          options: {
            flag: {
              type: 'boolean',
              defaultValue: true,
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: true,
          },
        },
      },
      {
        label: 'boolean option is parsed as undefined if not present',
        args: [],
        config: {
          options: {
            flag: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: undefined,
          },
        },
      },
      {
        label: 'if boolean option inline value is not a true or false string, it is ignored',
        args: ['--flag=123'],
        config: {
          options: {
            flag: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            flag: true,
          },
        },
      },
      {
        label: 'boolean option accepts a false string as an inline value',
        args: ['--foo=false'],
        config: {
          options: {
            foo: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: false,
          },
        },
      },
      {
        label: 'boolean option can be reffered to using its short name',
        args: ['-F'],
        config: {
          options: {
            foo: {
              shortName: 'F',
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: true,
          },
        },
      },
      {
        label: 'boolean option is parsed as true when present',
        args: ['--foo'],
        config: {
          options: {
            foo: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: true,
          },
        },
      },
      {
        label: 'boolean option accepts a false string as a value',
        args: ['--foo', 'false'],
        config: {
          options: {
            foo: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: false,
          },
        },
      },
      {
        label: 'boolean option accepts a true string as a value',
        args: ['--foo', 'true'],
        config: {
          options: {
            foo: {
              type: 'boolean',
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: true,
          },
        },
      },
      {
        label:
          'if boolean option is not followed by a true or false string, do not treat it as possible value',
        args: ['--foo', 'something'],
        config: {
          options: {
            foo: {
              type: 'boolean',
            },
          },
          allowUnknownParameters: true,
        } as const,
        expectedResult: {
          options: {
            foo: true,
          },
          parameters: ['something'],
        },
      },
      {
        label: 'boolean[] option is parsed',
        args: ['--foo', 'false', '1', 'off', 'yes'],
        config: {
          options: {
            foo: {
              type: 'boolean',
              multiple: true,
            },
          },
        } as const,
        expectedResult: {
          options: {
            foo: [false, true, false, true],
          },
        },
      },
    ])('$label', ({args, config, expectedResult}) => {
      let result = parseArguments(args, config);

      expect(result).toEqual({
        ...EMPTY_PARSED_ARGUMENTS,
        ...expectedResult,
      });
    });
  });

  describe('rest arguments', () => {
    test('arguments after `--` are captured', () => {
      let result = parseArguments(['--someOption', '--', '--foo', '-B', 'baz'], {
        options: {
          someOption: {
            type: 'boolean',
          },
        },
      });

      expect(result).toEqual({
        command: null,
        parameters: null,
        options: {
          someOption: true,
        },
        rest: ['--foo', '-B', 'baz'],
        unknownOptions: null,
        errors: [],
      });
    });
  });
});
