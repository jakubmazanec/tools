import {type Arguments, type OptionsConfig, type ParametersConfig} from '@jakubmazanec/args';

import {type Program} from './Program.js';

/**
 * Command action.
 */
export type CommandAction<
  A extends string,
  B extends ParametersConfig | undefined = undefined,
  C extends OptionsConfig | undefined = undefined,
  D extends boolean = false,
  E extends boolean = false,
> = (
  parsedArgs: Arguments<{
    commands: readonly [A];
    parameters: B;
    options: C;
    allowUnknownOptions: D;
    allowUnknownParameters: E;
  }>,
  program: Program,
) => Promise<void>;
