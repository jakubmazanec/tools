[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Type Alias: GetFieldTypeOfArrayLikeByKey\<T, K\>

> **GetFieldTypeOfArrayLikeByKey**\<`T`, `K`\>: `K` _extends_ `number` ? `T`\[`K`\] : `K` _extends_
> \`$\{infer N extends number\}\` ? `T`\[`N`\] : `K` _extends_ keyof `T` ? `T`\[`K`\] : `undefined`

## Type Parameters

• **T** _extends_ `unknown`[]

• **K**

## Defined in

node_modules/@types/lodash/common/object.d.ts:1024
