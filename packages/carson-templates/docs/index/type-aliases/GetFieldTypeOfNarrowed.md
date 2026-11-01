[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: GetFieldTypeOfNarrowed\<T, X, XT\>

> **GetFieldTypeOfNarrowed**\<`T`, `X`, `XT`\> = `XT` _extends_ `"Key"` ?
> [`GetFieldTypeOfNarrowedByKey`](GetFieldTypeOfNarrowedByKey.md)\<`T`, `X`\> : `XT` _extends_
> `"DotPath"` ? [`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`, `X`\>
> : `X` _extends_ `` `${infer L}['${infer K}']${infer R}` `` ?
> [`GetFieldTypeOfNarrowedByLKR`](GetFieldTypeOfNarrowedByLKR.md)\<`T`, `L`, `K`, `R`\> : `X`
> _extends_ `` `${infer L}["${infer K}"]${infer R}` `` ?
> [`GetFieldTypeOfNarrowedByLKR`](GetFieldTypeOfNarrowedByLKR.md)\<`T`, `L`, `K`, `R`\> : `X`
> _extends_ `` `${infer L}[${infer K}]${infer R}` `` ?
> [`GetFieldTypeOfNarrowedByLKR`](GetFieldTypeOfNarrowedByLKR.md)\<`T`, `L`, `K`, `R`\> :
> [`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`, `X`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1078

Internal. Assumes T has been narrowed.

## Type Parameters

### T

`T`

### X

`X`

### XT

`XT` _extends_ `"DotPath"` \| `"Key"` \| `"Path"`
