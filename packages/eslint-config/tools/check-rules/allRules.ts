/* eslint-disable @typescript-eslint/no-unsafe-member-access -- needed */
/* eslint-disable @typescript-eslint/no-unsafe-argument -- needed */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- false positive? */
import * as eslintPluginNextjs from '@next/eslint-plugin-next';
import * as eslintPluginStylistic from '@stylistic/eslint-plugin';
import * as eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import * as eslint from 'eslint/use-at-your-own-risk';
import * as eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import * as eslintPluginImport from 'eslint-plugin-import';
import * as eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import * as eslintPluginNode from 'eslint-plugin-node';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import * as eslintPluginPromise from 'eslint-plugin-promise';
import * as eslintPluginReact from 'eslint-plugin-react';
import * as eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import * as eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import * as eslintPluginUnicorn from 'eslint-plugin-unicorn';
import * as eslintPluginVitest from 'eslint-plugin-vitest';

interface Rule {
  meta?: {
    deprecated: boolean;
  };
}

let eslintRules: string[] = [];

for (let [ruleName, rule] of eslint.builtinRules.entries()) {
  if (!rule.meta?.deprecated) {
    eslintRules.push(ruleName);
  }
}

let typescriptRules = (Object.entries(eslintPluginTypescript.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@typescript-eslint/${ruleName}`);

let stylisticRules = (Object.entries(eslintPluginStylistic.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@stylistic/${ruleName}`);

let eslintCommentsRules = (
  Object.entries(eslintPluginEslintComments.rules) as Array<[string, Rule]>
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `eslint-comments/${ruleName}`);

let importRules = (Object.entries(eslintPluginImport.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `import/${ruleName}`);

let vitestRules = (Object.entries(eslintPluginVitest.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `vitest/${ruleName}`);

let jsxA11yRules = (Object.entries(eslintPluginJsxA11y.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `jsx-a11y/${ruleName}`);

let nodeRules = (Object.entries(eslintPluginNode.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `node/${ruleName}`);

let prettierRules = (Object.entries(eslintPluginPrettier.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `prettier/${ruleName}`);

let promiseRules = (Object.entries(eslintPluginPromise.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `promise/${ruleName}`);

let reactRules = (Object.entries(eslintPluginReact.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `react/${ruleName}`);

let reactHooksRules = (Object.entries(eslintPluginReactHooks.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `react-hooks/${ruleName}`);

let testingLibraryRules = (
  Object.entries(eslintPluginTestingLibrary.rules) as Array<[string, Rule]>
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `testing-library/${ruleName}`);

let unicornRules = (Object.entries(eslintPluginUnicorn.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `unicorn/${ruleName}`);

let nextjsRules = (Object.entries(eslintPluginNextjs.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@next/next/${ruleName}`);

export const allRules = [
  ...eslintRules,
  ...typescriptRules,
  ...stylisticRules,
  ...eslintCommentsRules,
  ...importRules,
  ...vitestRules,
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
