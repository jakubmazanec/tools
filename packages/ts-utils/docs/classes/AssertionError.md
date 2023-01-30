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

• **new AssertionError**(`message?`)

#### Parameters

| Name       | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `message?` | `string` | Message added to the default error message |

#### Overrides

Error.constructor

#### Defined in

[packages/ts-utils/src/utils/assert.ts:8](https://github.com/jakubmazanec/js-tools/blob/6cd8f78/packages/ts-utils/src/utils/assert.ts#L8)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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

node_modules/@types/node/ts4.8/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

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

node_modules/@types/node/ts4.8/globals.d.ts:4
