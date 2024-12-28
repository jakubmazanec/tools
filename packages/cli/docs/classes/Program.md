[**@jakubmazanec/cli**](../README.md)

---

# Class: Program

Program manages and executes [Command](Command.md) instances attached to it based on parsing command
line arguments.

## Properties

### bin?

> `readonly` `optional` **bin**: `string`

Program executable name.

#### Defined in

[cli/source/program/Program.ts:38](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L38)

---

### commands

> `readonly` **commands**: [`Command`](Command.md)\<`string`, `undefined` \| `ParametersConfig`,
> `undefined` \| `OptionsConfig`, `boolean`, `boolean`\>[] = `[]`

Program commands

#### Defined in

[cli/source/program/Program.ts:41](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L41)

---

### description?

> `readonly` `optional` **description**: `string`

Program description.

#### Defined in

[cli/source/program/Program.ts:35](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L35)

---

### displayName?

> `readonly` `optional` **displayName**: `string`

More readable program name.

#### Defined in

[cli/source/program/Program.ts:26](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L26)

---

### ErrorBoundaryFallbackComponent

> **ErrorBoundaryFallbackComponent**: `ComponentType`\<`FallbackProps`\>

Custom error boundary fallback component

#### Defined in

[cli/source/program/Program.ts:54](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L54)

---

### isRendering

> `protected` **isRendering**: `boolean` = `false`

#### Defined in

[cli/source/program/Program.ts:45](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L45)

---

### latestVersion?

> `readonly` `optional` **latestVersion**: `string`

Program latest version.

#### Defined in

[cli/source/program/Program.ts:32](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L32)

---

### name?

> `readonly` `optional` **name**: `string`

Program name.

#### Defined in

[cli/source/program/Program.ts:23](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L23)

---

### streams

> `readonly` **streams**: [`ProgramStreams`](../type-aliases/ProgramStreams.md)

#### Defined in

[cli/source/program/Program.ts:47](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L47)

---

### version?

> `readonly` `optional` **version**: `string`

Program version.

#### Defined in

[cli/source/program/Program.ts:29](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L29)

## Methods

### addCommand()

> **addCommand**(`command`): `this`

Adds command to the program.

#### Parameters

##### command

[`Command`](Command.md)\<`any`, `any`, `any`, `any`, `any`\>

Command to add.

#### Returns

`this`

Program instance.

#### Defined in

[cli/source/program/Program.ts:150](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L150)

---

### renderElement()

> **renderElement**(`element`): `Promise`\<`void`\>

Renders a React element using Ink and outputs to the configured streams.

#### Parameters

##### element

`ReactElement`

The React element to render.

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/source/program/Program.ts:162](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L162)

---

### run()

> **run**(`argv`): `Promise`\<`void`\>

Runs the program.

#### Parameters

##### argv

`Argv`

Unparsed command line arguments.

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/source/program/Program.ts:197](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L197)

---

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

##### \_\_namedParameters

[`ProgramCreateOptions`](../type-aliases/ProgramCreateOptions.md)

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Defined in

[cli/source/program/Program.ts:96](https://github.com/jakubmazanec/tools/blob/a9765e3de8390a6e57bec51efaeb411fbd7881ab/packages/cli/source/program/Program.ts#L96)
