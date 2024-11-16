import type eslint from 'eslint';

import {JS_EXTENSIONS_GLOB_PART} from '../constants.js';

export const importRules: eslint.Linter.Config['rules'] = {
  // override ESLint rules
  'no-duplicate-imports': 'off', // disallow duplicate module imports
  'sort-imports': 'off', // enforce sorted import declarations within modules

  // eslint-plugin-import rules
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'], // enforce or ban the use of inline type-only markers for named imports
  'import/default': 'off', // ensure a default export is present, given a default import
  'import/dynamic-import-chunkname': 'off', // enforce a leading comment with the webpackChunkName for dynamic imports
  'import/no-empty-named-blocks': 'error', // forbid empty named import blocks
  'import/export': 'error', // report any invalid exports, i.e. re-export of the same name
  'import/exports-last': 'off', // ensure all exports appear after other statements
  'import/extensions': 'off', // ensure consistent use of file extension within the import path
  'import/first': 'error', // ensure all imports appear before other statements
  'import/group-exports': 'off', // prefer named exports to be grouped together in a single export declaration
  'import/max-dependencies': 'off', // limit the maximum number of dependencies a module can have
  'import/no-internal-modules': 'off', // prevent importing the submodules of other modules
  'import/named': 'error', // ensure named imports correspond to a named export in the remote file
  'import/namespace': 'off', // ensure imported namespaces contain dereferenced properties as they are dereferenced
  'import/newline-after-import': 'error', // enforce a newline after import statements
  'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
  'import/no-amd': 'error', // report AMD require and define calls
  'import/no-anonymous-default-export': 'off', // forbid anonymous values as default exports
  'import/no-commonjs': 'off', // report CommonJS require calls and module.exports or exports.*
  'import/no-cycle': 'error', // forbid a module from importing a module with a dependency path back to itself
  'import/no-default-export': 'off', // forbid default exports
  'import/no-deprecated': 'warn', // report imported names marked with @deprecated documentation tag
  'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
  'import/no-dynamic-require': 'error', // forbid require() calls with expressions
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        `**/*.test.${JS_EXTENSIONS_GLOB_PART}`,
        `**/*.tests.${JS_EXTENSIONS_GLOB_PART}`,
        `**/*.story.${JS_EXTENSIONS_GLOB_PART}`,
        `**/*.stories.${JS_EXTENSIONS_GLOB_PART}`,
        `./.storybook/**/*.${JS_EXTENSIONS_GLOB_PART}`,
        `dbschema/**/*.${JS_EXTENSIONS_GLOB_PART}`,
        `stories/**/*.${JS_EXTENSIONS_GLOB_PART}`,
        `tests/**/*.${JS_EXTENSIONS_GLOB_PART}`,
        `tools/**/*.${JS_EXTENSIONS_GLOB_PART}`,
        `./*.${JS_EXTENSIONS_GLOB_PART}`,
      ],
      optionalDependencies: false,
    },
  ], // forbid the use of extraneous packages
  'import/no-import-module-exports': 'off', // forbid imports with CommonJS exports
  'import/no-mutable-exports': 'error', // forbid the use of mutable exports with var or let
  'import/no-named-as-default': 'off', // report use of exported name as identifier of default export
  'import/no-named-as-default-member': 'error', // report use of exported name as property of default export
  'import/no-named-default': 'error', // forbid named default exports
  'import/no-named-export': 'off', // forbid named exports
  'import/no-namespace': 'off', // forbid namespace (a.k.a. "wildcard" *) imports
  'import/no-nodejs-modules': 'off', // no Node.js builtin modules
  'import/no-relative-packages': 'off', // prevent importing packages through relative paths
  'import/no-relative-parent-imports': 'off', // forbid importing modules from parent directories
  'import/no-restricted-paths': 'off', // restrict which files can be imported in a given folder
  'import/no-self-import': 'error', // forbid a module from importing itself
  'import/no-unassigned-import': 'off', // forbid unassigned imports
  // TODO: enable when these are fixed: https://github.com/import-js/eslint-plugin-import/issues/3088, https://github.com/import-js/eslint-plugin-import/issues/3082
  'import/no-unresolved': ['off', {commonjs: true, caseSensitive: true}], // ensure imports point to a file/module that can be resolved
  'import/no-unused-modules': 'off', // report modules without exports, or exports without matching import in another module
  'import/no-useless-path-segments': ['error', {noUselessIndex: true}], // prevent unnecessary path segments in import and require statements
  'import/no-webpack-loader-syntax': 'error', // forbid webpack loader syntax in imports
  'import/unambiguous': 'off', // report potentially ambiguous parse goal (script vs. module)
  'import/order': 'off', // enforce a convention in module import order
  'import/prefer-default-export': 'off', // prefer a default export if module exports a single name
};
