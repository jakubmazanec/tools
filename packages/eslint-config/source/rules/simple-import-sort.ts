import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // override eslint-plugin-import rules
  'import/order': 'off', // enforce a convention in module import order

  // eslint-plugin-simple-import-sort  rules
  'simple-import-sort/imports': [
    'error',
    {
      groups: [['^@?\\w'], ['^'], ['^\\.']],
    },
  ],
  'simple-import-sort/exports': 'error',
};

export default config;
