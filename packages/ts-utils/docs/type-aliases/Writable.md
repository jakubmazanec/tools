[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:4](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/ts-utils/source/types/Writable.ts#L4)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
