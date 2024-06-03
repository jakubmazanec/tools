[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type alias: ExpChain\<T\>

> **ExpChain**\<`T`\>: `T` _extends_ `object` ?
> [`CollectionChain`](../interfaces/CollectionChain.md)\<`any`\> &
> [`FunctionChain`](../interfaces/FunctionChain.md)\<`any`\> &
> [`ObjectChain`](../interfaces/ObjectChain.md)\<`any`\> &
> [`PrimitiveChain`](../interfaces/PrimitiveChain.md)\<`any`\> &
> [`StringChain`](../interfaces/StringChain.md) : `T` _extends_ `null` \| `undefined` ? `never` :
> `T` _extends_ `string` ? [`StringChain`](../interfaces/StringChain.md) : `T` _extends_ `string` \|
> `null` \| `undefined` ? [`StringNullableChain`](../interfaces/StringNullableChain.md) : `T`
> _extends_ (...`args`) => `any` ? [`FunctionChain`](../interfaces/FunctionChain.md)\<`T`\> : `T`
> _extends_ [`List`](List.md)\<infer U\> \| `null` \| `undefined` ?
> [`CollectionChain`](../interfaces/CollectionChain.md)\<`U`\> : `T` _extends_ `object` \| `null` \|
> `undefined` ? [`ObjectChain`](../interfaces/ObjectChain.md)\<`T`\> :
> [`PrimitiveChain`](../interfaces/PrimitiveChain.md)\<`T`\>

## Type parameters

• **T**

## Source

node_modules/@types/lodash/common/common.d.ts:16
