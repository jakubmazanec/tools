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

[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/fs-utils/source/createTempDirectory.ts#L11)
