[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Writable\<T\>

> **Writable**\<`T`\> = `{ -readonly [K in keyof T]: T[K] }`

Defined in:
[packages/ts-utils/source/types/Writable.ts:5](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/ts-utils/source/types/Writable.ts#L5)

Create a new type that removes `readonly` from object types's keys. Inverse of Readonly\<T\>.

## Type Parameters

### T

`T`
