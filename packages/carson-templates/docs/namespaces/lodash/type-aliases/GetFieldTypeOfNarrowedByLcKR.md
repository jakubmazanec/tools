[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfNarrowedByLcKR\<T, Lc, K, R\>

> **GetFieldTypeOfNarrowedByLcKR**\<`T`, `Lc`, `K`, `R`\>: `""` _extends_ `R` ?
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\> : `R` _extends_ \`.$\{infer Rc\}\` ?
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\>, `Rc`\> :
> [`GetFieldType`](GetFieldType.md)\<[`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByDotPath`](GetFieldTypeOfNarrowedByDotPath.md)\<`T`,
> `Lc`\>, `K`, `"Key"`\>, `R`\>

Internal. This is a piece of GetFieldTypeOfNarrowedByLKR logic, assuming that Lc isn't to be
ignored, and does not end with dot.

## Type Parameters

• **T**

• **Lc**

• **K**

• **R**

## Defined in

node_modules/@types/lodash/common/object.d.ts:1053
