[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: DistributedExpChain\<T, TNullish\>

> **DistributedExpChain**\<`T`, `TNullish`\> = `T` _extends_ `object` ?
> [`CollectionChain`](../interfaces/CollectionChain.md)\<`any`\> &
> [`FunctionChain`](../interfaces/FunctionChain.md)\<`any`\> &
> [`ObjectChain`](../interfaces/ObjectChain.md)\<`any`\> &
> [`PrimitiveChain`](../interfaces/PrimitiveChain.md)\<`any`\> &
> [`StringChain`](../interfaces/StringChain.md) : `T` _extends_ `null` \| `undefined` ? `never` :
> `T` _extends_ `string` ? \[`TNullish`\] _extends_ \[`never`\] ?
> [`StringChain`](../interfaces/StringChain.md)\<`T`\> :
> [`StringNullableChain`](../interfaces/StringNullableChain.md) : `T` _extends_ (...`args`) => `any`
> ? \[`TNullish`\] _extends_ \[`never`\] ? [`FunctionChain`](../interfaces/FunctionChain.md)\<`T`\>
> : [`ObjectChain`](../interfaces/ObjectChain.md)\<`T` \| `TNullish`\> : `T` _extends_
> [`List`](List.md)\<infer U\> ? [`CollectionChain`](../interfaces/CollectionChain.md)\<`U`\> : `T`
> _extends_ `object` ? [`ObjectChain`](../interfaces/ObjectChain.md)\<`T` \| `TNullish`\> :
> [`PrimitiveChain`](../interfaces/PrimitiveChain.md)\<`T` \| `TNullish`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:21

## Type Parameters

### T

`T`

### TNullish

`TNullish`
