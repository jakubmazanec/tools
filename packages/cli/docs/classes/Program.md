[**@jakubmazanec/cli**](../README.md)

---

# Class: Program

Defined in:
[cli/source/program/Program.ts:21](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L21)

Program manages and executes [Command](Command.md) instances attached to it based on parsing command
line arguments.

## Properties

### bin?

> `readonly` `optional` **bin**: `string`

Defined in:
[cli/source/program/Program.ts:38](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L38)

Program executable name.

---

### commands

> `readonly` **commands**: [`Command`](Command.md)\<`string`, `undefined` \| `ParametersConfig`,
> `undefined` \| `OptionsConfig`, `boolean`, `boolean`\>[] = `[]`

Defined in:
[cli/source/program/Program.ts:41](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L41)

Program commands

---

### description?

> `readonly` `optional` **description**: `string`

Defined in:
[cli/source/program/Program.ts:35](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L35)

Program description.

---

### displayName?

> `readonly` `optional` **displayName**: `string`

Defined in:
[cli/source/program/Program.ts:26](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L26)

More readable program name.

---

### ErrorBoundaryFallbackComponent

> **ErrorBoundaryFallbackComponent**: `ComponentType`\<`FallbackProps`\>

Defined in:
[cli/source/program/Program.ts:54](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L54)

Custom error boundary fallback component

---

### isRendering

> `protected` **isRendering**: `boolean` = `false`

Defined in:
[cli/source/program/Program.ts:45](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L45)

---

### latestVersion?

> `readonly` `optional` **latestVersion**: `string`

Defined in:
[cli/source/program/Program.ts:32](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L32)

Program latest version.

---

### name?

> `readonly` `optional` **name**: `string`

Defined in:
[cli/source/program/Program.ts:23](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L23)

Program name.

---

### streams

> `readonly` **streams**: [`ProgramStreams`](../type-aliases/ProgramStreams.md)

Defined in:
[cli/source/program/Program.ts:47](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L47)

---

### version?

> `readonly` `optional` **version**: `string`

Defined in:
[cli/source/program/Program.ts:29](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L29)

Program version.

## Methods

### addCommand()

> **addCommand**(`command`): `this`

Defined in:
[cli/source/program/Program.ts:150](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L150)

Adds command to the program.

#### Parameters

##### command

[`Command`](Command.md)\<`any`, `any`, `any`, `any`, `any`\>

Command to add.

#### Returns

`this`

Program instance.

---

### renderElement()

> **renderElement**(`element`): `Promise`\<`void`\>

Defined in:
[cli/source/program/Program.ts:162](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L162)

Renders a React element using Ink and outputs to the configured streams.

#### Parameters

##### element

`ReactElement`

The React element to render.

#### Returns

`Promise`\<`void`\>

---

### run()

> **run**(`argv`): `Promise`\<`void`\>

Defined in:
[cli/source/program/Program.ts:197](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L197)

Runs the program.

#### Parameters

##### argv

`Argv`

Unparsed command line arguments.

#### Returns

`Promise`\<`void`\>

---

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`Program`](Program.md)\>

Defined in:
[cli/source/program/Program.ts:96](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/cli/source/program/Program.ts#L96)

#### Parameters

##### \_\_namedParameters

[`ProgramCreateOptions`](../type-aliases/ProgramCreateOptions.md)

#### Returns

`Promise`\<[`Program`](Program.md)\>
