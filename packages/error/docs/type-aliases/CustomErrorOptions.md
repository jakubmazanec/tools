[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorOptions

> **CustomErrorOptions**: `object`

Defined in:
[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/error/source/types/CustomErrorOptions.ts#L4)

Type representing options object used when instantianting class returned from
[createCustomError](../functions/createCustomError.md).

## Type declaration

### cause?

> `optional` **cause**: `unknown`

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

### messageParameters?

> `optional` **messageParameters**: `unknown`[]

Array of values that are used as parameters to generate the error message.
