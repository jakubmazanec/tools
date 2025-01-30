[**@jakubmazanec/ts-utils**](../README.md)

---

# Class: AssertionError

Defined in:
[packages/ts-utils/source/utils/assert.ts:4](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/ts-utils/source/utils/assert.ts#L4)

A subclass of `Error` that indicates an assertion failure.

## Extends

- `Error`

## Constructors

### new AssertionError()

> **new AssertionError**(`message`?): [`AssertionError`](AssertionError.md)

Defined in:
[packages/ts-utils/source/utils/assert.ts:8](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/ts-utils/source/utils/assert.ts#L8)

#### Parameters

##### message?

`string`

Message added to the default error message

#### Returns

[`AssertionError`](AssertionError.md)

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

---

### message

> **message**: `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

---

### name

> **name**: `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

---

### stack?

> `optional` **stack**: `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

---

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
