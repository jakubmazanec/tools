[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: createTempDirectory()

> **createTempDirectory**(`prefix`?): `Promise`\<`string`\>

Creates a unique temporary directory in the operating system's default directory for temporary
files. The name of the directory is random, but can be prefixed with a custom string.

## Parameters

### prefix?

`string`

The new directory name prefix.

## Returns

`Promise`\<`string`\>

The new directory name.

## Defined in

[createTempDirectory.ts:11](https://github.com/jakubmazanec/tools/blob/92d3fc1374d1ad6d45198d05d061e0f856a89434/packages/fs-utils/source/createTempDirectory.ts#L11)
