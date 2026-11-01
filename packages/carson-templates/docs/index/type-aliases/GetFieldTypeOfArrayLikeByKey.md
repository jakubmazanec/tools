[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: GetFieldTypeOfArrayLikeByKey\<T, K\>

> **GetFieldTypeOfArrayLikeByKey**\<`T`, `K`\> = `K` _extends_ `number` ? `T`\[`K`\] : `K` _extends_
> `` `${infer N extends number}` `` ? `T`\[`N`\] : `K` _extends_ keyof `T` ? `T`\[`K`\] :
> `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1024

## Type Parameters

### T

`T` _extends_ `unknown`[]

### K

`K`
