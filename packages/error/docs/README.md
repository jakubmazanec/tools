# @jakubmazanec/error

## Table of contents

### Interfaces

- [CustomErrorOptions](interfaces/CustomErrorOptions.md)

### Type Aliases

- [CustomError](README.md#customerror)
- [ErrorMessages](README.md#errormessages)

### Functions

- [createCustomError](README.md#createcustomerror)

## Type Aliases

### CustomError

Ƭ **CustomError**<`ErrorCode`, `ErrorData`\>: `Error` & { `code`: `ErrorCode` \| typeof
`UNKNOWN_ERROR` ; `data?`: `ErrorData` }

Type representing custom error.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |
| `ErrorData` | `ErrorData`      |

#### Defined in

[types/CustomError.ts:6](https://github.com/jakubmazanec/js-tools/blob/3f5ae59/packages/error/src/types/CustomError.ts#L6)

---

### ErrorMessages

Ƭ **ErrorMessages**<`ErrorCode`\>: `Record`<`ErrorCode`, `string`\>

Object type whose property keys are `ErrorCode` and whose property values are `string`.

#### Type parameters

| Name        | Type             |
| :---------- | :--------------- |
| `ErrorCode` | extends `string` |

#### Defined in

[types/ErrorMessages.ts:4](https://github.com/jakubmazanec/js-tools/blob/3f5ae59/packages/error/src/types/ErrorMessages.ts#L4)

## Functions

### createCustomError

▸ **createCustomError**<`ErrorCode`, `ErrorData`\>(`errorName`, `errorMessages`, `ErrorData?`):
(`code`: `ErrorCode`, `options?`:
[`CustomErrorOptions`](interfaces/CustomErrorOptions.md)<`InstanceType`<`ErrorData`\>\>) =>
[`CustomError`](README.md#customerror)<`ErrorCode` \| typeof `UNKNOWN_ERROR`,
`InstanceType`<`ErrorData`\>\>

Function for creating custom error classes. Such custom error class properly subclasses built-in
`Error`, simplifies generating error messages via predefined error codes and allows attaching custom
data to the error instance.

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
| `ErrorData?`    | `ErrorData`                                              |

#### Returns

`fn`

• (`code`, `options?`)

##### Parameters

| Name       | Type                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------- |
| `code`     | `ErrorCode`                                                                             |
| `options?` | [`CustomErrorOptions`](interfaces/CustomErrorOptions.md)<`InstanceType`<`ErrorData`\>\> |

#### Defined in

[createCustomError.ts:31](https://github.com/jakubmazanec/js-tools/blob/3f5ae59/packages/error/src/createCustomError.ts#L31)
