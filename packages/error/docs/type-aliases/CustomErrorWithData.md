[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorWithData\<ErrorCode, ErrorData\>

> **CustomErrorWithData**\<`ErrorCode`, `ErrorData`\>: `Error` & `object`

Defined in:
[types/CustomErrorWithData.ts:6](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/error/source/types/CustomErrorWithData.ts#L6)

Type representing custom error that can have an arbitrary data attached.

## Type declaration

### code

> **code**: `ErrorCode` \| _typeof_ [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)

String that is used to quickly determine the nature of the error and why it could have occurred.

### data?

> `optional` **data**: `ErrorData`

Data related to the error that can be used during the error handling process to gain more
information or take an action.

## Type Parameters

• **ErrorCode** _extends_ `string`

• **ErrorData**
