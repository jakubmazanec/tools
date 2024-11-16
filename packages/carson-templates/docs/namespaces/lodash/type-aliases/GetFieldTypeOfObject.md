[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfObject\<T, X, XT\>

> **GetFieldTypeOfObject**\<`T`, `X`, `XT`\>: `Extract`\<`T`, `unknown`[]\> _extends_ `never` ?
> [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`T`, `X`, `XT`\> :
> [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`Exclude`\<`T`, `unknown`[]\>, `X`, `XT`\>
> \| [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`Extract`\<`T`, `unknown`[]\>, `X`,
> `XT`\>

Internal. Assumes T has been narrowed to an object type.

## Type Parameters

• **T**

• **X**

• **XT** _extends_ `"DotPath"` \| `"Key"` \| `"Path"`

## Defined in

node_modules/@types/lodash/common/object.d.ts:1090
