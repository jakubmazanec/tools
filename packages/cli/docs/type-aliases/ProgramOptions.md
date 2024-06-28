[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type alias: ProgramOptions

> **ProgramOptions**: `object`

[Program constructor](../classes/Program.md#constructors) options parameter.

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

### latestVersion?

> `optional` **latestVersion**: `string`

Program latest version.

### name?

> `optional` **name**: `string`

Program name.

### version?

> `optional` **version**: `string`

Program version.

## Source

[cli/source/program/ProgramOptions.ts:7](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/cli/source/program/ProgramOptions.ts#L7)
