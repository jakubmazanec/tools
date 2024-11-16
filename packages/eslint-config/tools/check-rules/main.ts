import {
  a11yRules as a11yRulesConfig,
  commentsRules as commentsRulesConfig,
  eslintRules as eslintRulesConfig,
  importRules as importRulesConfig,
  nodejsRules as nodejsRulesConfig,
  perfectionistRules as perfectionistRulesConfig,
  prettierRules as prettierRulesConfig,
  promiseRules as promiseRulesConfig,
  reactHooksRules as reactHooksRulesConfig,
  reactRules as reactRulesConfig,
  securityRules as securityRulesConfig,
  stylisticRules as stylisticRulesConfig,
  testingLibraryRules as testingLibraryRulesConfig,
  typescriptRules as typescriptRulesConfig,
  unicornRules as unicornRulesConfig,
  vitestRules as vitestRulesConfig,
} from '../../source/rules.js';
import {allRules} from './allRules.js';

let a11yRules = Object.entries(a11yRulesConfig!).map(([ruleName]) => ruleName);
let eslintRules = Object.entries(eslintRulesConfig!).map(([ruleName]) => ruleName);
let stylisticRules = Object.entries(stylisticRulesConfig!).map(([ruleName]) => ruleName);
let commentsRules = Object.entries(commentsRulesConfig!).map(([ruleName]) => ruleName);
let importRules = Object.entries(importRulesConfig!).map(([ruleName]) => ruleName);
let vitestRules = Object.entries(vitestRulesConfig!).map(([ruleName]) => ruleName);
let nodejsRules = Object.entries(nodejsRulesConfig!).map(([ruleName]) => ruleName);
let prettierRules = Object.entries(prettierRulesConfig!).map(([ruleName]) => ruleName);
let promiseRules = Object.entries(promiseRulesConfig!).map(([ruleName]) => ruleName);
let reactHookRules = Object.entries(reactHooksRulesConfig!).map(([ruleName]) => ruleName);
let reactRules = Object.entries(reactRulesConfig!).map(([ruleName]) => ruleName);
let testingLibraryRules = Object.entries(testingLibraryRulesConfig!).map(([ruleName]) => ruleName);
let typescriptRules = Object.entries(typescriptRulesConfig!).map(([ruleName]) => ruleName);
let unicornRules = Object.entries(unicornRulesConfig!).map(([ruleName]) => ruleName);
let securityRules = Object.entries(securityRulesConfig!).map(([ruleName]) => ruleName);
let perfectionistRules = Object.entries(perfectionistRulesConfig!).map(([ruleName]) => ruleName);

let usedRules = [
  ...a11yRules,
  ...eslintRules,
  ...stylisticRules,
  ...commentsRules,
  ...importRules,
  ...vitestRules,
  ...nodejsRules,
  ...prettierRules,
  ...promiseRules,
  ...reactHookRules,
  ...reactRules,
  ...testingLibraryRules,
  ...typescriptRules,
  ...unicornRules,
  ...securityRules,
  ...perfectionistRules,
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
