[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomError\<ErrorCode\>

> **CustomError**\<`ErrorCode`\> = `Error` & `object`

Defined in:
[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/3b02e1b63dedb17307164486fda2e986582d85d7/packages/error/source/types/CustomError.ts#L6)

Type representing custom error.

## Type Parameters

### ErrorCode

`ErrorCode` _extends_ `string`

## Type Declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.
