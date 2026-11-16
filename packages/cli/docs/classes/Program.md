[**@jakubmazanec/cli**](../README.md)

---

# Class: Program

Defined in:
[cli/source/program/Program.ts:22](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L22)

Program manages and executes [Command](Command.md) instances attached to it based on parsing command
line arguments.

## Properties

### bin?

> `readonly` `optional` **bin?**: `string`

Defined in:
[cli/source/program/Program.ts:24](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L24)

Program executable name.

---

### commands

> `readonly` **commands**: [`Command`](Command.md)\<`string`, `ParametersConfig` \| `undefined`,
> `OptionsConfig` \| `undefined`, `boolean`, `boolean`\>[] = `[]`

Defined in:
[cli/source/program/Program.ts:27](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L27)

Program commands

---

### description?

> `readonly` `optional` **description?**: `string`

Defined in:
[cli/source/program/Program.ts:32](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L32)

Program description.

---

### displayName?

> `readonly` `optional` **displayName?**: `string`

Defined in:
[cli/source/program/Program.ts:35](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L35)

More readable program name.

---

### ErrorBoundaryFallbackComponent

> **ErrorBoundaryFallbackComponent**: `ComponentType`\<`FallbackProps`\>

Defined in:
[cli/source/program/Program.ts:38](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L38)

Custom error boundary fallback component

---

### isRendering

> `protected` **isRendering**: `boolean` = `false`

Defined in:
[cli/source/program/Program.ts:40](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L40)

---

### latestVersion?

> `readonly` `optional` **latestVersion?**: `string`

Defined in:
[cli/source/program/Program.ts:43](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L43)

Program latest version.

---

### name?

> `readonly` `optional` **name?**: `string`

Defined in:
[cli/source/program/Program.ts:46](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L46)

Program name.

---

### streams

> `readonly` **streams**: [`ProgramStreams`](../type-aliases/ProgramStreams.md)

Defined in:
[cli/source/program/Program.ts:48](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L48)

---

### version?

> `readonly` `optional` **version?**: `string`

Defined in:
[cli/source/program/Program.ts:55](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L55)

Program version.

## Methods

### addCommand()

> **addCommand**(`command`): `this`

Defined in:
[cli/source/program/Program.ts:151](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L151)

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
[cli/source/program/Program.ts:163](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L163)

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
[cli/source/program/Program.ts:198](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L198)

Runs the program.

#### Parameters

##### argv

`Argv`

Unparsed command line arguments.

#### Returns

`Promise`\<`void`\>

---

### create()

> `static` **create**(`__namedParameters`): `Promise`\<`Program`\>

Defined in:
[cli/source/program/Program.ts:97](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/program/Program.ts#L97)

#### Parameters

##### \_\_namedParameters

[`ProgramCreateOptions`](../type-aliases/ProgramCreateOptions.md)

#### Returns

`Promise`\<`Program`\>
