[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

• **T**

## Defined in

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/077fa4993ebe623b1c463499cc41912353ae6eb1/packages/ts-utils/source/types/Writable.ts#L4)
