# @jakubmazanec/error

## Table of contents

### Type Aliases

- [CustomError](README.md#customerror)
- [CustomErrorOptions](README.md#customerroroptions)
- [CustomErrorWithData](README.md#customerrorwithdata)
- [CustomErrorWithDataOptions](README.md#customerrorwithdataoptions)
- [ErrorMessages](README.md#errormessages)

### Variables

- [UNKNOWN_ERROR](README.md#unknown_error)

### Functions

- [createCustomError](README.md#createcustomerror)
- [createCustomErrorWithData](README.md#createcustomerrorwithdata)

## Type Aliases

### CustomError

Ƭ **CustomError**<`ErrorCode`\>: `Error` & { `code`: `ErrorCode` \| typeof
[`UNKNOWN_ERROR`](README.md#unknown_error) }

Type representing custom error.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |

#### Defined in

[types/CustomError.ts:6](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/types/CustomError.ts#L6)

---

### CustomErrorOptions

Ƭ **CustomErrorOptions**: `Object`

Type representing options object used when instantianting class returned from
[createCustomError](README.md#createcustomerror).

#### Type declaration

| Name                 | Type        | Description                                                                                                     |
| :------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------- |
| `cause?`             | `unknown`   | Used for setting `cause` property of an error instance that indicates the specific original cause of the error. |
| `messageParameters?` | `unknown`[] | Array of values that are used as parameters to generate the error message.                                      |

#### Defined in

[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/types/CustomErrorOptions.ts#L4)

---

### CustomErrorWithData

Ƭ **CustomErrorWithData**<`ErrorCode`, `ErrorData`\>: `Error` & { `code`: `ErrorCode` \| typeof
[`UNKNOWN_ERROR`](README.md#unknown_error) ; `data?`: `ErrorData` }

Type representing custom error that can have an arbitrary data attached.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |
| `ErrorData` | `ErrorData`      |

#### Defined in

[types/CustomErrorWithData.ts:6](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/types/CustomErrorWithData.ts#L6)

---

### CustomErrorWithDataOptions

Ƭ **CustomErrorWithDataOptions**<`ErrorData`\>: `Object`

Type representing options object used when instantianting class returned from
[createCustomErrorWithData](README.md#createcustomerrorwithdata).

#### Type parameters

| Name        |
| :---------- |
| `ErrorData` |

#### Type declaration

| Name                 | Type        | Description                                                                                                     |
| :------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------- |
| `cause?`             | `unknown`   | Used for setting `cause` property of an error instance that indicates the specific original cause of the error. |
| `data?`              | `ErrorData` | Custom data that will be attached to the error instance.                                                        |
| `messageParameters?` | `unknown`[] | Array of values that are used as parameters to generate the error message.                                      |

#### Defined in

[types/CustomErrorWithDataOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/types/CustomErrorWithDataOptions.ts#L4)

---

### ErrorMessages

Ƭ **ErrorMessages**<`ErrorCode`\>: `Record`<`ErrorCode`, `string`\>

Object type whose property keys are `ErrorCode` and whose property values are `string`.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |

#### Defined in

[types/ErrorMessages.ts:4](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/types/ErrorMessages.ts#L4)

## Variables

### UNKNOWN_ERROR

• `Const` **UNKNOWN_ERROR**: `"UNKNOWN_ERROR"`

Code for an unknown error. You should never use nor encounter this error code.

#### Defined in

[constants.ts:6](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/constants.ts#L6)

## Functions

### createCustomError

▸ **createCustomError**<`ErrorCode`\>(`errorName`, `errorMessages`): (`code`: `ErrorCode`,
`options?`: [`CustomErrorOptions`](README.md#customerroroptions)) =>
[`CustomError`](README.md#customerror)<`ErrorCode` \| typeof
[`UNKNOWN_ERROR`](README.md#unknown_error)\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error` and simplifies generating error messages via predefined error codes.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |

#### Parameters

| Name            | Type                                                     | Description                                    |
| :-------------- | :------------------------------------------------------- | :--------------------------------------------- |
| `errorName`     | `string`                                                 | Error name.                                    |
| `errorMessages` | [`ErrorMessages`](README.md#errormessages)<`ErrorCode`\> | Object containing all possible error messages. |

#### Returns

`fn`

Class that implements [CustomError](README.md#customerror).

• (`code`, `options?`)

##### Parameters

| Name       | Type                                                 |
| :--------- | :--------------------------------------------------- |
| `code`     | `ErrorCode`                                          |
| `options?` | [`CustomErrorOptions`](README.md#customerroroptions) |

#### Defined in

[createCustomError.ts:13](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/createCustomError.ts#L13)

---

### createCustomErrorWithData

▸ **createCustomErrorWithData**<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
`errorData`): (`code`: `ErrorCode`, `options?`:
[`CustomErrorWithDataOptions`](README.md#customerrorwithdataoptions)<`z.infer`<`ErrorData`\>\>) =>
[`CustomErrorWithData`](README.md#customerrorwithdata)<`ErrorCode` \| typeof
[`UNKNOWN_ERROR`](README.md#unknown_error), `z.infer`<`ErrorData`\>\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

#### Type parameters

| Name        | Type                   |
| :---------- | :--------------------- |
| `ErrorCode` | extends `string`       |
| `ErrorData` | extends `AnyZodObject` |

#### Parameters

| Name            | Type                                                     | Description                                                                                                  |
| :-------------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| `errorName`     | `string`                                                 | Error name.                                                                                                  |
| `errorMessages` | [`ErrorMessages`](README.md#errormessages)<`ErrorCode`\> | Object containing all possible error messages.                                                               |
| `errorData`     | `ErrorData`                                              | Runtime representation of the `ErrorData` type parameter; can be either a class expression, or a Zod schema. |

#### Returns

`fn`

Class that implements [CustomErrorWithData](README.md#customerrorwithdata).

• (`code`, `options?`)

##### Parameters

| Name       | Type                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------- |
| `code`     | `ErrorCode`                                                                                    |
| `options?` | [`CustomErrorWithDataOptions`](README.md#customerrorwithdataoptions)<`z.infer`<`ErrorData`\>\> |

#### Defined in

[createCustomErrorWithData.ts:21](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/createCustomErrorWithData.ts#L21)

▸ **createCustomErrorWithData**<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`,
`errorData`): (`code`: `ErrorCode`, `options?`:
[`CustomErrorWithDataOptions`](README.md#customerrorwithdataoptions)<`InstanceType`<`ErrorData`\>\>)
=> [`CustomErrorWithData`](README.md#customerrorwithdata)<`ErrorCode` \| typeof
[`UNKNOWN_ERROR`](README.md#unknown_error), `InstanceType`<`ErrorData`\>\>

#### Type parameters

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `ErrorCode` | extends `string`                    |
| `ErrorData` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name            | Type                                                     |
| :-------------- | :------------------------------------------------------- |
| `errorName`     | `string`                                                 |
| `errorMessages` | [`ErrorMessages`](README.md#errormessages)<`ErrorCode`\> |
| `errorData`     | `ErrorData`                                              |

#### Returns

`fn`

• (`code`, `options?`)

##### Parameters

| Name       | Type                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------------- |
| `code`     | `ErrorCode`                                                                                         |
| `options?` | [`CustomErrorWithDataOptions`](README.md#customerrorwithdataoptions)<`InstanceType`<`ErrorData`\>\> |

#### Defined in

[createCustomErrorWithData.ts:29](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/error/src/createCustomErrorWithData.ts#L29)
