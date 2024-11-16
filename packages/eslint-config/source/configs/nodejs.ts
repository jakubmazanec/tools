import {type default as eslint} from 'eslint';
import nEslintPlugin from 'eslint-plugin-n';
import globals from 'globals';

import {JS_AND_TS_EXTENSIONS} from '../constants.js';
import {nodejsRules} from '../rules.js';

export const nodejs: eslint.Linter.Config[] = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      node: nEslintPlugin,
    },
    settings: {
      node: {
        tryExtensions: JS_AND_TS_EXTENSIONS,
      },
    },

    rules: {
      ...nodejsRules,
    },
  },
];
