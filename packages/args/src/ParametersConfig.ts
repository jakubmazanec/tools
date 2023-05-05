import {type ParameterConfig} from './ParameterConfig.js';

/** Parser's parameters configuration. */
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
