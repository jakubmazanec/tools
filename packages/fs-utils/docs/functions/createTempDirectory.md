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

[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/e8e1a063ee4a3ba5413ab6c19f760853c220a8ce/packages/fs-utils/source/createTempDirectory.ts#L11)
