import {type ParameterConfig} from './ParameterConfig.js';

/** A type representing parser's parameters configuration. */
export type ParametersConfig =
  | readonly [
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
      ParameterConfig,
    ]
  | readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig]
  | readonly [ParameterConfig, ParameterConfig, ParameterConfig, ParameterConfig]
  | readonly [ParameterConfig, ParameterConfig, ParameterConfig]
  | readonly [ParameterConfig, ParameterConfig]
  | readonly [ParameterConfig];
