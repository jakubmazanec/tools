[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorWithDataOptions\<ErrorData\>

> **CustomErrorWithDataOptions**\<`ErrorData`\>: `object`

Defined in:
[types/CustomErrorWithDataOptions.ts:4](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/error/source/types/CustomErrorWithDataOptions.ts#L4)

Type representing options object used when instantianting class returned from
[createCustomErrorWithData](../functions/createCustomErrorWithData.md).

## Type Parameters

• **ErrorData**

## Type declaration

### cause?

> `optional` **cause**: `unknown`

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

### data?

> `optional` **data**: `ErrorData`

Custom data that will be attached to the error instance.

### messageParameters?

> `optional` **messageParameters**: `unknown`[]

Array of values that are used as parameters to generate the error message.
