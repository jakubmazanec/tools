[**@jakubmazanec/fs-utils**](../README.md) • **Docs**

---

# Function: ensureEmptyDirectory()

> **ensureEmptyDirectory**(`targetPath`, `__namedParameters`): `Promise`\<`void`\>

Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is
created; if the path exists but isn't an ampty directory, error is thrown.

## Parameters

• **targetPath**: `string`

• **\_\_namedParameters**:
[`EnsureEmptyDirectoryOptions`](../type-aliases/EnsureEmptyDirectoryOptions.md) = `{}`

## Returns

`Promise`\<`void`\>

## Defined in

[ensureEmptyDirectory.ts:19](https://github.com/jakubmazanec/tools/blob/d628f137f5fc7b1bea261e1e59d468d8339ed884/packages/fs-utils/source/ensureEmptyDirectory.ts#L19)
