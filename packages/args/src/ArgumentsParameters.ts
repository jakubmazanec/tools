import {type TupleToUnion} from '@jakubmazanec/ts-utils';

import {
  type ParameterConfig,
  type BooleanParameterConfig,
  type NumberParameterConfig,
  type StringParameterConfig,
} from './ParameterConfig.js';
import {type ParametersConfig} from './ParametersConfig.js';
import {type ParserConfig} from './ParserConfig.js';

type NumberParameterConfigToArgumentsParameter<O extends NumberParameterConfig> =
  O['choices'] extends readonly number[] ?
    O['defaultValue'] extends number ?
      TupleToUnion<O['choices']>
    : TupleToUnion<O['choices']> | undefined
  : O['defaultValue'] extends number ? number
  : number | undefined;

type StringParameterConfigToArgumentsParameter<O extends StringParameterConfig> =
  O['choices'] extends readonly string[] ?
    O['defaultValue'] extends string ?
      TupleToUnion<O['choices']>
    : TupleToUnion<O['choices']> | undefined
  : O['defaultValue'] extends string ? string
  : string | undefined;

type BooleanParameterConfigToArgumentsParameter<O extends BooleanParameterConfig> =
  O['defaultValue'] extends boolean ? boolean : boolean | undefined;

type ParameterConfigToArgumentsParameter<O extends ParameterConfig> =
  O extends NumberParameterConfig ? NumberParameterConfigToArgumentsParameter<O>
  : O extends StringParameterConfig ? StringParameterConfigToArgumentsParameter<O>
  : O extends BooleanParameterConfig ? BooleanParameterConfigToArgumentsParameter<O>
  : never;

type ParametersConfigToArgumentsParameters<O extends ParametersConfig> =
  O extends (
    readonly [
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
    ]
  ) ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
      ParameterConfigToArgumentsParameter<O[4]>,
      ParameterConfigToArgumentsParameter<O[5]>,
    ]
  : O extends (
    readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig]
  ) ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
      ParameterConfigToArgumentsParameter<O[4]>,
    ]
  : O extends readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig] ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
    ]
  : O extends readonly [ParameterConfig, ParameterConfig, ParameterConfig] ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
    ]
  : O extends readonly [ParameterConfig, ParameterConfig] ?
    readonly [ParameterConfigToArgumentsParameter<O[0]>, ParameterConfigToArgumentsParameter<O[1]>]
  : O extends readonly [ParameterConfig] ? readonly [ParameterConfigToArgumentsParameter<O[0]>]
  : never;

type ParametersConfigToVariadicArgumentsParameters<O extends ParametersConfig> =
  O extends (
    readonly [
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
    ]
  ) ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
      ParameterConfigToArgumentsParameter<O[4]>,
      ParameterConfigToArgumentsParameter<O[5]>,
      ...(readonly string[]),
    ]
  : O extends (
    readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig]
  ) ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
      ParameterConfigToArgumentsParameter<O[4]>,
      ...(readonly string[]),
    ]
  : O extends readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig] ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ParameterConfigToArgumentsParameter<O[3]>,
      ...(readonly string[]),
    ]
  : O extends readonly [ParameterConfig, ParameterConfig, ParameterConfig] ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ParameterConfigToArgumentsParameter<O[2]>,
      ...(readonly string[]),
    ]
  : O extends readonly [ParameterConfig, ParameterConfig] ?
    readonly [
      ParameterConfigToArgumentsParameter<O[0]>,
      ParameterConfigToArgumentsParameter<O[1]>,
      ...(readonly string[]),
    ]
  : O extends readonly [ParameterConfig] ?
    readonly [ParameterConfigToArgumentsParameter<O[0]>, ...(readonly string[])]
  : readonly [...(readonly string[])];

/** Parsed parameters. */
export type ArgumentsParameters<O extends ParserConfig> =
  Omit<O, 'parameters'> extends O ?
    O['allowUnknownParameters'] extends true ?
      [...string[]]
    : null
  : O['parameters'] extends undefined ? null
  : O['allowUnknownParameters'] extends true ?
    ParametersConfigToVariadicArgumentsParameters<NonNullable<O['parameters']>>
  : ParametersConfigToArgumentsParameters<NonNullable<O['parameters']>>;
