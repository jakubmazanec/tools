# @jakubmazanec/carson

## 0.1.2

### Patch Changes

- [#24](https://github.com/jakubmazanec/js-tools/pull/24)
  [`7ec84e7`](https://github.com/jakubmazanec/js-tools/commit/7ec84e74d812cbd0e0323a9aef70a5b664329610)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes subtle bugs occurring when Carson is
  searching for or is reading multi-project workspaces.

- [#24](https://github.com/jakubmazanec/js-tools/pull/24)
  [`7ec84e7`](https://github.com/jakubmazanec/js-tools/commit/7ec84e74d812cbd0e0323a9aef70a5b664329610)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Errors occurring during reading of a
  workspace or a project are now displayed to the user and halt Carson.

## 0.1.1

### Patch Changes

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – When creating a new workspace or a project,
  the Carson config is now saved only after a successful template render, so a possible rendering
  failure doesn't create a malformed workspace or project directory.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Prettier.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes how projects are identified in a
  workspace; now the project directory must contain at least either a `package.json` file or a
  `.carson` directory.

## 0.1.0

### Minor Changes

- [#20](https://github.com/jakubmazanec/js-tools/pull/20)
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Creates package with tool for managing
  workspace and project configuration.

### Patch Changes

- Updated dependencies
  [[`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6),
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)]:
  - @jakubmazanec/ts-utils@2.1.0
  - @jakubmazanec/zod-utils@1.0.0
  - @jakubmazanec/fs-utils@0.1.0
  - @jakubmazanec/cli@0.1.0
