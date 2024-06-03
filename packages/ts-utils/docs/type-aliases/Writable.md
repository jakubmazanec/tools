[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type parameters

• **T**

## Source

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/ts-utils/source/types/Writable.ts#L4)
