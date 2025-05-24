[**@jakubmazanec/error**](../README.md)

---

# Function: createCustomError()

> **createCustomError**\<`ErrorCode`\>(`errorName`, `errorMessages`): (`code`, `options?`) =>
> [`CustomError`](../type-aliases/CustomError.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`\>

Defined in:
[createCustomError.ts:13](https://github.com/jakubmazanec/tools/blob/74fa88a6249b3d486436ae7655f4962bc4a86e11/packages/error/source/createCustomError.ts#L13)

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

> **new createCustomError**(`code`, `options?`):
> [`CustomError`](../type-aliases/CustomError.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`\>

### Parameters

#### code

`ErrorCode`

#### options?

[`CustomErrorOptions`](../type-aliases/CustomErrorOptions.md)

### Returns

[`CustomError`](../type-aliases/CustomError.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`\>
