import fs from 'node:fs';
import {createRequire} from 'node:module';
import semver from 'semver';

export const AUTHOR = 'Jakub Mazanec <jakub@mazanec.dev>';

export const BUILD_DIRECTORY = 'build';
export const STORYBOOK_BUILD_DIRECTORY = 'storybook-static';
export const SOURCE_DIRECTORY = 'source';

export const APP_PORT = 5000;

export const CARSON_PACKAGE_NAME = '@jakubmazanec/carson';
export const TEMPLATE_PACKAGE_NAME = '@jakubmazanec/carson-templates';
export const LINTER_CONFIG_PACKAGE_NAME = '@jakubmazanec/eslint-config';
export const CHANGELOG_PACKAGE_NAME = '@jakubmazanec/changesets-changelog';

export const MAIN_BRANCH_NAMES = new Set(['main', 'master']);
export const DEVELOPMENT_BRANCH_NAMES = new Set(['dev', 'develop', 'development']);

export const LINT_IGNORES = [
  '.cache/**',
  '.turbo/**',
  'bin/**',
  'coverage/**',
  'node_modules/**',
  'public/**',
  '**/*.d.ts',
  '**/*.json',
  '**/*.md',
  '**/*.mdx',
  `${BUILD_DIRECTORY}/**`,
].sort();

export const FORMAT_IGNORE_PATTERNS = [
  '.cache/',
  '.turbo/',
  'coverage/',
  'node_modules/',
  'public/',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'CHANGELOG.md',
  'LICENSE.md',
  `${BUILD_DIRECTORY}/`,
].sort();

export const ECMASCRIPT_VERSION = 2024;

export const TSCONFIG_COMPILER_OPTIONS = {
  allowSyntheticDefaultImports: true,
  composite: true,
  exactOptionalPropertyTypes: true,
  forceConsistentCasingInFileNames: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  lib: ['dom', 'dom.iterable', `es${ECMASCRIPT_VERSION}`],
  module: 'node16',
  moduleResolution: 'node16',
  noEmitOnError: true,
  noImplicitOverride: true,
  noImplicitReturns: true,
  noUncheckedIndexedAccess: true,
  skipLibCheck: true,
  strict: true,
  target: `es${ECMASCRIPT_VERSION}`,
};

export const PRETTIER_OPTIONS = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  // TODO: remove when this is fixed: https://github.com/prettier/prettier/issues/15956
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

export const TYPEDOC_CONFIG = {
  plugin: 'typedoc-plugin-markdown',
  entryPoints: [`./${SOURCE_DIRECTORY}/main.ts`],
  out: 'docs',
  readme: 'none',
  githubPages: false,
  hideBreadcrumbs: true,
};

// dependencies
let require = createRequire(import.meta.url);
let carsonPackageVersion =
  semver
    .minVersion(
      (
        JSON.parse(
          fs.readFileSync(require.resolve(`${TEMPLATE_PACKAGE_NAME}/package.json`), {
            encoding: 'utf8',
          }),
        ) as {peerDependencies: Record<string, string>}
      ).peerDependencies[CARSON_PACKAGE_NAME] ?? '^1.0.0',
    )
    ?.format() ?? '1.0.0';
let isCarsonPackageVersionPrerelease = !!semver.prerelease(carsonPackageVersion)?.length;
let templatesPackageVersion = (
  JSON.parse(
    fs.readFileSync(require.resolve(`${TEMPLATE_PACKAGE_NAME}/package.json`), {
      encoding: 'utf8',
    }),
  ) as {version: string}
).version;
let isTemplatesPackageVersionPrerelease = !!semver.prerelease(templatesPackageVersion)?.length;

export const DEPENDENCY_VERSIONS: Record<string, string> = {
  [CARSON_PACKAGE_NAME]:
    isCarsonPackageVersionPrerelease ? carsonPackageVersion : `^${carsonPackageVersion}`,
  [TEMPLATE_PACKAGE_NAME]:
    isTemplatesPackageVersionPrerelease ? templatesPackageVersion : `^${templatesPackageVersion}`,
  [CHANGELOG_PACKAGE_NAME]: '^2.0.0',
  [LINTER_CONFIG_PACKAGE_NAME]: '^4.0.0',

  '@changesets/cli': '^2.0.0',
  '@chromatic-com/storybook': '^4.0.0',
  '@react-router/dev': '^7.0.0',
  '@react-router/fs-routes': '^7.0.0',
  '@react-router/node': '^7.0.0',
  '@react-router/serve': '^7.0.0',
  '@storybook/addon-links': '^9.0.0',
  '@storybook/addon-docs': '^9.0.0',
  '@storybook/react-vite': '^9.0.0',
  '@testing-library/jest-dom': '^6.0.0',
  '@testing-library/react': '^16.0.0',
  '@types/lodash': '^4.0.0',
  '@types/react': '^19.0.0',
  '@types/react-dom': '^19.0.0',
  '@vitest/coverage-v8': '^3.0.0',
  autoprefixer: '^10.0.0',
  chromatic: '^11.0.0',
  concurrently: '^9.0.0',
  'cross-env': '^7.0.0',
  'del-cli': '^6.0.0',
  esbuild: '^0.24.0',
  eslint: '^9.0.0',
  'happy-dom': '^18.0.0',
  isbot: '^5.0.0',
  lodash: '^4.0.0',
  'patch-package': '^8.0.0',
  prettier: '^3.0.0',
  'prettier-plugin-packagejson': '^2.0.0',
  'prettier-plugin-tailwindcss': '^0.6.0',
  react: '^19.0.0',
  'react-dom': '^19.0.0',
  'react-router': '^7.0.0',
  storybook: '^9.0.0',
  tailwindcss: '^4.0.0',
  '@tailwindcss/vite': '^4.0.0',
  turbo: '^2.0.0',
  typedoc: '^0.28.0',
  'typedoc-plugin-markdown': '^4.0.0',
  typescript: '^5.0.0',
  vite: '^6.0.0',
  vitest: '^3.0.0',

  node: '^24.1.0',
  '@types/node': '^22.0.0',
  npm: '^11.3.0',

  gel: '^6.7.0',
};

// commands
export const BUILD_TO_ESM_COMMAND = `esbuild "${SOURCE_DIRECTORY}/**/*" --platform=node --target=node${semver.major(semver.minVersion(DEPENDENCY_VERSIONS.node!)!)}.${semver.minor(semver.minVersion(DEPENDENCY_VERSIONS.node!)!)} --outdir=${BUILD_DIRECTORY} --sourcemap`;
export const BUILD_TO_CJS_COMMAND = `esbuild "${SOURCE_DIRECTORY}/**/*" --platform=node --target=node${semver.major(semver.minVersion(DEPENDENCY_VERSIONS.node!)!)}.${semver.minor(semver.minVersion(DEPENDENCY_VERSIONS.node!)!)} --format=cjs --outdir=${BUILD_DIRECTORY} --sourcemap`;
export const FORMAT_COMMAND = 'prettier . --write --ignore-unknown';
export const TEST_COMMAND = 'vitest run --coverage --passWithNoTests';
