[**@jakubmazanec/error**](../README.md) • **Docs**

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

[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/tools/blob/39892a8d22e72fc5aa2b2aedf9320ac8bb26fd5d/packages/error/source/types/CustomErrorOptions.ts#L4)
