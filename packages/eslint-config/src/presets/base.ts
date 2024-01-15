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
import promiseRules from '../rules/promise';
import reactRules from '../rules/react';
import reactHooksRules from '../rules/react-hooks';
import simpleImportSortRules from '../rules/simple-import-sort';
import stylisticRules from '../rules/stylistic';
import testingLibraryRules from '../rules/testing-library';
import typescriptRules from '../rules/typescript';
import unicornRules from '../rules/unicorn';
import vitestRules from '../rules/vitest';

const config: eslint.Linter.Config = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@stylistic',
    'eslint-comments',
    'import',
    'jsx-a11y',
    'promise',
    'react',
    'react-hooks',
    'simple-import-sort',
    'unicorn',
  ],
  env: {
    browser: true,
    es2023: true,
    serviceworker: true,
    'shared-node-browser': true,
    worker: true,
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
    'jsx-a11y': {
      polymorphicPropName: 'as',
      components: {
        Button: 'button',
      },
    },
  },

  rules: {
    ...eslintRules,
    ...stylisticRules,
    ...commentsRules,
    ...promiseRules,
    ...importRules,
    ...simpleImportSortRules,
    ...reactRules,
    ...reactHooksRules,
    ...a11yRules,
    ...unicornRules,
  },
  overrides: [
    {
      files: [`*.test.${JS_AND_TS_EXTENSIONS_GLOB_PART}`],
      plugins: ['vitest', 'testing-library'],
      settings: {
        'testing-library/custom-queries': 'off',
        'testing-library/custom-renders': 'off',
        'testing-library/utils-module': 'off',
      },
      globals: {
        jsdom: 'readonly',
      },
      env: {
        node: true,
      },
      rules: {
        ...vitestRules,
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
        // project: 'tsconfig.typecheck.json',
        // tsconfigRootDir: process.cwd(),
        EXPERIMENTAL_useProjectService: true,
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
