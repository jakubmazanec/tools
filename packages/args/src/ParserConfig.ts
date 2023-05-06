import {type CommandsConfig} from './CommandsConfig.js';
import {type OptionsConfig} from './OptionsConfig.js';
import {type ParametersConfig} from './ParametersConfig.js';

/** Parser configuration specifies how the command line arguments should be parsed. */
export type ParserConfig = {
  /** Commands configuration. */
  commands?: CommandsConfig | undefined;

  /** Parameters configuration. */
  parameters?: ParametersConfig | undefined;

  /** Options configuration. */
  options?: OptionsConfig | undefined;

  /** Allow parsing unknown options. */
  allowUnknownOptions?: boolean | undefined;

  /** Allow parsing unknown parameters. */
  allowUnknownParameters?: boolean | undefined;
};
