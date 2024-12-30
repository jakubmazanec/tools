[**@jakubmazanec/error**](../README.md)

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

[types/CustomErrorWithData.ts:6](https://github.com/jakubmazanec/tools/blob/3e339f67fc5b5cd011c28acb315570a2f29efedc/packages/error/source/types/CustomErrorWithData.ts#L6)
