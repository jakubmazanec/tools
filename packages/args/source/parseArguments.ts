import {type Arguments} from './Arguments.js';
import {type ArgumentsCommand} from './ArgumentsCommand.js';
import {type ArgumentsOptions} from './ArgumentsOptions.js';
import {type ArgumentsParameters} from './ArgumentsParameters.js';
import {type ArgumentsUnknownOptions} from './ArgumentsUnknownOptions.js';
import {type Argv} from './Argv.js';
import {
  castValue,
  Checker,
  CommandScope,
  commandToArguments,
  createOptionShortNameMap,
  expandArguments,
  isFalseString,
  isLongOption,
  isOptionLike,
  isShortOption,
  isTrueString,
  type NormalizedCommandsConfig,
  OptionScope,
} from './internals.js';
import {type ParameterConfig} from './ParameterConfig.js';
import {type ParserConfig} from './ParserConfig.js';
import {ParsingError} from './ParsingError.js';

/* eslint-disable no-param-reassign -- we need to add properties to the `parsedOption` object */
function commitOptionScope(optionScope: OptionScope, parsedOptions: Record<string, unknown>) {
  let optionValue = optionScope.getValue();

  parsedOptions[optionScope.name] = optionValue;

  if (optionScope.config.validate) {
    optionScope.config.validate(parsedOptions[optionScope.name] as never); // type assertion needed to make TypeScript happy
  }
}
/* eslint-enable no-param-reassign */

/**
 * Parses a list of command line arguments into an arguments object. Based on provided parser config, raw arguments can be parsed as commands, options and parameters.
 *
 * @param argv Raw arguments to be parsed.
 * @param parserConfig Parser configuration.
 * @return Parsed arguments.
 *
 */
