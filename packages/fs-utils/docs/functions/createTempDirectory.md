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

## Source

[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/fs-utils/source/createTempDirectory.ts#L11)
