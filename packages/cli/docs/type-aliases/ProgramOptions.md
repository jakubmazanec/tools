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

[cli/source/program/ProgramOptions.ts:7](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/ProgramOptions.ts#L7)
