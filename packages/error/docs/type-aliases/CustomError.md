[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type Alias: CustomError\<ErrorCode\>

> **CustomError**\<`ErrorCode`\>: `Error` & `object`

Type representing custom error.

## Type declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.

## Type Parameters

• **ErrorCode** _extends_ `string`

## Defined in

[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/d628f137f5fc7b1bea261e1e59d468d8339ed884/packages/error/source/types/CustomError.ts#L6)
