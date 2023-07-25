import {
  type Argv,
  parseArguments,
  type OptionsConfig,
  type ParametersConfig,
  type Arguments,
} from '@jakubmazanec/args';

import {type CommandAction} from './CommandAction.js';
import {type CommandOptions} from './CommandOptions.js';
import {type Program} from './Program.js';
// import {type ProgramCommand} from './ProgramCommand.js';

/**
 * Command encapsulates piece of a CLI's logic and is executed when {@link Program} instance parses that command from the command line arguments.
 */
export class Command<
  A extends string,
  const B extends ParametersConfig | undefined = undefined,
  const C extends OptionsConfig | undefined = undefined,
  D extends boolean = false,
  E extends boolean = false,
> {
  readonly name: A;
  readonly description?: string;
  readonly parameters: B extends ParametersConfig ? B : null;
  readonly options: C extends OptionsConfig ? C : null;
  readonly allowUnknownOptions: D;
  readonly allowUnknownParameters: E;
  private readonly action: CommandAction<A, B, C, D, E>;

  /**
   * @param name Command name, ie. space-separated words consisting only of letters, numbers (but not at the start of the word) or dashes.
   * @param action Function that runs when command is executed.
   * @param options Additionl command options.
   */
  constructor(
    name: A,
    action: CommandAction<A, B, C, D, E>,
    {
      description,
      parameters,
      options,
      allowUnknownOptions,
      allowUnknownParameters,
    }: CommandOptions<NonNullable<B>, NonNullable<C>, D, E>,
  ) {
    this.name = name;
    this.action = action;

    if (description) {
      this.description = description;
    }

    if (parameters) {
      this.parameters = parameters as B extends ParametersConfig ? B : null;
    } else {
      this.parameters = null as B extends ParametersConfig ? B : null;
    }

    if (options) {
      this.options = options as C extends OptionsConfig ? C : null;
    } else {
      this.options = null as C extends OptionsConfig ? C : null;
    }

    if (allowUnknownOptions) {
      this.allowUnknownOptions = allowUnknownOptions;
    } else {
      this.allowUnknownOptions = false as D;
    }

    if (allowUnknownParameters) {
      this.allowUnknownParameters = allowUnknownParameters;
    } else {
      this.allowUnknownParameters = false as E;
    }
  }

  /**
   * Parses a list of command line arguments into an arguments object. Parser is pre-configured based on this command.
   */
  parseArguments(argv: Argv): Arguments<{
    commands: readonly [A];
    parameters: B;
    options: C;
    allowUnknownOptions: D;
    allowUnknownParameters: E;
  }> {
    return parseArguments(argv, {
      commands: [this.name],
      parameters: this.parameters ?? undefined,
      options: this.options ?? undefined,
      allowUnknownOptions: this.allowUnknownOptions,
      allowUnknownParameters: this.allowUnknownParameters,
    } as {
      commands: readonly [A];
      parameters: B;
      options: C;
      allowUnknownOptions: D;
      allowUnknownParameters: E;
    });
  }

  /**
   * Executes command action with provided parsed arguments and {@link Program} instance.
   */
  async run(
    parsedArgs: Arguments<{
      commands: readonly [A];
      parameters: B;
      options: C;
      allowUnknownOptions: D;
      allowUnknownParameters: E;
    }>,
    program: Program,
  ): Promise<void> {
    await this.action(parsedArgs, program);
  }
}
