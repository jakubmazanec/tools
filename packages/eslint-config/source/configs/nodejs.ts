import {type default as eslint, type ESLint} from 'eslint';
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
    // TODO: fix the type essertion
    plugins: {
      node: nEslintPlugin as ESLint.Plugin,
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
