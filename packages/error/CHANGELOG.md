# @jakubmazanec/error

## 2.0.0

### Major Changes

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Changes license from MIT to GNU Lesser
  General Public License v3.

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds new function `createCustomErrorWithData`
  for creating errors without the optional data. The function `createCustomError` now only creates
  custom error class that doesn't have `data` property. This is to prevent situations when `data`
  property has wrong type. Also, the type for the error data can be now defined using
  [Zod](https://github.com/colinhacks/zod).

### Patch Changes

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing readme and contributing files.

- [#15](https://github.com/jakubmazanec/js-tools/pull/15)
  [`33935c6`](https://github.com/jakubmazanec/js-tools/commit/33935c689d4d98bc6a8e633a94457b56bcaa356a)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates dependencies.

- [#18](https://github.com/jakubmazanec/js-tools/pull/18)
  [`b6a7554`](https://github.com/jakubmazanec/js-tools/commit/b6a75542dcec72c667ab7a0ae5354135fdf111b1)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes TypeDoc config.

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes SWC config.

- [#17](https://github.com/jakubmazanec/js-tools/pull/17)
  [`7998284`](https://github.com/jakubmazanec/js-tools/commit/7998284e8f736dec85db028cf1a130c244e315b5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes Jest config.

## 1.0.0

### Major Changes

- [#11](https://github.com/jakubmazanec/js-tools/pull/11)
  [`2843995`](https://github.com/jakubmazanec/js-tools/commit/284399579e5400a67b3af307f0d67528263737ec)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Creates package with collection of utilities
  for creating and handling errors.
