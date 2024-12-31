[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorOptions

> **CustomErrorOptions**: `object`

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

## Defined in

[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/tools/blob/92d3fc1374d1ad6d45198d05d061e0f856a89434/packages/error/source/types/CustomErrorOptions.ts#L4)
