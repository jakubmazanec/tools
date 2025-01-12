[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomError\<ErrorCode\>

> **CustomError**\<`ErrorCode`\>: `Error` & `object`

Defined in:
[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/error/source/types/CustomError.ts#L6)

Type representing custom error.

## Type declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.

## Type Parameters

• **ErrorCode** _extends_ `string`
