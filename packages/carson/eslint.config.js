/**
 * DO NOT EDIT!
 * This file was autogenerated by Carson.
 * Changes may cause incorrect behavior and will be lost when the file is regenerated.
 *
 * Run `npx carson update workspace` to regenerate.
 */

import main, {nodejs, prettier} from '@jakubmazanec/eslint-config';

export default [
  ...main,
  ...nodejs,
  ...prettier,
  {
    ignores: [
      '**/*.d.ts',
      '**/*.json',
      '**/*.md',
      '**/*.mdx',
      '.cache/**',
      '.turbo/**',
      'bin/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      'public/**',
    ],
  },
];