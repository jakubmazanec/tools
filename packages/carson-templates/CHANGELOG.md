# @jakubmazanec/carson-templates

## 1.0.0

### Patch Changes

- Updated dependencies
  [[`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448),
  [`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448)]:
  - @jakubmazanec/carson@0.2.0

## 0.2.0

### Minor Changes

- [#25](https://github.com/jakubmazanec/js-tools/pull/25)
  [`07ff4d8`](https://github.com/jakubmazanec/js-tools/commit/07ff4d8977ad0416322558031e701e226b902301)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds smoke tests: each Carson template is
  used for creating a new workspace with new projects, which are then built.

### Patch Changes

- [`d5b3e0f`](https://github.com/jakubmazanec/js-tools/commit/d5b3e0fd94ee4d87e5c06a633b5db123b9d80866)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes definition of `develop` task in
  Turborepo config; the task now has dependency `^build`.

## 0.1.3

### Patch Changes

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes generated SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates generated Prettier config.

## 0.1.2

### Patch Changes

- [#22](https://github.com/jakubmazanec/js-tools/pull/22)
  [`6c3a1f2`](https://github.com/jakubmazanec/js-tools/commit/6c3a1f2decb43f6b19b71d65f536ea59dab289a9)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` now generates
  `@jakubmazanec/carson` version based on what version this template package depends on.

- [#22](https://github.com/jakubmazanec/js-tools/pull/22)
  [`6c3a1f2`](https://github.com/jakubmazanec/js-tools/commit/6c3a1f2decb43f6b19b71d65f536ea59dab289a9)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` no longer adds
  `@jakubmazanec/carson` or `@jakubmazanec/carson-templates` to the workspace `package.json` if the
  workspace already contains them as a project.

## 0.1.1

### Patch Changes

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Carson template.

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` now generates correct
  version of this template package.

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes syntax errors in templates.

## 0.1.0

### Minor Changes

- [#20](https://github.com/jakubmazanec/js-tools/pull/20)
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Creates package with collection of Carson
  templates.

### Patch Changes

- Updated dependencies
  [[`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)]:
  - @jakubmazanec/carson@0.1.0
