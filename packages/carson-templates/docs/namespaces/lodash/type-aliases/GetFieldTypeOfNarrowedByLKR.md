[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfNarrowedByLKR\<T, L, K, R\>

> **GetFieldTypeOfNarrowedByLKR**\<`T`, `L`, `K`, `R`\>: `""` _extends_ `L` ? `""` _extends_ `R` ?
> [`GetFieldTypeOfNarrowedByKey`](GetFieldTypeOfNarrowedByKey.md)\<`T`, `K`\> : `R` _extends_
> \`.$\{infer Rc\}\` ? [`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByKey`](GetFieldTypeOfNarrowedByKey.md)\<`T`, `K`\>, `Rc`\> : [`GetFieldType`](GetFieldType.md)\<[`GetFieldTypeOfNarrowedByKey`](GetFieldTypeOfNarrowedByKey.md)\<`T`, `K`\>, `R`\> : `L` *extends* \`$\{infer
> Lc\}.\` ? [`GetFieldTypeOfNarrowedByLcKR`](GetFieldTypeOfNarrowedByLcKR.md)\<`T`, `Lc`, `K`, `R`\>
> : [`GetFieldTypeOfNarrowedByLcKR`](GetFieldTypeOfNarrowedByLcKR.md)\<`T`, `L`, `K`, `R`\>

Internal. Assumes T has been narrowed; L is a dot-delimited path, and should be ignored if an empty
string; K is a key name; and R is a dot-delimetered path, to be ignored if an empty string. Also if
L has a tail dot, or R has a front dot, these dots should be discarded, however when L or R is just
a dot, they should be interpreted as empty key name (rather than ignored).

## Type Parameters

• **T**

• **L**

• **K**

• **R**

## Defined in

node_modules/@types/lodash/common/object.d.ts:1066
