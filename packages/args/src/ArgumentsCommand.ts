import {type ParserConfig} from './ParserConfig.js';

/** Parsed command. */
export type ArgumentsCommand<O extends ParserConfig> = Omit<O, 'commands'> extends O
  ? null
  : O['commands'] extends undefined
  ? null
  : Lowercase<NonNullable<O['commands']>[number]> | undefined;
