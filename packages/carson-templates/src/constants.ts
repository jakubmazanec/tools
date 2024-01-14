export const CARSON_PACKAGE_NAME = '@jakubmazanec/carson';
export const TEMPLATE_PACKAGE_NAME = '@jakubmazanec/carson-templates';

export const MAIN_BRANCH_NAMES = new Set(['main', 'master']);
export const DEVELOPMENT_BRANCH_NAMES = new Set(['development', 'develop', 'dev']);

export const BUILD_TO_ESM_COMMAND =
  'esbuild "src/**/*" --platform=node --target=node20.8 --outdir=dist --sourcemap';
export const BUILD_TO_CJS_COMMAND =
  'esbuild "src/**/*" --platform=node --target=node20.8 --format=cjs --outdir=dist --sourcemap';
export const FORMAT_COMMAND = 'prettier . --write --ignore-unknown';
export const TEST_COMMAND = 'vitest run --coverage';

export const LINT_IGNORE_PATTERNS = [
  '.cache/',
  '.turbo/',
  'bin/',
  'build/',
  'coverage/',
  'dist/',
  'node_modules/',
  'public/',
  '*.d.ts',
  '*.json',
  '*.md',
  '*.mdx',
];

export const FORMAT_IGNORE_PATTERNS = [
  '.cache/',
  '.turbo/',
  'build/',
  'coverage/',
  'dist/',
  'node_modules/',
  'public/',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'CHANGELOG.md',
  'LICENSE.md',
];

export const TSCONFIG_COMPILER_OPTIONS = {
  allowSyntheticDefaultImports: true,
  composite: true,
  exactOptionalPropertyTypes: true,
  forceConsistentCasingInFileNames: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  lib: ['dom', 'dom.iterable', 'es2022'],
  module: 'node16',
  moduleResolution: 'node16',
  noEmitOnError: false, // TODO: change to `true` when this is fixed: https://github.com/kulshekhar/ts-jest/issues/4198
  noImplicitOverride: true,
  noImplicitReturns: true,
  noUncheckedIndexedAccess: true,
  skipLibCheck: true,
  strict: true,
  target: 'es2022',
};
