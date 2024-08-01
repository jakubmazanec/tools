[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type alias: CustomError\<ErrorCode\>

> **CustomError**\<`ErrorCode`\>: `Error` & `object`

Type representing custom error.

## Type declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.

## Type parameters

• **ErrorCode** _extends_ `string`

## Source

[types/CustomError.ts:6](https://github.com/jakubmazanec/js-tools/blob/0a7ca643260718f11723fa4df4f144d2d5a8a885/packages/error/source/types/CustomError.ts#L6)
