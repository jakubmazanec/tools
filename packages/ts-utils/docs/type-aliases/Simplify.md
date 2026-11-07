[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Simplify\<T\>

> **Simplify**\<`T`\> = `{ [KeyType in keyof T]: T[KeyType] }`

Defined in:
[packages/ts-utils/source/types/Simplify.ts:6](https://github.com/jakubmazanec/tools/blob/8324896dad080c1b57affe1d8521d8205a016467/packages/ts-utils/source/types/Simplify.ts#L6)

Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing
better hints from the language server.

## Type Parameters

### T

`T`

Base for the new type.
