[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Function: createCustomError()

> **createCustomError**\<`ErrorCode`\>(`errorName`, `errorMessages`): (`code`, `options`?) =>
> [`CustomError`](../type-aliases/CustomError.md)\<`ErrorCode` \| _typeof_
> [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md)\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error` and simplifies generating error messages via predefined error codes.

## Type Parameters

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

## Defined in

[createCustomError.ts:13](https://github.com/jakubmazanec/tools/blob/3137813ef46c72d3c081751f960a2aa2c61ad567/packages/error/source/createCustomError.ts#L13)
