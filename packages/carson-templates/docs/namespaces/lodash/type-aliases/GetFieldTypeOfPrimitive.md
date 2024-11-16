[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfPrimitive\<T, X, XT\>

> **GetFieldTypeOfPrimitive**\<`T`, `X`, `XT`\>: `Extract`\<`T`, `string`\> _extends_ `never` ? `T`
> _extends_ `never` ? `never` : `undefined` : `Exclude`\<`T`, `string`\> _extends_ `never` ? `never`
> : `undefined` \| [`GetFieldTypeOfNarrowed`](GetFieldTypeOfNarrowed.md)\<`Extract`\<`T`,
> `string`\>, `X`, `XT`\>

Internal. Assumes T has been narrowed to a primitive type.

## Type Parameters

• **T**

• **X**

• **XT** _extends_ `"DotPath"` \| `"Key"` \| `"Path"`

## Defined in

node_modules/@types/lodash/common/object.d.ts:1097
