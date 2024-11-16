/* eslint-disable @typescript-eslint/no-unsafe-member-access -- needed */
/* eslint-disable @typescript-eslint/no-unsafe-argument -- needed */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- false positive? */
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import eslintPluginStylistic from '@stylistic/eslint-plugin';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import {type Linter} from 'eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginNode from 'eslint-plugin-n';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginVitest from 'eslint-plugin-vitest';
import eslint from 'eslint/use-at-your-own-risk';

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

let stylisticRules = (
  Object.entries((eslintPluginStylistic as unknown as Linter.RulesRecord).rules!) as Array<
    [string, Rule]
  >
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `@stylistic/js/${ruleName}`);

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

let jsxA11yRules = (
  Object.entries((eslintPluginJsxA11y as unknown as Linter.RulesRecord).rules!) as Array<
    [string, Rule]
  >
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `jsx-a11y/${ruleName}`);

let nodeRules = (
  Object.entries((eslintPluginNode as unknown as Linter.RulesRecord).rules!) as Array<
    [string, Rule]
  >
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `node/${ruleName}`);

let prettierRules = (
  Object.entries((eslintPluginPrettier as unknown as Linter.RulesRecord).rules!) as Array<
    [string, Rule]
  >
)
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

let unicornRules = (
  Object.entries((eslintPluginUnicorn as unknown as Linter.RulesRecord).rules!) as Array<
    [string, Rule]
  >
)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `unicorn/${ruleName}`);

let securityRules = (Object.entries(eslintPluginSecurity.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `security/${ruleName}`);

let perfectionistRules = (Object.entries(eslintPluginPerfectionist.rules) as Array<[string, Rule]>)
  .filter(([, rule]) => !rule.meta?.deprecated)
  .map(([ruleName]) => `perfectionist/${ruleName}`);

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
  ...securityRules,
  ...perfectionistRules,
];
