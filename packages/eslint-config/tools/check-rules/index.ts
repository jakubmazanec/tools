import a11yRulesConfig from '../../source/rules/a11y';
import eslintRulesConfig from '../../source/rules/eslint';
import eslintCommentsRulesConfig from '../../source/rules/eslint-comments';
import importRulesConfig from '../../source/rules/import';
import nodeRulesConfig from '../../source/rules/node';
import prettierRulesConfig from '../../source/rules/prettier';
import promiseRulesConfig from '../../source/rules/promise';
import reactRulesConfig from '../../source/rules/react';
import reactHooksRulesConfig from '../../source/rules/react-hooks';
import stylisticRulesConfig from '../../source/rules/stylistic';
import testingLibraryRulesConfig from '../../source/rules/testing-library';
import typescriptRulesConfig from '../../source/rules/typescript';
import unicornRulesConfig from '../../source/rules/unicorn';
import vitestRulesConfig from '../../source/rules/vitest';
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
