import {type default as eslint} from 'eslint';
import prettierEslintConfig from 'eslint-config-prettier';
import prettierEslintPlugin from 'eslint-plugin-prettier';

import {prettierRules} from '../rules.js';

export const prettier: eslint.Linter.Config[] = [
  prettierEslintConfig,
  {
    plugins: {
      prettier: prettierEslintPlugin,
    },

    rules: {
      ...prettierRules,
    },
  },
];
