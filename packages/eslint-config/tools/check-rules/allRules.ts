/* eslint-disable @typescript-eslint/no-unsafe-member-access -- needed */
/* eslint-disable @typescript-eslint/no-unsafe-argument -- needed */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- false positive? */
import * as eslintPluginNextjs from '@next/eslint-plugin-next';
import * as eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import * as eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import * as eslintPluginImport from 'eslint-plugin-import';
import * as eslintPluginJest from 'eslint-plugin-jest';
import * as eslintPluginJestFormatting from 'eslint-plugin-jest-formatting';
import * as eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import * as eslintPluginNode from 'eslint-plugin-node';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import * as eslintPluginPromise from 'eslint-plugin-promise';
import * as eslintPluginReact from 'eslint-plugin-react';
import * as eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import * as eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import * as eslintPluginUnicorn from 'eslint-plugin-unicorn';
import * as eslint from 'eslint/use-at-your-own-risk';

interface Rule {
  meta?: {
    deprecated: boolean;
  };
}

const eslintRules: string[] = [];

for (const [ruleName, rule] of eslint.builtinRules.entries()) {
  if (!rule.meta?.deprecated) {
    eslintRules.push(ruleName);
  }
}

const typescriptRules = (Object.entries(eslintPluginTypescript.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@typescript-eslint/${ruleName}`);

const eslintCommentsRules = (
  Object.entries(eslintPluginEslintComments.rules) as Array<[string, Rule]>
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `eslint-comments/${ruleName}`);

const importRules = (Object.entries(eslintPluginImport.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `import/${ruleName}`);

const jestRules = (Object.entries(eslintPluginJest.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `jest/${ruleName}`);

const jestFormattingRules = (
  Object.entries(eslintPluginJestFormatting.rules) as Array<[string, Rule]>
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `jest-formatting/${ruleName}`);

const jsxA11yRules = (Object.entries(eslintPluginJsxA11y.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `jsx-a11y/${ruleName}`);

const nodeRules = (Object.entries(eslintPluginNode.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `node/${ruleName}`);

const prettierRules = (Object.entries(eslintPluginPrettier.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `prettier/${ruleName}`);

const promiseRules = (Object.entries(eslintPluginPromise.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `promise/${ruleName}`);

const reactRules = (Object.entries(eslintPluginReact.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `react/${ruleName}`);

const reactHooksRules = (Object.entries(eslintPluginReactHooks.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `react-hooks/${ruleName}`);

const testingLibraryRules = (
  Object.entries(eslintPluginTestingLibrary.rules) as Array<[string, Rule]>
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `testing-library/${ruleName}`);

const unicornRules = (Object.entries(eslintPluginUnicorn.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `unicorn/${ruleName}`);

const nextjsRules = (Object.entries(eslintPluginNextjs.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@next/next/${ruleName}`);

export const allRules = [
  ...eslintRules,
  ...typescriptRules,
  ...eslintCommentsRules,
  ...importRules,
  ...jestRules,
  ...jestFormattingRules,
  ...jsxA11yRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
  ...reactRules,
  ...reactHooksRules,
  ...testingLibraryRules,
  ...unicornRules,
  ...nextjsRules,
];
