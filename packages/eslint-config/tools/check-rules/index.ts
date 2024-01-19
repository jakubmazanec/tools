import a11yRulesConfig from '../../src/rules/a11y';
import eslintRulesConfig from '../../src/rules/eslint';
import eslintCommentsRulesConfig from '../../src/rules/eslint-comments';
import importRulesConfig from '../../src/rules/import';
import nextjsRulesConfig from '../../src/rules/nextjs';
import nodeRulesConfig from '../../src/rules/node';
import prettierRulesConfig from '../../src/rules/prettier';
import promiseRulesConfig from '../../src/rules/promise';
import reactRulesConfig from '../../src/rules/react';
import reactHooksRulesConfig from '../../src/rules/react-hooks';
import stylisticRulesConfig from '../../src/rules/stylistic';
import testingLibraryRulesConfig from '../../src/rules/testing-library';
import typescriptRulesConfig from '../../src/rules/typescript';
import unicornRulesConfig from '../../src/rules/unicorn';
import vitestRulesConfig from '../../src/rules/vitest';
import {allRules} from './allRules';

let a11yRules = Object.entries(a11yRulesConfig!).map(([ruleName]) => ruleName);
let eslintRules = Object.entries(eslintRulesConfig!).map(([ruleName]) => ruleName);
let stylisticRules = Object.entries(stylisticRulesConfig!).map(([ruleName]) => ruleName);
let eslintCommentsRules = Object.entries(eslintCommentsRulesConfig!).map(([ruleName]) => ruleName);
let importRules = Object.entries(importRulesConfig!).map(([ruleName]) => ruleName);
let vitestRules = Object.entries(vitestRulesConfig!).map(([ruleName]) => ruleName);
let nodeRules = Object.entries(nodeRulesConfig!).map(([ruleName]) => ruleName);
let prettierRules = Object.entries(prettierRulesConfig!).map(([ruleName]) => ruleName);
let promiseRules = Object.entries(promiseRulesConfig!).map(([ruleName]) => ruleName);
let reactHookRules = Object.entries(reactHooksRulesConfig!).map(([ruleName]) => ruleName);
let reactRules = Object.entries(reactRulesConfig!).map(([ruleName]) => ruleName);
let testingLibraryRules = Object.entries(testingLibraryRulesConfig!).map(([ruleName]) => ruleName);
let typescriptRules = Object.entries(typescriptRulesConfig!).map(([ruleName]) => ruleName);
let unicornRules = Object.entries(unicornRulesConfig!).map(([ruleName]) => ruleName);
let nextjsRules = Object.entries(nextjsRulesConfig!).map(([ruleName]) => ruleName);

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare -- in this case it doesn't matter
let usedRules = [
  ...a11yRules,
  ...eslintRules,
  ...stylisticRules,
  ...eslintCommentsRules,
  ...importRules,
  ...vitestRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
  ...reactHookRules,
  ...reactRules,
  ...testingLibraryRules,
  ...typescriptRules,
  ...unicornRules,
  ...nextjsRules,
].sort();

let missingRules: string[] = [];

allRules.forEach((ruleName: string) => {
  if (!usedRules.includes(ruleName)) {
    missingRules.push(ruleName);
  }
});

missingRules.sort();

let deprecatedRules: string[] = [];

usedRules.forEach((ruleName: string) => {
  if (!allRules.includes(ruleName)) {
    deprecatedRules.push(ruleName);
  }
});

deprecatedRules.sort();

console.log('Deprecated rules:', deprecatedRules);
console.log('Missing rules:', missingRules);
