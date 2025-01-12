[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: ensureEmptyDirectory()

> **ensureEmptyDirectory**(`targetPath`, `__namedParameters`): `Promise`\<`void`\>

Defined in:
[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)

Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is
created; if the path exists but isn't an ampty directory, error is thrown.

## Parameters

### targetPath

`string`

### \_\_namedParameters

[`EnsureEmptyDirectoryOptions`](../type-aliases/EnsureEmptyDirectoryOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
