import {type OptionsConfig} from '../types.js';

export function createOptionShortNameMap(optionsConfig: OptionsConfig) {
  let map: Record<string, string> = {};

  for (let [optionName, optionConfig] of Object.entries(optionsConfig)) {
    if (typeof optionConfig.shortName === 'string') {
      map[optionConfig.shortName] = optionName;
    }
  }

  return map;
}
