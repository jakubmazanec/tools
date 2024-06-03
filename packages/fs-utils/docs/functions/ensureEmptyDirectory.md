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

[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)
