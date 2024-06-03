[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type alias: ImpChain\<T\>

> **ImpChain**\<`T`\>: `T` _extends_ `object` ? [`Collection`](../interfaces/Collection.md)\<`any`\>
> & [`Function`](../interfaces/Function.md)\<`any`\> & [`Object`](../interfaces/Object.md)\<`any`\>
> & [`Primitive`](../interfaces/Primitive.md)\<`any`\> & [`String`](../interfaces/String.md) : `T`
> _extends_ `null` \| `undefined` ? `never` : `T` _extends_ `string` \| `null` \| `undefined` ?
> [`String`](../interfaces/String.md) : `T` _extends_ (...`args`) => `any` ?
> [`Function`](../interfaces/Function.md)\<`T`\> : `T` _extends_ [`List`](List.md)\<infer U\> \|
> `null` \| `undefined` ? [`Collection`](../interfaces/Collection.md)\<`U`\> : `T` _extends_
> `object` \| `null` \| `undefined` ? [`Object`](../interfaces/Object.md)\<`T`\> :
> [`Primitive`](../interfaces/Primitive.md)\<`T`\>

## Type parameters

• **T**

## Source

node_modules/@types/lodash/common/common.d.ts:8
