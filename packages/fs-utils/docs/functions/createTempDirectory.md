[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: createTempDirectory()

> **createTempDirectory**(`prefix?`): `Promise`\<`string`\>

Defined in:
[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/4caca122f7df724dd38b9145434835e55c95c009/packages/fs-utils/source/createTempDirectory.ts#L11)

Creates a unique temporary directory in the operating system's default directory for temporary
files. The name of the directory is random, but can be prefixed with a custom string.

## Parameters

### prefix?

`string`

The new directory name prefix.

## Returns

`Promise`\<`string`\>

The new directory name.
