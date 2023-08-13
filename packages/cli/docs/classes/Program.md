# Class: Program

Program manages and executes [Command](Command.md) instances attached to it based on parsing command
line arguments.

## Table of contents

### Constructors

- [constructor](Program.md#constructor)

### Properties

- [ErrorBoundaryFallbackComponent](Program.md#errorboundaryfallbackcomponent)
- [bin](Program.md#bin)
- [commands](Program.md#commands)
- [description](Program.md#description)
- [isRendering](Program.md#isrendering)
- [name](Program.md#name)
- [streams](Program.md#streams)
- [version](Program.md#version)

### Methods

- [addCommand](Program.md#addcommand)
- [renderElement](Program.md#renderelement)
- [run](Program.md#run)

## Constructors

### constructor

• **new Program**(`«destructured»`)

#### Parameters

| Name             | Type                                            |
| :--------------- | :---------------------------------------------- |
| `«destructured»` | [`ProgramOptions`](../README.md#programoptions) |

#### Defined in

[cli/src/program/Program.ts:45](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L45)

## Properties

### ErrorBoundaryFallbackComponent

• **ErrorBoundaryFallbackComponent**: `ComponentType`<`FallbackProps`\>

Custom error boundary fallback component

#### Defined in

[cli/src/program/Program.ts:43](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L43)

---

### bin

• `Optional` `Readonly` **bin**: `string`

Program executable name.

#### Defined in

[cli/src/program/Program.ts:27](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L27)

---

### commands

• `Readonly` **commands**: [`Command`](Command.md)<`string`, `undefined` \| `ParametersConfig`,
`undefined` \| `OptionsConfig`, `boolean`, `boolean`\>[] = `[]`

Program commands

#### Defined in

[cli/src/program/Program.ts:30](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L30)

---

### description

• `Optional` `Readonly` **description**: `string`

Program description.

#### Defined in

[cli/src/program/Program.ts:24](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L24)

---

### isRendering

• `Protected` **isRendering**: `boolean` = `false`

#### Defined in

[cli/src/program/Program.ts:34](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L34)

---

### name

• `Optional` `Readonly` **name**: `string`

Program name.

#### Defined in

[cli/src/program/Program.ts:18](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L18)

---

### streams

• `Readonly` **streams**: [`ProgramStreams`](../README.md#programstreams)

#### Defined in

[cli/src/program/Program.ts:36](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L36)

---

### version

• `Optional` `Readonly` **version**: `string`

Program version.

#### Defined in

[cli/src/program/Program.ts:21](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L21)

## Methods

### addCommand

▸ **addCommand**(`command`): [`Program`](Program.md)

Adds command to the program.

#### Parameters

| Name      | Type                                                        | Description     |
| :-------- | :---------------------------------------------------------- | :-------------- |
| `command` | [`Command`](Command.md)<`any`, `any`, `any`, `any`, `any`\> | Command to add. |

#### Returns

[`Program`](Program.md)

Program instance.

#### Defined in

[cli/src/program/Program.ts:75](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L75)

---

### renderElement

▸ **renderElement**(`element`): `Promise`<`void`\>

Renders a React element using Ink and outputs to the configured streams.

#### Parameters

| Name      | Type                                                                | Description                  |
| :-------- | :------------------------------------------------------------------ | :--------------------------- |
| `element` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | The React element to render. |

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/program/Program.ts:87](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L87)

---

### run

▸ **run**(`argv`): `Promise`<`void`\>

Runs the program.

#### Parameters

| Name   | Type   | Description                      |
| :----- | :----- | :------------------------------- |
| `argv` | `Argv` | Unparsed command line arguments. |

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/program/Program.ts:122](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Program.ts#L122)
