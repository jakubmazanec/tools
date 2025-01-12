[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Simplify\<T\>

> **Simplify**\<`T`\>: `{ [KeyType in keyof T]: T[KeyType] }`

Defined in:
[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/tools/blob/f779e75b9ef98389e12e52575295bd1ef364daca/packages/ts-utils/source/types/Simplify.ts#L6)

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type Parameters

• **T**

Base for the new type.
