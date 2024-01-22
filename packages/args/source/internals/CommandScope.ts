import {type NormalizedCommandConfig} from './NormalizedCommandConfig.js';
import {type NormalizedCommandsConfig} from './NormalizedCommandsConfig.js';

/**
 * `CommandScope` handles storing information about parsing of a command.
 */
export class CommandScope {
  private readonly args: string[];
  readonly config: NormalizedCommandConfig;

  constructor(arg: string, normalizedCommandsConfig: NormalizedCommandsConfig) {
    let normalizedArgument = arg.toLowerCase();
    let commandConfig = normalizedCommandsConfig.find(
      (commandConfig) => commandConfig.args[0] === normalizedArgument,
    );

    this.config = commandConfig ?? ([] as unknown as NormalizedCommandConfig);
    this.args = [normalizedArgument];
  }

  captureArg(arg: string) {
    this.args.push(arg.toLowerCase());

    return this;
  }

  isComplete() {
    let isComplete = true;

    for (let [i, arg] of this.config.args.entries()) {
      if (this.args[i] !== arg) {
        isComplete = false;

        break;
      }
    }

    return isComplete;
  }

  isDone() {
    let isDone = false;

    for (let [i, arg] of this.config.args.entries()) {
      if (this.args[i] !== arg) {
        isDone = true;

        break;
      }
    }

    return isDone;
  }

  getValue() {
    return this.config.command;
  }

  getArgs() {
    return [...this.args];
  }
}
