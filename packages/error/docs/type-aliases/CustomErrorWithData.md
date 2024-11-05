[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Type alias: CustomErrorWithData\<ErrorCode, ErrorData\>

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

## Type parameters

• **ErrorCode** _extends_ `string`

• **ErrorData**

## Source

[types/CustomErrorWithData.ts:6](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/error/source/types/CustomErrorWithData.ts#L6)
