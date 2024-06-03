[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Function: createCustomError()

> **createCustomError**\<`ErrorCode`\>(`errorName`, `errorMessages`): (`code`, `options`?) =>
> [`CustomError`](../type-aliases/CustomError.md)\<`ErrorCode` \| _typeof_
> [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error` and simplifies generating error messages via predefined error codes.

## Type parameters

• **ErrorCode** _extends_ `string`

## Parameters

• **errorName**: `string`

Error name.

• **errorMessages**: [`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

Object containing all possible error messages.

## Returns

`Function`

Class that implements [CustomError](../type-aliases/CustomError.md).

### Parameters

• **code**: `ErrorCode`

• **options?**: [`CustomErrorOptions`](../type-aliases/CustomErrorOptions.md)

### Returns

[`CustomError`](../type-aliases/CustomError.md)\<`ErrorCode` \| _typeof_
[`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)\>

## Source

[createCustomError.ts:13](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/error/source/createCustomError.ts#L13)
