[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\>: `{ -readonly [K in keyof T]: T[K] }`

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly<T>.

## Type Parameters

• **T**

## Defined in

[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/29163046acd1da0224b08fd05ca40f385e9ab4e5/packages/ts-utils/source/types/Writable.ts#L4)
