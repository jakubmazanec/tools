import {type OptionsConfig, type ParametersConfig} from '@jakubmazanec/args';

/**
 * {@link Command.constructor | Command constructor} options parameter.
 */
export type CommandOptions<
  B extends ParametersConfig,
  C extends OptionsConfig,
  D extends boolean,
  E extends boolean,
> = {
  description?: string;
  parameters?: B | undefined;
  options?: C | undefined;
  allowUnknownOptions?: D | undefined;
  allowUnknownParameters?: E | undefined;
};
