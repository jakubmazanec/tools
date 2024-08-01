[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type alias: ProgramCreateOptions

> **ProgramCreateOptions**: `object`

[Program.create](../classes/Program.md#create) options parameter.

## Type declaration

### ErrorBoundaryFallbackComponent?

> `optional` **ErrorBoundaryFallbackComponent**: `ComponentType`\<`FallbackProps`\>

Custom error boundary fallback component

### bin?

> `optional` **bin**: `string`

Program executable name.

### checkForUpdate?

> `optional` **checkForUpdate**: `boolean`

Perform check whether a newer version of the program is available.

### description?

> `optional` **description**: `string`

Program description.

### displayName?

> `optional` **displayName**: `string`

More readable program name.

### name?

> `optional` **name**: `string`

Program name.

### version?

> `optional` **version**: `string`

Program version.

## Source

[cli/source/program/ProgramCreateOptions.ts:7](https://github.com/jakubmazanec/js-tools/blob/0a7ca643260718f11723fa4df4f144d2d5a8a885/packages/cli/source/program/ProgramCreateOptions.ts#L7)
