import {type CommandConfig} from './CommandConfig.js';

/** Parser's commands configuration. */
export type CommandsConfig = readonly [CommandConfig, ...CommandConfig[]];
