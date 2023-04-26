import {type CommandsConfig, type OptionsConfig, type ParametersConfig} from '../types.js';
import {ValidationError} from '../ValidationError.js';
import {isCommand} from './isCommand.js';
import {isLongOption} from './isLongOption.js';

/**
 * `Checker` is used for handling various check before, during, and after parsing of the arguments.
 */
export class Checker {
  errors: Error[] = [];

  checkCommandsConfig(commandsConfig: CommandsConfig) {
    for (let commandConfig of commandsConfig) {
      if (!isCommand(commandConfig)) {
        this.addError(new ValidationError('INVALID_COMMAND', {messageParameters: [commandConfig]}));
      }
    }
  }

  checkParametersConfig(parametersConfig: ParametersConfig | []) {
    for (let [i, parameterConfig] of parametersConfig.entries()) {
      // types of choices must be correct
      if (
        parameterConfig.type !== 'boolean' &&
        parameterConfig.choices && // default values and chocies do not contradict each other
        typeof parameterConfig.defaultValue !== 'undefined' &&
        !parameterConfig.choices.includes(parameterConfig.defaultValue as never)
      ) {
        this.addError(
          new ValidationError('INVALID_PARAMETER_DEFAULT_AND_CHOICES', {
            messageParameters: [parameterConfig.label ?? i, parameterConfig.defaultValue],
          }),
        );
      }

      // if parameter is required, all parameters before must be required too
      if (
        i >= 1 &&
        parameterConfig.required === true &&
        parametersConfig[i - 1]?.required !== true
      ) {
        this.addError(
          new ValidationError('INVALID_PARAMETER_ORDER', {
            messageParameters: [
              parametersConfig[i - 1]?.label ?? i - 1,
              parameterConfig.label ?? i,
            ],
          }),
        );
      }
    }
  }

  checkOptionsConfig(optionsConfig: OptionsConfig) {
    let usedShortOptionNames: Set<string> = new Set([]);

    for (let [optionName, optionConfig] of Object.entries(optionsConfig)) {
      // option names must be in correct format
      if (!isLongOption(`--${optionName}`)) {
        this.addError(
          new ValidationError('INVALID_OPTION_NAME', {
            messageParameters: [optionName],
          }),
        );
      }

      // option short names must be unique
      if (optionConfig.shortName && usedShortOptionNames.has(optionConfig.shortName)) {
        this.addError(
          new ValidationError('REPEATED_OPTION_NAME', {
            messageParameters: [optionName, optionConfig.shortName],
          }),
        );
      } else if (optionConfig.shortName) {
        usedShortOptionNames.add(optionConfig.shortName);
      }

      // default values and chocies do not contradict each other
      if (
        (optionConfig.type === 'string' ||
          (optionConfig.type === 'number' && !optionConfig.count)) &&
        optionConfig.choices &&
        typeof optionConfig.defaultValue !== 'undefined' &&
        !optionConfig.choices.includes(optionConfig.defaultValue as never)
      ) {
        this.addError(
          new ValidationError('INVALID_OPTION_DEFAULT_AND_CHOICES', {
            messageParameters: [optionName, optionConfig.defaultValue],
          }),
        );
      }
    }
  }

  checkParsedParameters(parametersConfig: ParametersConfig | [], parsedParameters: unknown[]) {
    for (let [i, parameterConfig] of parametersConfig.entries()) {
      let parsedParameter = parsedParameters[i];

      // required parameters must have value
      if (parameterConfig.required === true && typeof parsedParameter === 'undefined') {
        this.addError(
          new ValidationError('MISSING_PARAMETER', {
            messageParameters: [parameterConfig.label ?? i],
          }),
        );
      }
    }
  }

  checkParsedOptions(optionsConfig: OptionsConfig, parsedOptions: Record<string, unknown>) {
    for (let [optionName, optionConfig] of Object.entries(optionsConfig)) {
      let parsedOption = parsedOptions[optionName];

      // check required
      if (optionConfig.required && typeof parsedOption === 'undefined') {
        this.addError(
          new ValidationError('MISSING_OPTION', {
            messageParameters: [optionName],
          }),
        );
      }

      // check arity
      if (
        typeof parsedOption !== 'undefined' &&
        ((optionConfig.type === 'string' && optionConfig.multiple) ||
          (optionConfig.type === 'number' && optionConfig.multiple)) &&
        typeof optionConfig.arity === 'number' &&
        Array.isArray(parsedOption) &&
        (parsedOption as unknown[]).length > 0 &&
        (parsedOption as unknown[]).length !== optionConfig.arity
      ) {
        this.addError(
          new ValidationError('INVALID_OPTION_ARITY', {
            messageParameters: [optionName, (parsedOption as unknown[]).length, optionConfig.arity],
          }),
        );
      }
    }
  }

  addError(error: Error) {
    this.errors.push(error);
  }
}
