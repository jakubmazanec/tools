# @jakubmazanec/cli

## 0.2.0

### Minor Changes

- [#26](https://github.com/jakubmazanec/js-tools/pull/26)
  [`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds new option `checkForUpdate` when
  creating new program that automatically checks if there's a newer version of the package with the
  program's name. Notice is showed at the start of the program if the newer version is found.

- [#26](https://github.com/jakubmazanec/js-tools/pull/26)
  [`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds new option `displayName` when creating
  new program that is used for an alternative or better formatted version of the program's `name`.

- [#26](https://github.com/jakubmazanec/js-tools/pull/26)
  [`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – BREAKING: New program is created via static
  async method `Program.create()`; using constructor `new Program()` is no longer allowed.

## 0.1.3

### Patch Changes

- [#24](https://github.com/jakubmazanec/js-tools/pull/24)
  [`7ec84e7`](https://github.com/jakubmazanec/js-tools/commit/7ec84e74d812cbd0e0323a9aef70a5b664329610)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes issues with `Program` not exiting with
  exit code 1 after an error.

## 0.1.2

### Patch Changes

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect SWC config.

## 0.1.1

### Patch Changes

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Carson template.

## 0.1.0

### Minor Changes

- [#20](https://github.com/jakubmazanec/js-tools/pull/20)
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Creates package with TypeScript-first library
  for building CLIs.

### Patch Changes

- Updated dependencies
  [[`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)]:
  - @jakubmazanec/ts-utils@2.1.0
  - @jakubmazanec/zod-utils@1.0.0
