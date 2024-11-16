[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfNarrowedByKey\<T, K\>

> **GetFieldTypeOfNarrowedByKey**\<`T`, `K`\>: `T` _extends_ `unknown`[] ?
> [`GetFieldTypeOfArrayLikeByKey`](GetFieldTypeOfArrayLikeByKey.md)\<`T`, `K`\> : `T` _extends_
> `string` ? [`GetFieldTypeOfStringByKey`](GetFieldTypeOfStringByKey.md)\<`T`, `K`\> : `K` _extends_
> keyof `T` ? `T`\[`K`\] : `K` _extends_ `number` ?
> \`$\{K\}\` *extends* keyof `T` ? `T`\[\`$\{K\}\`\] : `undefined` : `K` _extends_ \`$\{infer N
> extends number\}\` ? `N` _extends_ keyof `T` ? `T`\[`N`\] : `undefined` : `undefined`

## Type Parameters

• **T**

• **K**

## Defined in

node_modules/@types/lodash/common/object.d.ts:1035
