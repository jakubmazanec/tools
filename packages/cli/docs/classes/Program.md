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
- [displayName](Program.md#displayname)
- [isRendering](Program.md#isrendering)
- [latestVersion](Program.md#latestversion)
- [name](Program.md#name)
- [streams](Program.md#streams)
- [version](Program.md#version)

### Methods

- [addCommand](Program.md#addcommand)
- [renderElement](Program.md#renderelement)
- [run](Program.md#run)
- [create](Program.md#create)

## Constructors

### constructor

• `Private` **new Program**(`«destructured»`)

#### Parameters

| Name             | Type                                            |
| :--------------- | :---------------------------------------------- |
| `«destructured»` | [`ProgramOptions`](../README.md#programoptions) |

#### Defined in

[cli/src/program/Program.ts:56](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L56)

## Properties

### ErrorBoundaryFallbackComponent

• **ErrorBoundaryFallbackComponent**: `ComponentType`<`FallbackProps`\>

Custom error boundary fallback component

#### Defined in

[cli/src/program/Program.ts:54](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L54)

---

### bin

• `Optional` `Readonly` **bin**: `string`

Program executable name.

#### Defined in

[cli/src/program/Program.ts:38](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L38)

---

### commands

• `Readonly` **commands**: [`Command`](Command.md)<`string`, `undefined` \| `ParametersConfig`,
`undefined` \| `OptionsConfig`, `boolean`, `boolean`\>[] = `[]`

Program commands

#### Defined in

[cli/src/program/Program.ts:41](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L41)

---

### description

• `Optional` `Readonly` **description**: `string`

Program description.

#### Defined in

[cli/src/program/Program.ts:35](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L35)

---

### displayName

• `Optional` `Readonly` **displayName**: `string`

More readable program name.

#### Defined in

[cli/src/program/Program.ts:26](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L26)

---

### isRendering

• `Protected` **isRendering**: `boolean` = `false`

#### Defined in

[cli/src/program/Program.ts:45](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L45)

---

### latestVersion

• `Optional` `Readonly` **latestVersion**: `string`

Program latest version.

#### Defined in

[cli/src/program/Program.ts:32](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L32)

---

### name

• `Optional` `Readonly` **name**: `string`

Program name.

#### Defined in

[cli/src/program/Program.ts:23](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L23)

---

### streams

• `Readonly` **streams**: [`ProgramStreams`](../README.md#programstreams)

#### Defined in

[cli/src/program/Program.ts:47](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L47)

---

### version

• `Optional` `Readonly` **version**: `string`

Program version.

#### Defined in

[cli/src/program/Program.ts:29](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L29)

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

[cli/src/program/Program.ts:150](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L150)

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

[cli/src/program/Program.ts:162](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L162)

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

[cli/src/program/Program.ts:197](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L197)

---

### create

▸ `Static` **create**(`«destructured»`): `Promise`<[`Program`](Program.md)\>

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `«destructured»` | [`ProgramCreateOptions`](../README.md#programcreateoptions) |

#### Returns

`Promise`<[`Program`](Program.md)\>

#### Defined in

[cli/src/program/Program.ts:96](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/cli/src/program/Program.ts#L96)
