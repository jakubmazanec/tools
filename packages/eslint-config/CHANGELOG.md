# @jakubmazanec/eslint-config

## 3.2.0

### Minor Changes

- [#133](https://github.com/jakubmazanec/js-tools/pull/133) [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d) ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds support for Storybook, so its stories and config files are linted correctly.

## 3.1.0

### Minor Changes

- [#131](https://github.com/jakubmazanec/js-tools/pull/131) [`7db6b89`](https://github.com/jakubmazanec/js-tools/commit/7db6b896d4b0be35eb4001b1ed969374f5485c82) ([@jakubmazanec](https://github.com/jakubmazanec)) – Rules that check class components were turned off; only function components should be used, but
  there currently isn't rule or plugin that enforces that without false positives.

## 3.0.1

### Patch Changes

- [#115](https://github.com/jakubmazanec/js-tools/pull/115) [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803) ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect TypeScript parser config.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115) [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803) ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `.editorconfig` file.

- [#101](https://github.com/jakubmazanec/js-tools/pull/101) [`6a4a076`](https://github.com/jakubmazanec/js-tools/commit/6a4a0764f2d699877fd1648b7d53567f696a1bb2) ([@renovate](https://github.com/apps/renovate)) – Dependency `@stylistic/eslint-plugin` updated to version `^1.6.0`.

- [#120](https://github.com/jakubmazanec/js-tools/pull/120) [`c0313a2`](https://github.com/jakubmazanec/js-tools/commit/c0313a201053b456a2cef6e13441c03e40e2f8ae) ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated to version `^2.4.12`.

- [#105](https://github.com/jakubmazanec/js-tools/pull/105) [`75425bd`](https://github.com/jakubmazanec/js-tools/commit/75425bd97d29db63d96f770711a67687d85e8ba4) ([@renovate](https://github.com/apps/renovate)) – Dependency `eslint-plugin-unicorn` updated to version `^51.0.0`.

- [#119](https://github.com/jakubmazanec/js-tools/pull/119) [`c853783`](https://github.com/jakubmazanec/js-tools/commit/c853783261283025a6ae94f06552fe6b471f180d) ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version `^0.20.1`.

- [#102](https://github.com/jakubmazanec/js-tools/pull/102) [`9ffc37c`](https://github.com/jakubmazanec/js-tools/commit/9ffc37cf91ff47a6a7e3694e19de9ddcef4e7953) ([@renovate](https://github.com/apps/renovate)) – Dependency `@typescript-eslint/parser` updated to version `^6.21.0`.

- [#107](https://github.com/jakubmazanec/js-tools/pull/107) [`98f4c85`](https://github.com/jakubmazanec/js-tools/commit/98f4c85f945d10c106b03e01cfd5bedef494473d) ([@renovate](https://github.com/apps/renovate)) – Dependency `@typescript-eslint/eslint-plugin` updated to version `^6.21.0`.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115) [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803) ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect order of imports in `simple-import-sort/imports` rule.

## 3.0.0

### Major Changes

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – BREAKING: ESLint config was reworked: 1) rules were updated (deprecated rules were removed and some
  of the new ones were turned on); 2) added support for Vitest; 3) plugins were updated; 4) support
  for Jest was removed; 5) support for Next.js was removed; 6) only TypeScript v5 is supported; 7)
  various unnecessary settings were removed; 8) how `@typescript-eslint/parser` finds `tsconfig.json`
  files was updated.

- [#44](https://github.com/jakubmazanec/js-tools/pull/44) [`01fc14d`](https://github.com/jakubmazanec/js-tools/commit/01fc14de26bcca31e45c8a98aad8edd042575775) ([@renovate](https://github.com/apps/renovate)) – BREAKING: Dependency `node` updated to version `^20.8.0`. Dependency `@types/node` updated to
  version `^20.8.5`.

### Minor Changes

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Add Prettier config (previously it was assumed some Prettier config is present in the workspace
  root).

### Patch Changes

- [#60](https://github.com/jakubmazanec/js-tools/pull/60) [`891cbe6`](https://github.com/jakubmazanec/js-tools/commit/891cbe6073aa9c0a40dc54e2cd2687fb9b20ac64) ([@jakubmazanec](https://github.com/jakubmazanec)) – Npm scripts were fixed; `build` and `test` tasks now clean their output directories beforehand.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Files generated by Carson now contain a warning notice about the fact.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Add ESLint config (previously it was assumed some ESLint config is present in the workspace root).

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – All used development dependencies are now specified in the `package.json`; previously it was assumed
  that tools like ESLint, `ts-node`, etc. are specified in the workspace `package.json`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Use Esbuild instead of SWC for building.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Project structure was modified: build is in directory `build`, and source files are expected to be
  in directory `source`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – TypeScript configs no longer extend workspace TypeScript config with shared compiler options.

- [#74](https://github.com/jakubmazanec/js-tools/pull/74) [`4ae872d`](https://github.com/jakubmazanec/js-tools/commit/4ae872dc8a9e60f0a5ea74c6fdc98491697f65af) ([@renovate](https://github.com/apps/renovate)) – Dependency `del-cli` updated to version `^5.1.0`.

- [#75](https://github.com/jakubmazanec/js-tools/pull/75) [`4a37ce9`](https://github.com/jakubmazanec/js-tools/commit/4a37ce99385dc25bccbd4b8611a21bdd689fdbda) ([@renovate](https://github.com/apps/renovate)) – Dependency `eslint-plugin-vitest` updated to version `^0.3.21`.

- [#80](https://github.com/jakubmazanec/js-tools/pull/80) [`d2b903c`](https://github.com/jakubmazanec/js-tools/commit/d2b903c7ac3c35829b3fc8f329e0569a88939a9a) ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier` updated to version `^3.2.5`.

- [#56](https://github.com/jakubmazanec/js-tools/pull/56) [`219a48f`](https://github.com/jakubmazanec/js-tools/commit/219a48f738e4d58f95fbbb53e66eb3d65458f29d) ([@renovate](https://github.com/apps/renovate)) – Dependency `typescript` updated to version `^5.3.3`.

- [#91](https://github.com/jakubmazanec/js-tools/pull/91) [`6282aae`](https://github.com/jakubmazanec/js-tools/commit/6282aae60186472c75b77cbe6e9c50f8d5f128f7) ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version `^0.20.0`.

- [#81](https://github.com/jakubmazanec/js-tools/pull/81) [`9151367`](https://github.com/jakubmazanec/js-tools/commit/91513674bac7bb66c69c7b37a8f48604935acf5b) ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated to version `^2.4.10`.

- [#96](https://github.com/jakubmazanec/js-tools/pull/96) [`96320be`](https://github.com/jakubmazanec/js-tools/commit/96320be6b65b2ec808fa85136c222e13f4a51bf7) ([@renovate](https://github.com/apps/renovate)) – Dependency `@typescript-eslint/eslint-plugin` updated to version `^6.20.0`. Dependency `@typescript-eslint/parser` updated to version `^6.20.0`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Wording in license file was fixed.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Remove non-working link to the generated documentation; ESLint config has no such documentation.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Source code was reformatted because of updated ESLint and Prettier configs.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61) [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c) ([@jakubmazanec](https://github.com/jakubmazanec)) – Unused support for testing was removed from the template `project/eslint-config`.

## 2.0.3

### Patch Changes

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Prettier.

## 2.0.2

### Patch Changes

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Carson template.

## 2.0.1

### Patch Changes

- [#20](https://github.com/jakubmazanec/js-tools/pull/20)
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Configuration is now being handled by Carson.

## 2.0.0

### Major Changes

- [#15](https://github.com/jakubmazanec/js-tools/pull/15)
  [`33935c6`](https://github.com/jakubmazanec/js-tools/commit/33935c689d4d98bc6a8e633a94457b56bcaa356a)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds new rules to the ESLint config:
  `logical-assignment-operators`, `no-empty-static-block`, `no-new-native-nonconstructor`,
  `jest/max-expects`, `jest/no-restricted-jest-methods`, `jest/prefer-each`,
  `jest/prefer-mock-promise-shorthand`, `promise/no-multiple-resolved`,
  `@typescript-eslint/no-unsafe-declaration-merging`, `@typescript-eslint/sort-type-constituents`,
  `unicorn/no-unnecessary-await`, and `unicorn/switch-case-braces`. Also removes deprecated rules.

### Patch Changes

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing readme and contributing files.

- [#15](https://github.com/jakubmazanec/js-tools/pull/15)
  [`33935c6`](https://github.com/jakubmazanec/js-tools/commit/33935c689d4d98bc6a8e633a94457b56bcaa356a)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates dependencies.

- [#16](https://github.com/jakubmazanec/js-tools/pull/16)
  [`0decb90`](https://github.com/jakubmazanec/js-tools/commit/0decb90bd81fe38cba718c3b1063c2610044fcd2)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes peer dependencies.

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes SWC config.

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes Jest config.

## 1.3.1

### Patch Changes

- [#12](https://github.com/jakubmazanec/js-tools/pull/12)
  [`e1d8155`](https://github.com/jakubmazanec/js-tools/commit/e1d8155b5c8bb992ec2cb63aa2aa6f7217d82c5f)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fix package entry points so they're
  standardized.

## 1.3.0

### Minor Changes

- [#10](https://github.com/jakubmazanec/js-tools/pull/10)
  [`6971df5`](https://github.com/jakubmazanec/js-tools/commit/6971df5982fec2ae48377207c3f9b325b90b8ce7)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates `consistent-type-exports` and
  `consistent-type-import` rules config.

### Patch Changes

- [#8](https://github.com/jakubmazanec/js-tools/pull/8)
  [`efea340`](https://github.com/jakubmazanec/js-tools/commit/efea340387a59334a82c6a663984dfd9514e1008)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing license files.

## 1.2.0

### Minor Changes

- [#5](https://github.com/jakubmazanec/js-tools/pull/5)
  [`5dfd3ff`](https://github.com/jakubmazanec/js-tools/commit/5dfd3ff48d53f879173253258ad4391712e833d2)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Turns off `jest/max-nested-describe` rule.

### Patch Changes

- [#4](https://github.com/jakubmazanec/js-tools/pull/4)
  [`ae5b619`](https://github.com/jakubmazanec/js-tools/commit/ae5b61984d16cb342cca20e96eb3e7faa4ddbe12)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing ESLint plugin.

## 1.1.0

### Minor Changes

- [#2](https://github.com/jakubmazanec/js-tools/pull/2)
  [`1daf3a9`](https://github.com/jakubmazanec/js-tools/commit/1daf3a9008c3a5c41f4b6b826b024c3fafc4dd23)
  Thanks [@jakubmazanec](https://github.com/jakubmazanec)! - Adds
  `eslint-plugin-jest-formatting plugin` to the ESLint config.

### Patch Changes

- [#3](https://github.com/jakubmazanec/js-tools/pull/3)
  [`23feb0c`](https://github.com/jakubmazanec/js-tools/commit/23feb0c1443b8f4e65330ce3a3b1d84d45929f38)
  Thanks [@jakubmazanec](https://github.com/jakubmazanec)! - Fixes wrong filename.

## 1.0.0

### Major Changes

- [#1](https://github.com/jakubmazanec/js-tools/pull/1)
  [`97a413e`](https://github.com/jakubmazanec/js-tools/commit/97a413e3eda06f5575f4609e2e86a774523511f6)
  Thanks [@jakubmazanec](https://github.com/jakubmazanec)! - Creates package with ESLint config for
  TypeScript projects.
