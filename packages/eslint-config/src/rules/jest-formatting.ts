import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // eslint-plugin-jest-formatting
  'jest-formatting/padding-around-all': 'warn',
};

export default config;
