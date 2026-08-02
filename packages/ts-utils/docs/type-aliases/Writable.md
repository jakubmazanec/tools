[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/0018407a6ea0364965f5bcbc4da5bac8342dfad4/packages/ts-utils/source/types/Writable.ts#L4)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
