[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: createTempDirectory()

> **createTempDirectory**(`prefix`?): `Promise`\<`string`\>

Defined in:
[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/fs-utils/source/createTempDirectory.ts#L11)

Creates a unique temporary directory in the operating system's default directory for temporary
files. The name of the directory is random, but can be prefixed with a custom string.

## Parameters

### prefix?

`string`

The new directory name prefix.

## Returns

`Promise`\<`string`\>

The new directory name.
