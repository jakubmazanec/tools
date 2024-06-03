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

[createTempDirectory.ts:11](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/fs-utils/source/createTempDirectory.ts#L11)
