[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type alias: CustomErrorOptions

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

## Source

[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/error/source/types/CustomErrorOptions.ts#L4)
