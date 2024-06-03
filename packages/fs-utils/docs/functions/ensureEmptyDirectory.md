[**@jakubmazanec/fs-utils**](../README.md) • **Docs**

---

# Function: ensureEmptyDirectory()

> **ensureEmptyDirectory**(`targetPath`, `__namedParameters`): `Promise`\<`void`\>

Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is
created; if the path exists but isn't an ampty directory, error is thrown.

## Parameters

• **targetPath**: `string`

• **\_\_namedParameters**:
[`EnsureEmptyDirectoryOptions`](../type-aliases/EnsureEmptyDirectoryOptions.md)= `{}`

## Returns

`Promise`\<`void`\>

## Source

[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/js-tools/blob/7be96c9bc335915647cfe729050b17fe2580309a/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)
