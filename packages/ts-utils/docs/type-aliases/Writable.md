[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type parameters

• **T**

## Source

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/ts-utils/source/types/Writable.ts#L4)
