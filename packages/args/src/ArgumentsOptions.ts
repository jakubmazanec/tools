import {type TupleToUnion} from '@jakubmazanec/ts-utils';

import {
  type CountOptionConfig,
  type BooleansOptionConfig,
  type NumbersOptionConfig,
  type StringsOptionConfig,
  type OptionConfig,
  type BooleanOptionConfig,
  type NumberOptionConfig,
  type StringOptionConfig,
} from './OptionConfig.js';
import {type OptionsConfig} from './OptionsConfig.js';
import {type ParserConfig} from './ParserConfig.js';

type BooleanOptionConfigToArgumentsOption<O extends BooleanOptionConfig | BooleansOptionConfig> =
  O extends BooleanOptionConfig
    ? O['defaultValue'] extends boolean
      ? boolean
      : boolean | undefined
    : O extends BooleansOptionConfig
    ? O['defaultValue'] extends readonly boolean[]
      ? boolean[]
      : boolean[] | undefined
    : never;

type NumberOptionConfigToArgumentsOption<
  O extends CountOptionConfig | NumberOptionConfig | NumbersOptionConfig,
> = O extends NumbersOptionConfig
  ? O['choices'] extends readonly number[]
    ? O['defaultValue'] extends readonly number[]
      ? Array<TupleToUnion<O['choices']>>
      : Array<TupleToUnion<O['choices']>> | undefined
    : O['defaultValue'] extends readonly number[]
    ? number[]
    : number[] | undefined
  : O extends NumberOptionConfig
  ? O['choices'] extends readonly number[]
    ? O['defaultValue'] extends number
      ? TupleToUnion<O['choices']>
      : TupleToUnion<O['choices']> | undefined
    : O['defaultValue'] extends number
    ? number
    : number | undefined
  : O extends CountOptionConfig
  ? O['defaultValue'] extends number
    ? number
    : number | undefined
  : never;

type StringOptionConfigToArgumentsOption<O extends StringOptionConfig | StringsOptionConfig> =
  O extends StringsOptionConfig
    ? O['choices'] extends readonly string[]
      ? O['defaultValue'] extends readonly string[]
        ? Array<TupleToUnion<O['choices']>>
        : Array<TupleToUnion<O['choices']>> | undefined
      : O['defaultValue'] extends readonly string[]
      ? string[]
      : string[] | undefined
    : O extends StringOptionConfig
    ? O['choices'] extends readonly string[]
      ? O['defaultValue'] extends string
        ? TupleToUnion<O['choices']>
        : TupleToUnion<O['choices']> | undefined
      : O['defaultValue'] extends string
      ? string
      : string | undefined
    : never;

type OptionConfigToArgumentOption<O extends OptionConfig> = O extends
  | BooleanOptionConfig
  | BooleansOptionConfig
  ? BooleanOptionConfigToArgumentsOption<O>
  : O extends CountOptionConfig | NumberOptionConfig | NumbersOptionConfig
  ? NumberOptionConfigToArgumentsOption<O>
  : O extends StringOptionConfig | StringsOptionConfig
  ? StringOptionConfigToArgumentsOption<O>
  : never;

type OptionsConfigToArgumentsOptions<O extends OptionsConfig> = {
  [K in keyof O]: OptionConfigToArgumentOption<O[K]>;
};

/** Parsed options. */
export type ArgumentsOptions<O extends ParserConfig> = Omit<O, 'options'> extends O
  ? null
  : O['options'] extends undefined
  ? null
  : OptionsConfigToArgumentsOptions<NonNullable<O['options']>>;
