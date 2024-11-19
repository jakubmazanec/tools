[**@jakubmazanec/fs-utils**](../README.md) • **Docs**

---

# Function: createTempDirectory()

> **createTempDirectory**(`prefix`?): `Promise`\<`string`\>

Creates a unique temporary directory in the operating system's default directory for temporary
files. The name of the directory is random, but can be prefixed with a custom string.

## Parameters

• **prefix?**: `string`

The new directory name prefix.

## Returns

`Promise`\<`string`\>

The new directory name.

## Defined in

[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/fs-utils/source/createTempDirectory.ts#L11)
