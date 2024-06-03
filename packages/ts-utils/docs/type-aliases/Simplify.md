[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Simplify\<T\>

> **Simplify**\<`T`\>: `{ [KeyType in keyof T]: T[KeyType] }`

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type parameters

• **T**

Base for the new type.

## Source

[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/ts-utils/source/types/Simplify.ts#L6)
