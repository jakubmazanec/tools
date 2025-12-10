[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorWithDataOptions\<ErrorData\>

> **CustomErrorWithDataOptions**\<`ErrorData`\> = `object`

Defined in:
[types/CustomErrorWithDataOptions.ts:4](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/error/source/types/CustomErrorWithDataOptions.ts#L4)

Type representing options object used when instantianting class returned from
[createCustomErrorWithData](../functions/createCustomErrorWithData.md).

## Type Parameters

### ErrorData

`ErrorData`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in:
[types/CustomErrorWithDataOptions.ts:9](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/error/source/types/CustomErrorWithDataOptions.ts#L9)

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

---

### data?

> `optional` **data**: `ErrorData`

Defined in:
[types/CustomErrorWithDataOptions.ts:12](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/error/source/types/CustomErrorWithDataOptions.ts#L12)

Custom data that will be attached to the error instance.

---

### messageParameters?

> `optional` **messageParameters**: `unknown`[]

Defined in:
[types/CustomErrorWithDataOptions.ts:6](https://github.com/jakubmazanec/tools/blob/c44e406c009b539e4c3453159f89e12e639a9c18/packages/error/source/types/CustomErrorWithDataOptions.ts#L6)

Array of values that are used as parameters to generate the error message.
