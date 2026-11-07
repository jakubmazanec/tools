[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomError\<ErrorCode\>

> **CustomError**\<`ErrorCode`\> = `Error` & `object`

Defined in:
[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/36b3404d1b71114f1d5127b86dcfe4cb029f111f/packages/error/source/types/CustomError.ts#L6)

Type representing custom error.

## Type Parameters

### ErrorCode

`ErrorCode` _extends_ `string`

## Type Declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.
