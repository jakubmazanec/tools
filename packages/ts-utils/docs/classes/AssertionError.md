# Class: AssertionError

A subclass of `Error` that indicates an assertion failure.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](AssertionError.md#constructor)

### Properties

- [cause](AssertionError.md#cause)
- [message](AssertionError.md#message)
- [name](AssertionError.md#name)
- [stack](AssertionError.md#stack)
- [prepareStackTrace](AssertionError.md#preparestacktrace)
- [stackTraceLimit](AssertionError.md#stacktracelimit)

### Methods

- [captureStackTrace](AssertionError.md#capturestacktrace)

## Constructors

### constructor

• **new AssertionError**(`message?`): [`AssertionError`](AssertionError.md)

#### Parameters

| Name       | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `message?` | `string` | Message added to the default error message |

#### Returns

[`AssertionError`](AssertionError.md)

#### Overrides

Error.constructor

#### Defined in

[packages/ts-utils/source/utils/assert.ts:8](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/ts-utils/source/utils/assert.ts#L8)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
