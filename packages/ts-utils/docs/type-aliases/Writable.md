[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`> \> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/2c78f29cf23098fa3ebc299e5eb40d65134b033e/packages/ts-utils/source/types/Writable.ts#L4)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
