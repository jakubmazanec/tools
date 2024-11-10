import type eslint from 'eslint';

export const prettierRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-prettier rules
  'prettier/prettier': 'error',

  // re-enable ESLint rules
  curly: ['error', 'all'], // enforce consistent brace style for all control statements
};