export function parseArguments<const O extends ParserConfig>(
  argv: Argv,
  parserConfig: O,
): Arguments<O> {
  // create separate configs for commands, parameters and options
  let commandsConfig = parserConfig.commands ?? [];
  let parametersConfig = parserConfig.parameters ?? [];
  let optionsConfig = parserConfig.options ?? {};

  // check if parser config is valid
  let checker = new Checker();

  checker.checkCommandsConfig(commandsConfig);
  checker.checkParametersConfig(parametersConfig);
  checker.checkOptionsConfig(optionsConfig);

  // normalize some configs
  let normalizedCommandsConfig: NormalizedCommandsConfig = commandsConfig.map((command) => ({
    command: command.toLowerCase(),
    args: commandToArguments(command.toLowerCase()),
  }));
  let commandFirstArguments = new Set(
    normalizedCommandsConfig.map((commandConfig) => commandConfig.args[0]),
  );
  let optionShortNameMap =
    parserConfig.options ? createOptionShortNameMap(parserConfig.options) : {};

  // variables for keeping track of the parsing
  let parsedCommand: string | undefined;
  let parsedParameters: unknown[] = [];
  let parsedOptions: Record<string, unknown> = {};
  let parsedUnknownOptions: Record<string, unknown> = {};
  let restArgs: string[] = [];
  let optionScope: OptionScope | null = null;
  let commandScope: CommandScope | null = null;

  //
  let args = expandArguments(argv);

  for (let [i, arg] of args.entries()) {
    // extract rest arguments
    if (arg === '--') {
      restArgs.push(...args.slice(i + 1));

      break;
    }

    try {
      if (isOptionLike(arg)) {
        // first let's handle options

        if (optionScope) {
          commitOptionScope(
            optionScope,
            optionsConfig[optionScope.name] ? parsedOptions : parsedUnknownOptions,
          );
        }

        // if there is still unhandled `commandScope`, let's handle its args as parameters...
        if (commandScope) {
          let unhandledArgs = commandScope.getArgs();

          for (let unhandledArg of unhandledArgs) {
            if (parserConfig.allowUnknownParameters) {
              // let's handle other parameter
              parsedParameters.push(unhandledArg);
            } else {
              checker.addError(
                new ParsingError('UNKNOWN_PARAMETER', {messageParameters: [unhandledArg]}),
              );
            }
          }

          commandScope = null;
        }

        let optionName = arg;
        let optionValue;

        // Extract option name and value
        if (optionName.includes('=')) {
          let result = optionName.split('=', 2);

          if (result[0] && result[1]) {
            [optionName, optionValue] = result;
          }
        }

        if (isShortOption(optionName)) {
          let fullOptionName = optionShortNameMap[optionName.slice(1)];

          if (typeof fullOptionName === 'string') {
            optionName = fullOptionName;
          }
        } else if (isLongOption(optionName)) {
          optionName = optionName.slice(2);
        }

        let newOptionScope = new OptionScope(
          optionName,
          optionsConfig,
          parserConfig.allowUnknownOptions,
        );

        if (parsedOptions[newOptionScope.name] !== undefined) {
          if (newOptionScope.config.multiple) {
            newOptionScope.previousParsedValue = parsedOptions[newOptionScope.name];
          } else if (newOptionScope.config.type === 'number' && newOptionScope.config.count) {
            newOptionScope.previousParsedValue = parsedOptions[newOptionScope.name];
          }
        }

        if (optionValue !== undefined) {
          newOptionScope.captureArg(optionValue);
        }

        if (newOptionScope.isComplete()) {
          commitOptionScope(
            newOptionScope,
            optionsConfig[newOptionScope.name] ? parsedOptions : parsedUnknownOptions,
          );

          optionScope = null;
        } else {
          optionScope = newOptionScope;
        }
      } else if (
        optionScope &&
        !(optionScope.config.type === 'boolean' && !optionScope.config.multiple)
      ) {
        // let's handle adding more values to previous option, but not if it's signle boolean option

        optionScope.captureArg(arg);

        if (optionScope.isComplete()) {
          commitOptionScope(
            optionScope,
            optionsConfig[optionScope.name] ? parsedOptions : parsedUnknownOptions,
          );

          optionScope = null;
        }
      } else if (
        optionScope &&
        optionScope.config.type === 'boolean' &&
        !optionScope.config.multiple &&
        (isFalseString(arg) || isTrueString(arg))
      ) {
        // we're adding value to a single boolean option only if the value is "false" or "true" string
        optionScope.captureArg(arg);

        if (optionScope.isComplete()) {
          commitOptionScope(
            optionScope,
            optionsConfig[optionScope.name] ? parsedOptions : parsedUnknownOptions,
          );

          optionScope = null;
        }
      } else if (commandScope) {
        // let's handle rest of the command

        commandScope.captureArg(arg);

        if (commandScope.isComplete()) {
          parsedCommand = commandScope.getValue();
          commandScope = null;
        } else if (commandScope.isDone()) {
          let unhandledArgs = commandScope.getArgs();

          for (let unhandledArg of unhandledArgs) {
            if (parserConfig.allowUnknownParameters) {
              // let's handle other parameter
              parsedParameters.push(unhandledArg);
            } else {
              checker.addError(
                new ParsingError('UNKNOWN_PARAMETER', {messageParameters: [unhandledArg]}),
              );
            }
          }

          commandScope = null;
        }
      } else if (parsedCommand === undefined && commandFirstArguments.has(arg.toLowerCase())) {
        // let's handle command

        let newCommandScope = new CommandScope(arg, normalizedCommandsConfig);

        if (newCommandScope.isComplete()) {
          parsedCommand = newCommandScope.getValue();
          commandScope = null;
        } else {
          commandScope = newCommandScope;
        }
      } else if (parametersConfig[parsedParameters.length]) {
        // let's handle configured parameter
        let parameterConfig = parametersConfig[parsedParameters.length] as ParameterConfig;
        let parameterValue = castValue(arg, parameterConfig.type);

        if (
          parameterConfig.type !== 'boolean' &&
          parameterConfig.choices !== undefined &&
          !parameterConfig.choices.includes(parameterValue as never) // during runtime `parameterValue` has correct type
        ) {
          throw new ParsingError('INVALID_PARAMETER', {
            messageParameters: [
              parameterValue,
              parameterConfig.label ?? parsedParameters.length,
              parameterConfig.choices.map((choice) => `"${choice}"`).join(', '),
            ],
          });
        }

        parsedParameters.push(parameterValue);

        if (parameterConfig.validate) {
          parameterConfig.validate(parameterValue as never); // during runtime `parameterValue` has correct type
        }
      } else if (parserConfig.allowUnknownParameters) {
        // let's handle other parameter
        parsedParameters.push(arg);
      } else {
        throw new ParsingError('UNKNOWN_PARAMETER', {messageParameters: [arg]});
      }
    } catch (error: unknown) {
      optionScope = null;
      commandScope = null;

      checker.addError(error as Error);
    }
  }

  try {
    if (optionScope) {
      commitOptionScope(
        optionScope,
        optionsConfig[optionScope.name] ? parsedOptions : parsedUnknownOptions,
      );
    }

    // if there is still unhandled `commandScope`, let's handle its args as parameters...
    if (commandScope) {
      let unhandledArgs = commandScope.getArgs();

      for (let unhandledArg of unhandledArgs) {
        if (parserConfig.allowUnknownParameters) {
          // let's handle other parameter
          parsedParameters.push(unhandledArg);
        } else {
          checker.addError(
            new ParsingError('UNKNOWN_PARAMETER', {messageParameters: [unhandledArg]}),
          );
        }
      }
    }

    // if there are missing parsed parameters, add undefined
    for (let [i] of parametersConfig.entries()) {
      if (parsedParameters[i] === undefined) {
        parsedParameters[i] = undefined;
      }
    }

    // handle default option values...
    for (let [optionName, optionConfig] of Object.entries(optionsConfig)) {
      if (parsedOptions[optionName] === undefined && optionConfig.defaultValue !== undefined) {
        parsedOptions[optionName] = optionConfig.defaultValue;
      } else if (parsedOptions[optionName] === undefined) {
        parsedOptions[optionName] = undefined;
      }
    }

    // handle default parameters values...
    for (let [i, parameterConfig] of parametersConfig.entries()) {
      if (parsedParameters[i] === undefined && parameterConfig.defaultValue !== undefined) {
        parsedParameters[i] = parameterConfig.defaultValue;
      }
    }
  } catch (error: unknown) {
    checker.addError(error as Error);
  }

  checker.checkParsedParameters(parametersConfig, parsedParameters);
  checker.checkParsedOptions(optionsConfig, parsedOptions);

  return {
    command: (normalizedCommandsConfig.length ? parsedCommand : null) as ArgumentsCommand<O>,
    parameters: (parametersConfig.length || parserConfig.allowUnknownParameters ?
      parsedParameters
    : null) as ArgumentsParameters<O>,
    options: (Object.keys(optionsConfig).length ? parsedOptions : null) as ArgumentsOptions<O>,
    unknownOptions: (parserConfig.allowUnknownOptions ? parsedUnknownOptions : (
      null
    )) as ArgumentsUnknownOptions<O>,
    rest: restArgs,
    errors: checker.errors,
  };
}
