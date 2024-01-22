import {type OptionsConfig} from '../OptionsConfig.js';

/**
 * Converts options config to a map (i.e. an object) of short option names (object keys) to long option names (values).
 *
 * @optionsConfig Options config to create the map from.
 * @return Resulting map.
 */
export function createOptionShortNameMap(optionsConfig: OptionsConfig) {
  let map: Record<string, string> = {};

  for (let [optionName, optionConfig] of Object.entries(optionsConfig)) {
    if (typeof optionConfig.shortName === 'string') {
      map[optionConfig.shortName] = optionName;
    }
  }

  return map;
}
