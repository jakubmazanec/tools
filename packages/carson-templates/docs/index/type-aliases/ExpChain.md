[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: ExpChain\<T\>

> **ExpChain**\<`T`\> = \[`T`\] _extends_ \[`never`\] ? `never` : \[`Exclude`\<`T`, `null` \|
> `undefined`\>\] _extends_ \[`never`\] ? [`PrimitiveChain`](../interfaces/PrimitiveChain.md)\<`T`\>
> : [`DistributedExpChain`](DistributedExpChain.md)\<`T`, `0` _extends_ `1` & `T` ? `never` :
> `Extract`\<`T`, `null` \| `undefined`\>\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:17

## Type Parameters

### T

`T`
