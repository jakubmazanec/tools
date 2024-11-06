[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: Simplify\<T\>

> **Simplify**\<`T`\>: `{ [KeyType in keyof T]: T[KeyType] }`

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type Parameters

• **T**

Base for the new type.

## Defined in

[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/ts-utils/source/types/Simplify.ts#L6)
