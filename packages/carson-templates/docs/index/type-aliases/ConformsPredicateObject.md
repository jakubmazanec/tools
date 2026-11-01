[**@jakubmazanec/carson-templates**](../../README.md)

---

# Type Alias: ConformsPredicateObject\<T\>

> **ConformsPredicateObject**\<`T`\> =
> `{ [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any }`

Defined in: node\_modules/@types/lodash/common/util.d.ts:86

## Type Parameters

### T

`T`
