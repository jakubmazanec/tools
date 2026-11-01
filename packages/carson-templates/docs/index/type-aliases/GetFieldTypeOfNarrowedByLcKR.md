[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: GetFieldTypeOfNarrowedByLcKR\<T, Lc, K, R\>

> **GetFieldTypeOfNarrowedByLcKR**\<`T`, `Lc`, `K`, `R`\> = `""` _extends_ `R` ?
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\> : `R` _extends_ `` `.${infer Rc}` `` ?
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\>, `Rc`\> :
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\>, `R`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1053

Internal. This is a piece of GetFieldTypeOfNarrowedByLKR logic, assuming that Lc isn't to be
ignored, and does not end with dot.

## Type Parameters

### T

`T`

### Lc

`Lc`

### K

`K`

### R

`R`
