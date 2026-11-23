[**@jakubmazanec/error**](../README.md)

---

# Function: createCustomErrorWithData()

## Call Signature

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): new (`code`, `options?`) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `output`\<`ErrorData`\>\>

Defined in:
[createCustomErrorWithData.ts:22](https://github.com/jakubmazanec/tools/blob/8fd6fdb95311d81f967ac798aa344a0dbb3b9193/packages/error/source/createCustomErrorWithData.ts#L22)

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

### Type Parameters

#### ErrorCode

`ErrorCode` _extends_ `string`

#### ErrorData

`ErrorData` _extends_ `ZodObject`\<`$ZodLooseShape`, `$strip`\>

### Parameters

#### errorName

`string`

Error name.

#### errorMessages

[`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

Object containing all possible error messages.

#### errorData

`ErrorData`

Runtime representation of the `ErrorData` type parameter; can be either a class expression, or a Zod
schema.

### Returns

Class that implements [CustomErrorWithData](../type-aliases/CustomErrorWithData.md).

new (`code`, `options?`) =>
[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
`output`\<`ErrorData`\>\>

## Call Signature

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): new (`code`, `options?`) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `InstanceType`\<`ErrorData`\>\>

Defined in:
[createCustomErrorWithData.ts:30](https://github.com/jakubmazanec/tools/blob/8fd6fdb95311d81f967ac798aa344a0dbb3b9193/packages/error/source/createCustomErrorWithData.ts#L30)

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

### Type Parameters

#### ErrorCode

`ErrorCode` _extends_ `string`

#### ErrorData

`ErrorData` _extends_ new (...`args`) => `any`

### Parameters

#### errorName

`string`

Error name.

#### errorMessages

[`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

Object containing all possible error messages.

#### errorData

`ErrorData`

Runtime representation of the `ErrorData` type parameter; can be either a class expression, or a Zod
schema.

### Returns

Class that implements [CustomErrorWithData](../type-aliases/CustomErrorWithData.md).

new (`code`, `options?`) =>
[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
`InstanceType`\<`ErrorData`\>\>
