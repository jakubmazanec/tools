[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Simplify\<T\>

> **Simplify**\<`T`\> = `{ [KeyType in keyof T]: T[KeyType] }`

Defined in:
[packages/ts-utils/source/types/Simplify.ts:7](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/ts-utils/source/types/Simplify.ts#L7)

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type Parameters

### T

`T`

Base for the new type.
