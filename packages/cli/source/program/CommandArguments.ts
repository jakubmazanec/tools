/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {type Command} from './Command.js';

/**
 * Parsed command arguments type.
 */
export type CommandArguments<C extends Command<any, any, any, any, any>> = ReturnType<
  C['parseArguments']
>;
