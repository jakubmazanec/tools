[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:5](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/ts-utils/source/types/Writable.ts#L5)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
