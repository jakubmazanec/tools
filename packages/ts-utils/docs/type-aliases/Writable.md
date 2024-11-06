[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type Parameters

• **T**

## Defined in

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4/packages/ts-utils/source/types/Writable.ts#L4)
