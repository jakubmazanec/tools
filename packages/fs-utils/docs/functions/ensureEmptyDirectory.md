[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: ensureEmptyDirectory()

> **ensureEmptyDirectory**(`targetPath`, `path?`): `Promise`\<`void`>\>

Defined in:
[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/tools/blob/2c78f29cf23098fa3ebc299e5eb40d65134b033e/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)

Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is
created; if the path exists but isn't an ampty directory, error is thrown.

## Parameters

### targetPath

`string`

### path?

[`EnsureEmptyDirectoryOptions`](../type-aliases/EnsureEmptyDirectoryOptions.md) = `{}`

The target path.

## Returns

`Promise`\<`void`\>
