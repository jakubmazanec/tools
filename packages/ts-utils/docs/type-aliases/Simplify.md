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

[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/ts-utils/source/types/Simplify.ts#L6)
