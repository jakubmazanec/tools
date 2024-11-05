[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type parameters

• **T**

## Source

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ts-utils/source/types/Writable.ts#L4)
