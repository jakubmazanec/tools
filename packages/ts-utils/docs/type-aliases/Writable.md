[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/ts-utils/source/types/Writable.ts#L4)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
