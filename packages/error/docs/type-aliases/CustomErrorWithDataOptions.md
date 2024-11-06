[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type Alias: CustomErrorWithDataOptions\<ErrorData\>

> **CustomErrorWithDataOptions**\<`ErrorData`\>: `object`

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

## Defined in

[types/CustomErrorWithDataOptions.ts:4](https://github.com/jakubmazanec/tools/blob/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4/packages/error/source/types/CustomErrorWithDataOptions.ts#L4)
