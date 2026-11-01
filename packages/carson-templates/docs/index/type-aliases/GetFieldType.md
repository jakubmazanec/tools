[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: GetFieldType\<T, X, XT\>

> **GetFieldType**\<`T`, `X`, `XT`\> = `Extract`\<`T`, `object`\> _extends_ `never` ?
> [`GetFieldTypeOfPrimitive`](GetFieldTypeOfPrimitive.md)\<`T`, `X`, `XT`\> :
> [`GetFieldTypeOfPrimitive`](GetFieldTypeOfPrimitive.md)\<`Exclude`\<`T`, `object`\>, `X`, `XT`\>
> \| [`GetFieldTypeOfObject`](GetFieldTypeOfObject.md)\<`Extract`\<`T`, `object`\>, `X`, `XT`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1111

Deduces the type of value at the path P of type T, so that _.get<T, P>(t: T, p: P): GetFieldType<T,
P>. XT specifies the exact meaning of X:

- 'Path' (default) - X is a path type to be fully parsed;
- 'DotPath - X is a dot-delimitered path, without square (indexing) brackets;
- 'Key' - X is a simple key, and needs no parsing.

## Type Parameters

### T

`T`

### X

`X`

### XT

`XT` _extends_ `"DotPath"` \| `"Key"` \| `"Path"` = `"Path"`
