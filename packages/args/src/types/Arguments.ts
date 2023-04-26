import {type ArgumentsCommand} from './ArgumentsCommand.js';
import {type ArgumentsOptions} from './ArgumentsOptions.js';
import {type ArgumentsParameters} from './ArgumentsParameters.js';
import {type ArgumentsUnknownOptions} from './ArgumentsUnknownOptions.js';
import {type ParserConfig} from './ParserConfig.js';

/**
 * Parsed arguments.
 */
export type Arguments<T extends ParserConfig> = {
  /** Parsed command. */
  readonly command: ArgumentsCommand<T>;

  /** Parsed parameters. */
  readonly parameters: ArgumentsParameters<T>;

  /** Parsed options. */
  readonly options: ArgumentsOptions<T>;

  /** Unconfigured options. */
  readonly unknownOptions: ArgumentsUnknownOptions<T>;

  /** Arguments that appear after "--". */
  readonly rest: string[];

  /** Parsing and validation rrors */
  readonly errors: Error[];
};
