[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Class: Program

Program manages and executes [Command](Command.md) instances attached to it based on parsing command
line arguments.

## Constructors

### new Program()

> `private` **new Program**(`__namedParameters`): [`Program`](Program.md)

#### Parameters

• **\_\_namedParameters**: [`ProgramOptions`](../type-aliases/ProgramOptions.md)

#### Returns

[`Program`](Program.md)

#### Source

[cli/source/program/Program.ts:56](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L56)

## Properties

### ErrorBoundaryFallbackComponent

> **ErrorBoundaryFallbackComponent**: `ComponentType`\<`FallbackProps`\>

Custom error boundary fallback component

#### Source

[cli/source/program/Program.ts:54](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L54)

---

### bin?

> `optional` `readonly` **bin**: `string`

Program executable name.

#### Source

[cli/source/program/Program.ts:38](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L38)

---

### commands

> `readonly` **commands**: [`Command`](Command.md)\<`string`, `undefined` \| `ParametersConfig`,
> `undefined` \| `OptionsConfig`, `boolean`, `boolean`\>[] = `[]`

Program commands

#### Source

[cli/source/program/Program.ts:41](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L41)

---

### description?

> `optional` `readonly` **description**: `string`

Program description.

#### Source

[cli/source/program/Program.ts:35](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L35)

---

### displayName?

> `optional` `readonly` **displayName**: `string`

More readable program name.

#### Source

[cli/source/program/Program.ts:26](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L26)

---

### isRendering

> `protected` **isRendering**: `boolean` = `false`

#### Source

[cli/source/program/Program.ts:45](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L45)

---

### latestVersion?

> `optional` `readonly` **latestVersion**: `string`

Program latest version.

#### Source

[cli/source/program/Program.ts:32](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L32)

---

### name?

> `optional` `readonly` **name**: `string`

Program name.

#### Source

[cli/source/program/Program.ts:23](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L23)

---

### streams

> `readonly` **streams**: [`ProgramStreams`](../type-aliases/ProgramStreams.md)

#### Source

[cli/source/program/Program.ts:47](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L47)

---

### version?

> `optional` `readonly` **version**: `string`

Program version.

#### Source

[cli/source/program/Program.ts:29](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L29)

## Methods

### addCommand()

> **addCommand**(`command`): `this`

Adds command to the program.

#### Parameters

• **command**: [`Command`](Command.md)\<`any`, `any`, `any`, `any`, `any`\>

Command to add.

#### Returns

`this`

Program instance.

#### Source

[cli/source/program/Program.ts:150](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L150)

---

### renderElement()

> **renderElement**(`element`): `Promise`\<`void`\>

Renders a React element using Ink and outputs to the configured streams.

#### Parameters

• **element**: `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

The React element to render.

#### Returns

`Promise`\<`void`\>

#### Source

[cli/source/program/Program.ts:162](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L162)

---

### run()

> **run**(`argv`): `Promise`\<`void`\>

Runs the program.

#### Parameters

• **argv**: `Argv`

Unparsed command line arguments.

#### Returns

`Promise`\<`void`\>

#### Source

[cli/source/program/Program.ts:197](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L197)

---

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

• **\_\_namedParameters**: [`ProgramCreateOptions`](../type-aliases/ProgramCreateOptions.md)

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Source

[cli/source/program/Program.ts:96](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/cli/source/program/Program.ts#L96)
