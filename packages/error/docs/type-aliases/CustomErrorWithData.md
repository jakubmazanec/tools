[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type Alias: CustomErrorWithData\<ErrorCode, ErrorData\>

> **CustomErrorWithData**\<`ErrorCode`, `ErrorData`\>: `Error` & `object`

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

## Defined in

[types/CustomErrorWithData.ts:6](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/error/source/types/CustomErrorWithData.ts#L6)
