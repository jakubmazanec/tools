[**@jakubmazanec/error**](../README.md) • **Docs**

---

# Function: createCustomErrorWithData()

## createCustomErrorWithData(errorName, errorMessages, errorData)

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): (`code`, `options`?) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`ErrorCode` \| _typeof_
> [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md), `z.infer`\<`ErrorData`\>\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

### Type Parameters

• **ErrorCode** _extends_ `string`

• **ErrorData** _extends_ `AnyZodObject`

### Parameters

• **errorName**: `string`

Error name.

• **errorMessages**: [`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

Object containing all possible error messages.

• **errorData**: `ErrorData`

Runtime representation of the `ErrorData` type parameter; can be either a class expression, or a Zod
schema.

### Returns

`Function`

Class that implements [CustomErrorWithData](../type-aliases/CustomErrorWithData.md).

#### Parameters

• **code**: `ErrorCode`

• **options?**:
[`CustomErrorWithDataOptions`](../type-aliases/CustomErrorWithDataOptions.md)\<`z.infer`\<`ErrorData`\>\>

#### Returns

[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`ErrorCode` \| _typeof_
[`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md), `z.infer`\<`ErrorData`\>\>

### Defined in

[createCustomErrorWithData.ts:21](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/error/source/createCustomErrorWithData.ts#L21)

## createCustomErrorWithData(errorName, errorMessages, errorData)

> **createCustomErrorWithData**\<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
> `errorData`): (`code`, `options`?) =>
> [`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`ErrorCode` \| _typeof_
> [`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md), `InstanceType`\<`ErrorData`\>\>

### Type Parameters

• **ErrorCode** _extends_ `string`

• **ErrorData** _extends_ (...`args`) => `any`

### Parameters

• **errorName**: `string`

• **errorMessages**: [`ErrorMessages`](../type-aliases/ErrorMessages.md)\<`ErrorCode`\>

• **errorData**: `ErrorData`

### Returns

`Function`

#### Parameters

• **code**: `ErrorCode`

• **options?**:
[`CustomErrorWithDataOptions`](../type-aliases/CustomErrorWithDataOptions.md)\<`InstanceType`\<`ErrorData`\>\>

#### Returns

[`CustomErrorWithData`](../type-aliases/CustomErrorWithData.md)\<`ErrorCode` \| _typeof_
[`UNKNOWN_ERROR`](../variables/UNKNOWN_ERROR.md), `InstanceType`\<`ErrorData`\>\>

### Defined in

[createCustomErrorWithData.ts:29](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/error/source/createCustomErrorWithData.ts#L29)
