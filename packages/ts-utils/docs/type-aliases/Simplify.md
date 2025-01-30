[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Simplify\<T\>

> **Simplify**\<`T`\>: `{ [KeyType in keyof T]: T[KeyType] }`

Defined in:
[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/ts-utils/source/types/Simplify.ts#L6)

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type Parameters

• **T**

Base for the new type.
