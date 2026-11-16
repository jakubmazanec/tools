[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorWithDataOptions\<ErrorData\>

> **CustomErrorWithDataOptions**\<`ErrorData`\> = `object`

Defined in:
[types/CustomErrorWithDataOptions.ts:5](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/error/source/types/CustomErrorWithDataOptions.ts#L5)

Type representing options object used when instantianting class returned from
[createCustomErrorWithData](../functions/createCustomErrorWithData.md).

## Type Parameters

### ErrorData

`ErrorData`

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in:
[types/CustomErrorWithDataOptions.ts:13](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/error/source/types/CustomErrorWithDataOptions.ts#L13)

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

---

### data?

> `optional` **data?**: `ErrorData`

Defined in:
[types/CustomErrorWithDataOptions.ts:16](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/error/source/types/CustomErrorWithDataOptions.ts#L16)

Custom data that will be attached to the error instance.

---

### messageParameters?

> `optional` **messageParameters?**: `unknown`[]

Defined in:
[types/CustomErrorWithDataOptions.ts:7](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/error/source/types/CustomErrorWithDataOptions.ts#L7)

Array of values that are used as parameters to generate the error message.
