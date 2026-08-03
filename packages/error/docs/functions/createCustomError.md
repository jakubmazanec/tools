[**@jakubmazanec/error**](../README.md)

---

# Function: createCustomError()

> **createCustomError**\<`ErrorCode`>\>(`errorName`, `errorMessages`): (`code`, `options?`) =>
> [`CustomError`](../type-aliases/CustomError.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`>\>

Defined in:
[createCustomError.ts:13](https://github.com/jakubmazanec/tools/blob/5440cb509cb4ec7a792c8768f79dc0266aab15d1/packages/error/source/createCustomError.ts#L13)

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error` and simplifies generating error messages via predefined error codes.

## Type Parameters

### ErrorCode

`ErrorCode` _extends_ `string`

## Parameters

### errorName

`string`

Error name.

### errorMessages

[`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

Object containing all possible error messages.

## Returns

Class that implements [CustomError](../type-aliases/CustomError.md).

(`code`, `options?`) => [`CustomError`](../type-aliases/CustomError.md)\<`"UNKNOWN_ERROR"` \|
`ErrorCode`\>
