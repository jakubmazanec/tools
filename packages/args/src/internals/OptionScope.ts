import camelCase from 'lodash.camelcase';

import {type OptionConfig} from '../OptionConfig.js';
import {type OptionsConfig} from '../OptionsConfig.js';
import {ParsingError} from '../ParsingError.js';
import {castValue} from './castValue.js';

/**
 * `CommandScope` handles storing information about parsing of an option..
 */
export class OptionScope {
  name: string;

  values: unknown[] = [];
  previousParsedValue?: unknown[] | unknown;
  readonly config: OptionConfig;

  constructor(optionName: string, optionsConfig: OptionsConfig, allowUnknownOptions = false) {
    this.name = optionName;

    // Convert option to camel case
    if (this.name.includes('-')) {
      this.name = camelCase(this.name);
    }

    let optionConfig = optionsConfig[this.name];

    if (!optionConfig) {
      if (!allowUnknownOptions) {
        throw new ParsingError('UNKNOWN_OPTION', {messageParameters: [this.name]});
      }

      optionConfig = {
        type: 'string',
      };
    }

    this.config = optionConfig;
  }

  captureArg(arg: string) {
    let value = castValue(arg, this.config.type);

    if (
      ((this.config.type === 'number' && !this.config.count) || this.config.type === 'string') &&
      typeof this.config.choices !== 'undefined' &&
      !this.config.choices.includes(value as never)
    ) {
      throw new ParsingError('INVALID_OPTION', {
        messageParameters: [
          value,
          this.name,
          this.config.choices.map((choice) => `"${choice}"`).join(', '),
        ],
      });
    }

    if (this.config.multiple) {
      this.values.push(value);
    } else {
      this.values = [value];
    }
  }

  isComplete() {
    if (!this.config.multiple && this.values.length === 1) {
      return true;
    }

    if (
      this.config.multiple &&
      typeof this.config.arity === 'number' &&
      this.values.length + ((this.previousParsedValue as unknown[] | undefined) ?? []).length ===
        this.config.arity
    ) {
      return true;
    }

    return false;
  }

  getValue() {
    let {config, previousParsedValue} = this;
    let {values} = this;

    if (config.type === 'boolean' && !config.multiple && !values.length) {
      values = [true];
    } else if (config.type === 'number' && config.count && !values.length) {
      values = [1];
    }

    if (config.multiple && previousParsedValue) {
      values = [...(previousParsedValue as unknown[]), ...values];
    }

    if (config.type === 'number' && config.count && previousParsedValue) {
      values = [(values[0] as number) + (previousParsedValue as number)];
    }

    return config.multiple ? values : values[0];
  }
}
