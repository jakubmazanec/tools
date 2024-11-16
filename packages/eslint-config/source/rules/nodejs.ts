import type eslint from 'eslint';

export const nodejsRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-node rules
  'node/callback-return': 'warn', // require return statements after callbacks
  'node/exports-style': 'off', // enforce either module.exports or exports
  'node/file-extension-in-import': 'off', // enforce the style of file extensions in import declarations
  'node/global-require': 'warn', // require require() calls to be placed at top-level module scope
  'node/handle-callback-err': 'warn', // require error handling in callbacks
  'node/hashbang': 'warn', // suggest correct usage of hashbang
  'node/no-callback-literal': 'off', // ensure Node.js-style error-first callback pattern is followed
  'node/no-deprecated-api': 'error', // disallow deprecated APIs
  'node/no-exports-assign': 'error', // disallow the assignment to exports
  'node/no-extraneous-import': 'off', // disallow import declarations which import extraneous modules
  'node/no-extraneous-require': 'off', // disallow require() expressions which import extraneous modules
  'node/no-missing-import': 'off', // disallow import declarations which import non-existence modules
  'node/no-missing-require': 'off', // disallow require() expressions which import non-existence modules
  'node/no-mixed-requires': 'warn', // disallow require calls to be mixed with regular variable declarations
  'node/no-new-require': 'warn', // disallow new operators with calls to require
  'node/no-path-concat': 'warn', // disallow string concatenation with __dirname and __filename
  'node/no-process-env': 'off', // disallow the use of process.env
  'node/no-process-exit': 'warn', // disallow the use of process.exit()
  'node/no-restricted-import': 'off', // disallow specified modules when loaded by import declarations
  'node/no-restricted-require': 'off', // disallow specified modules when loaded by require
  'node/no-sync': 'warn', // disallow synchronous methods
  'node/no-unpublished-bin': 'off', // disallow bin files that npm ignores
  'node/no-unpublished-import': 'off', // disallow import declarations which import private modules
  'node/no-unpublished-require': 'off', // disallow require() expressions which import private modules
  'node/no-unsupported-features/es-builtins': ['error', {ignores: []}], // disallow unsupported ECMAScript built-ins on the specified version
  'node/no-unsupported-features/es-syntax': ['error', {ignores: []}], // disallow unsupported ECMAScript syntax on the specified version
  'node/no-unsupported-features/node-builtins': ['error', {ignores: []}], // disallow unsupported Node.js built-in APIs on the specified version
  'node/prefer-global/buffer': 'warn', // enforce either Buffer or require("buffer").Buffer
  'node/prefer-global/console': 'warn', // enforce either console or require("console")
  'node/prefer-global/process': 'warn', // enforce either process or require("process")
  'node/prefer-global/text-decoder': 'warn', // enforce either TextDecoder or require("util").TextDecoder
  'node/prefer-global/text-encoder': 'warn', // enforce either TextEncoder or require("util").TextEncoder
  'node/prefer-global/url': 'warn', // enforce either URL or require("url").URL
  'node/prefer-global/url-search-params': 'warn', // enforce either URLSearchParams or require("url").URLSearchParams
  'node/prefer-promises/dns': 'error', // enforce require("dns").promises
  'node/prefer-promises/fs': 'error', // enforce require("fs").promises
  'node/prefer-node-protocol': 'off', // enforce using the node: protocol when importing Node.js builtin modules
  'node/process-exit-as-throw': 'off', // make process.exit() expressions the same code path as throw
};
