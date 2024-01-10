import {type ParserConfig} from './ParserConfig.js';

/** Unknown options. Unknown options are always parsed as strings. */
export type ArgumentsUnknownOptions<O extends ParserConfig> =
  O['allowUnknownOptions'] extends true ? Record<string, unknown> : null;
