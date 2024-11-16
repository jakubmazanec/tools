import commentsEslintPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import {type default as eslint, type ESLint} from 'eslint';
import importEslintPlugin from 'eslint-plugin-import';
import a11yEslintPlugin from 'eslint-plugin-jsx-a11y';
import perfectionistEslintPlugin from 'eslint-plugin-perfectionist';
import promiseEslintPlugin from 'eslint-plugin-promise';
import reactEslintPlugin from 'eslint-plugin-react';
import reactCompilerEslintPlugin from 'eslint-plugin-react-compiler';
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks';
import securityEslintPlugin from 'eslint-plugin-security';
import testingLibraryEslintPlugin from 'eslint-plugin-testing-library';
import unicornEslintPlugin from 'eslint-plugin-unicorn';
import vitestEslintPlugin from 'eslint-plugin-vitest';
import globals from 'globals';

import {
  ASSET_EXTENSIONS_REGEXP,
  CSS_EXTENSIONS_REGEXP,
  GRAPHQL_EXTENSIONS_REGEXP,
  JS_AND_TS_EXTENSIONS,
  JS_AND_TS_EXTENSIONS_GLOB_PART,
  TS_EXTENSIONS,
  TS_EXTENSIONS_GLOB_PART,
} from '../constants.js';
import {
  a11yRules,
  commentsRules,
  eslintRules,
  importRules,
  perfectionistRules,
  promiseRules,
  reactCompilerRules,
  reactHooksRules,
  reactRules,
  securityRules,
  stylisticRules,
  testingLibraryRules,
  typescriptRules,
  unicornRules,
  vitestRules,
} from '../rules.js';

export const main: eslint.Linter.Config[] = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: [`**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`],

    languageOptions: {
      ecmaVersion: 2024,
      parserOptions: {
        ecmaFeatures: {jsx: true},
      },
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.es2024,
        ...globals.serviceworker,
        ...globals.worker,
      },
    },
    // TODO: fix the type essertions
    plugins: {
      '@stylistic/js': stylisticEslintPlugin as ESLint.Plugin,
      'eslint-comments': commentsEslintPlugin as ESLint.Plugin,
      import: importEslintPlugin as ESLint.Plugin,
      'jsx-a11y': a11yEslintPlugin as ESLint.Plugin, // type assertions needed because of `exactOptionalPropertyTypes: true`
      promise: promiseEslintPlugin as ESLint.Plugin,
      react: reactEslintPlugin as ESLint.Plugin,
      'react-hooks': reactHooksEslintPlugin as ESLint.Plugin,
      unicorn: unicornEslintPlugin as ESLint.Plugin, // type assertions needed because of `exactOptionalPropertyTypes: true`
      security: securityEslintPlugin as ESLint.Plugin,
      'react-compiler': reactCompilerEslintPlugin as ESLint.Plugin,
      perfectionist: perfectionistEslintPlugin as unknown as ESLint.Plugin,
    },

    settings: {
      'import/ignore': [
        'node_modules',
        String.raw`\.json$`,
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
      ...a11yRules,
      ...commentsRules,
      ...eslintRules,
      ...importRules,
      ...perfectionistRules,
      ...promiseRules,
      ...reactCompilerRules,
      ...reactHooksRules,
      ...reactRules,
      ...securityRules,
      ...stylisticRules,
      ...unicornRules,
    },
  },
  {
    files: [`**/*.test.${JS_AND_TS_EXTENSIONS_GLOB_PART}`],

    languageOptions: {
      parser: typescriptEslintParser,
      globals: {
        ...globals.node,
        ...vitestEslintPlugin.environments.env.globals,
        jsdom: 'readonly',
      },
    },
    plugins: {
      vitest: vitestEslintPlugin,
      'testing-library': testingLibraryEslintPlugin as ESLint.Plugin,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
      'testing-library/custom-queries': 'off',
      'testing-library/custom-renders': 'off',
      'testing-library/utils-module': 'off',
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
    files: [`**/*.${TS_EXTENSIONS_GLOB_PART}`],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: 'tsconfig.typecheck.json',
        // tsconfigRootDir: import.meta.dirname,
        // EXPERIMENTAL_useProjectService: true, // TODO: when this is set to `true`, ESLint doesn't use correct `tsconfig.typecheck.json` for files that are directly in the projects folder (e.g. `vite.config.ts` complains that `strictNullcheck` is needed for some rules)
      },
    },
    // TODO: fix the type essertion
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin as unknown as ESLint.Plugin,
    },
    settings: {
      node: {
        tryExtensions: JS_AND_TS_EXTENSIONS,
      },
      'import/resolver': {
        typescript: {},
      },
      'import/parsers': {
        '@typescript-eslint/parser': TS_EXTENSIONS,
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
            `**/*.tests.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
            `**/*.stories.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
            `./.storybook/**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
            `dbschema/**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
            `stories/**/*.${JS_AND_TS_EXTENSIONS_GLOB_PART}`,
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
    files: [`**/*.test.${TS_EXTENSIONS_GLOB_PART}`],

    rules: {
      // override @typescript-eslint/eslint-plugin rules
      '@typescript-eslint/ban-ts-comment': 'off', // bans // @ts-<directive> comments from being used
      '@typescript-eslint/no-floating-promises': 'off', // requires Promise-like values to be handled appropriately
    },
  },
];
