[**@jakubmazanec/error**](../README.md)

---

# Function: createCustomErrorWithData()

## Call Signature

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): (`code`, `options?`) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `TypeOf`\<`ErrorData`\>\>

Defined in:
[createCustomErrorWithData.ts:21](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/error/source/createCustomErrorWithData.ts#L21)

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

### Type Parameters

#### ErrorCode

`ErrorCode` _extends_ `string`

#### ErrorData

`ErrorData` _extends_ `AnyZodObject`

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

> **new createCustomErrorWithData**(`code`, `options?`):
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `TypeOf`\<`ErrorData`\>\>

#### Parameters

##### code

`ErrorCode`

##### options?

[`CustomErrorWithDataOptions`](../type-aliases/CustomErrorWithDataOptions.md)\<`TypeOf`\<`ErrorData`\>\>

#### Returns

[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
`TypeOf`\<`ErrorData`\>\>

## Call Signature

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): (`code`, `options?`) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `InstanceType`\<`ErrorData`\>\>

Defined in:
[createCustomErrorWithData.ts:29](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/error/source/createCustomErrorWithData.ts#L29)

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

### Type Parameters

#### ErrorCode

`ErrorCode` _extends_ `string`

#### ErrorData

`ErrorData` _extends_ (...`args`) => `any`

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

> **new createCustomErrorWithData**(`code`, `options?`):
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
> `InstanceType`\<`ErrorData`\>\>

#### Parameters

##### code

`ErrorCode`

##### options?

[`CustomErrorWithDataOptions`](../type-aliases/CustomErrorWithDataOptions.md)\<`InstanceType`\<`ErrorData`\>\>

#### Returns

[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`"UNKNOWN_ERROR"` \| `ErrorCode`,
`InstanceType`\<`ErrorData`\>\>
