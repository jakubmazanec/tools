[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type alias: CustomErrorWithDataOptions\<ErrorData\>

> **CustomErrorWithDataOptions**\<`ErrorData`\>: `object`

Type representing options object used when instantianting class returned from
[createCustomErrorWithData](../functions/createCustomErrorWithData.md).

## Type parameters

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

## Source

[types/CustomErrorWithDataOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/error/source/types/CustomErrorWithDataOptions.ts#L4)
