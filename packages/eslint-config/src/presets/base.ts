import type eslint from 'eslint';

import {
  ASSET_EXTENSIONS_REGEXP,
  CSS_EXTENSIONS_REGEXP,
  GRAPHQL_EXTENSIONS_REGEXP,
  JS_AND_TS_EXTENSIONS,
  JS_AND_TS_EXTENSIONS_GLOB_PART,
  TS_EXTENSIONS_GLOB_PART,
} from '../constants';
import a11yRules from '../rules/a11y';
import eslintRules from '../rules/eslint';
import commentsRules from '../rules/eslint-comments';
import importRules from '../rules/import';
import jestRules from '../rules/jest';
import jestFormattingRules from '../rules/jest-formatting';
import promiseRules from '../rules/promise';
import reactRules from '../rules/react';
import reactHooksRules from '../rules/react-hooks';
import testingLibraryRules from '../rules/testing-library';
import typescriptRules from '../rules/typescript';
import unicornRules from '../rules/unicorn';

const config: eslint.Linter.Config = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y', 'eslint-comments', 'promise', 'unicorn'],
  env: {
    browser: true,
    es2020: true,
    worker: true,
    serviceworker: true,
  },
  globals: {
    __DEV__: 'readonly',

    // metrics and analytics providers
    ga: 'readonly',
    newrelic: 'readonly',

    // mostly for easier compatibility between browsers, workers, etc
    global: 'readonly',

    // mostly references to `process.env.NODE_ENV`
    process: 'readonly',

    // references for globalThis
    globalThis: 'readonly',

    // Webpack variables
    __webpack_public_path__: 'writeable',
    __webpack_require__: 'readonly',
    __webpack_chunk_load__: 'readonly',
    __webpack_modules__: 'readonly',
    __webpack_hash__: 'readonly',
    __non_webpack_require__: 'readonly',
    __webpack_exports_info__: 'readonly',
    DEBUG: 'readonly',
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.json$',
      ASSET_EXTENSIONS_REGEXP.source,
      CSS_EXTENSIONS_REGEXP.source,
      GRAPHQL_EXTENSIONS_REGEXP.source,
    ],
    react: {
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  rules: {
    ...eslintRules,
    ...commentsRules,
    ...promiseRules,
    ...importRules,
    ...reactRules,
    ...reactHooksRules,
    ...a11yRules,
    ...unicornRules,
  },
  overrides: [
    {
      files: [`*.test.${JS_AND_TS_EXTENSIONS_GLOB_PART}`],

      plugins: ['jest', 'jest-formatting', 'testing-library'],

      settings: {
        'testing-library/custom-queries': 'off',
        'testing-library/custom-renders': 'off',
        'testing-library/utils-module': 'off',
      },

      globals: {
        jsdom: 'readonly',
      },

      env: {
        jest: true,
        node: true,
      },
      rules: {
        ...jestRules,
        ...jestFormattingRules,
        ...testingLibraryRules,

        // override ESLint rules
        'max-classes-per-file': 'off', // enforce a maximum number of classes per file

        // override eslint-plugin-node rules
        'node/no-sync': 'off', // disallow synchronous methods
      },
    },
    {
      files: [`*.${TS_EXTENSIONS_GLOB_PART}`],

      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        project: 'tsconfig.typecheck.json',
        // Fixed issue with webstorm
        tsconfigRootDir: process.cwd(),
      },

      settings: {
        node: {
          tryExtensions: JS_AND_TS_EXTENSIONS,
        },
        'import/resolver': {
          typescript: {},
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
        },
      },
      rules: {
        ...typescriptRules,

        // override eslint-plugin-import rules
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              `**/*.test.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
              `tests/**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
              `tools/**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
              `./*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
            ],
            optionalDependencies: false,
          },
        ],
      },
    },
    {
      files: [`*.test.${TS_EXTENSIONS_GLOB_PART}`],
      rules: {
        // override @typescript-eslint/eslint-plugin rules
        '@typescript-eslint/ban-ts-comment': 'off', // bans // @ts-<directive> comments from being used
        '@typescript-eslint/no-floating-promises': 'off', // requires Promise-like values to be handled appropriately
      },
    },
  ],
};

export = config;
