[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type parameters

• **T**

## Source

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/ts-utils/source/types/Writable.ts#L4)
