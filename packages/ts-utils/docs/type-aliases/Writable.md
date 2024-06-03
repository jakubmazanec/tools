[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type parameters

• **T**

## Source

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/ts-utils/source/types/Writable.ts#L4)
