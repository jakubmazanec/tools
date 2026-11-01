[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: GetFieldTypeOfObject\<T, X, XT\>

> **GetFieldTypeOfObject**\<`T`, `X`, `XT`\> = `Extract`\<`T`, `unknown`[]\> _extends_ `never` ?
> [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`T`, `X`, `XT`\> :
> [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`Exclude`\<`T`, `unknown`[]\>, `X`, `XT`\>
> \| [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`Extract`\<`T`, `unknown`[]\>, `X`,
> `XT`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1090

Internal. Assumes T has been narrowed to an object type.

## Type Parameters

### T

`T`

### X

`X`

### XT

`XT` _extends_ `"DotPath"` \| `"Key"` \| `"Path"`
