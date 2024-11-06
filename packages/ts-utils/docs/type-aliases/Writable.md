[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type Parameters

• **T**

## Defined in

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/ts-utils/source/types/Writable.ts#L4)
