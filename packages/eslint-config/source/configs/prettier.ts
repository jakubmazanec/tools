import typescriptEslintParser from '@typescript-eslint/parser';
import {type default as eslint} from 'eslint';
import prettierEslintConfig from 'eslint-config-prettier';
import prettierEslintPlugin from 'eslint-plugin-prettier';

import {
  JS_AND_TS_EXTENSIONS_GLOB_PART,
  JS_EXTENSIONS_GLOB_PART,
  TS_EXTENSIONS_GLOB_PART,
} from '../constants.js';
import {prettierRules} from '../rules.js';

export const prettier: eslint.Linter.Config[] = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  prettierEslintConfig,
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

    plugins: {
      prettier: prettierEslintPlugin,
    },

    rules: {
      ...prettierRules,
    },
  },
];
