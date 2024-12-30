[**@jakubmazanec/error**](../README.md)

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

[types/CustomError.ts:6](https://github.com/jakubmazanec/tools/blob/3e339f67fc5b5cd011c28acb315570a2f29efedc/packages/error/source/types/CustomError.ts#L6)
