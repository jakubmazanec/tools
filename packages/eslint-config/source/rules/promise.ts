import type eslint from 'eslint';

export const promiseRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-promise rules
  'promise/always-return': 'off', // return inside each then() to create readable and reusable Promise chains
  'promise/avoid-new': 'off', // avoid creating new promises outside of utility libs (use pify instead)
  'promise/catch-or-return': 'off', // enforces the use of catch() on un-returned promises
  'promise/no-callback-in-promise': 'error', // avoid calling cb() inside of a then() (use nodeify instead)
  'promise/no-multiple-resolved': 'error', // disallow creating new promises with paths that resolve multiple times
  'promise/no-native': 'off', // in an ES5 environment, make sure to create a Promise constructor before using
  'promise/no-nesting': 'warn', // avoid nested then() or catch() statements
  'promise/no-new-statics': 'error', // avoid calling new on a Promise static method
  'promise/no-promise-in-callback': 'error', // avoid using promises inside of callbacks
  'promise/no-return-in-finally': 'error', // disallow return statements in finally()
  'promise/no-return-wrap': [
    'error',
    {
      allowReject: true,
    },
  ], // avoid wrapping values in Promise.resolve or Promise.reject when not needed
  'promise/param-names': 'error', // enforce consistent param names and ordering when creating new promises
  'promise/prefer-await-to-callbacks': 'off', // prefer async/await to the callback pattern
  'promise/prefer-await-to-then': 'off', // prefer await to then() for reading Promise values
  'promise/spec-only': 'error', // disallow use of non-standard Promise static methods
  'promise/valid-params': 'error', // ensures the proper number of arguments are passed to Promise functions
};
