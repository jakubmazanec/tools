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

[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/error/source/types/CustomError.ts#L6)
