import typescriptEslintParser from '@typescript-eslint/parser';
import {type default as eslint} from 'eslint';
import nEslintPlugin from 'eslint-plugin-n';
import globals from 'globals';

import {
  JS_AND_TS_EXTENSIONS,
  JS_AND_TS_EXTENSIONS_GLOB_PART,
  JS_EXTENSIONS_GLOB_PART,
  TS_EXTENSIONS_GLOB_PART,
} from '../constants.js';
import {nodejsRules} from '../rules.js';

export const nodejs: eslint.Linter.Config[] = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: [`**/*.${JS_EXTENSIONS_GLOB_PART}`],

    languageOptions: {
      ecmaVersion: 2024,
      parserOptions: {
        ecmaFeatures: {jsx: true},
      },
    },
  },
  {
    files: [`**/*.${TS_EXTENSIONS_GLOB_PART}`],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: 'tsconfig.typecheck.json',
      },
    },
  },
  {
    files: [`**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`],

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
