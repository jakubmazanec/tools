[**@jakubmazanec/fs-utils**](../README.md)

---

# Function: ensureEmptyDirectory()

> **ensureEmptyDirectory**(`targetPath`, `path?`): `Promise`\<`void`\>

Defined in:
[ensureEmptyDirectory.ts:20](https://github.com/jakubmazanec/tools/blob/8fd6fdb95311d81f967ac798aa344a0dbb3b9193/packages/fs-utils/source/ensureEmptyDirectory.ts#L20)

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
