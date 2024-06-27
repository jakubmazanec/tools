[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Class: Command\<A, B, C, D, E\>

Command encapsulates piece of a CLI's logic and is executed when [Program](Program.md) instance
parses that command from the command line arguments.

## Type parameters

• **A** _extends_ `string`

• **B** _extends_ `ParametersConfig` \| `undefined` = `undefined`

• **C** _extends_ `OptionsConfig` \| `undefined` = `undefined`

• **D** _extends_ `boolean` = `false`

• **E** _extends_ `boolean` = `false`

## Constructors

### new Command()

> **new Command**\<`A`, `B`, `C`, `D`, `E`\>(`name`, `action`, `options`):
> [`Command`](Command.md)\<`A`, `B`, `C`, `D`, `E`\>

#### Parameters

• **name**: `A`

Command name, ie. space-separated words consisting only of letters, numbers (but not at the start of
the word) or dashes.

• **action**: [`CommandAction`](../type-aliases/CommandAction.md)\<`A`, `B`, `C`, `D`, `E`\>

Function that runs when command is executed.

• **options**: [`CommandOptions`](../type-aliases/CommandOptions.md)\<`NonNullable`\<`B`\>,
`NonNullable`\<`C`\>, `D`, `E`\>

Additionl command options.

#### Returns

[`Command`](Command.md)\<`A`, `B`, `C`, `D`, `E`\>

#### Source

[cli/source/program/Command.ts:36](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L36)

## Properties

### action

> `private` `readonly` **action**: [`CommandAction`](../type-aliases/CommandAction.md)\<`A`, `B`,
> `C`, `D`, `E`\>

#### Source

[cli/source/program/Command.ts:29](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L29)

---

### allowUnknownOptions

> `readonly` **allowUnknownOptions**: `D`

#### Source

[cli/source/program/Command.ts:27](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L27)

---

### allowUnknownParameters

> `readonly` **allowUnknownParameters**: `E`

#### Source

[cli/source/program/Command.ts:28](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L28)

---

### description?

> `optional` `readonly` **description**: `string`

#### Source

[cli/source/program/Command.ts:24](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L24)

---

### name

> `readonly` **name**: `A`

#### Source

[cli/source/program/Command.ts:23](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L23)

---

### options

> `readonly` **options**: `C` _extends_ `OptionsConfig` ? `C`\<`C`\> : `null`

#### Source

[cli/source/program/Command.ts:26](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L26)

---

### parameters

> `readonly` **parameters**: `B` _extends_ `ParametersConfig` ? `B`\<`B`\> : `null`

#### Source

[cli/source/program/Command.ts:25](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L25)

## Methods

### parseArguments()

> **parseArguments**(`argv`): `Arguments`\<`object`\>

Parses a list of command line arguments into an arguments object. Parser is pre-configured based on
this command.

#### Parameters

• **argv**: `Argv`

#### Returns

`Arguments`\<`object`\>

##### allowUnknownOptions

> **allowUnknownOptions**: `D`

##### allowUnknownParameters

> **allowUnknownParameters**: `E`

##### commands

> **commands**: readonly [`A`]

##### options

> **options**: `C`

##### parameters

> **parameters**: `B`

#### Source

[cli/source/program/Command.ts:82](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L82)

---

### run()

> **run**(`parsedArgs`, `program`): `Promise`\<`void`\>

Executes command action with provided parsed arguments and [Program](Program.md) instance.

#### Parameters

• **parsedArgs**: `Arguments`\<`object`\>

• **program**: [`Program`](Program.md)

#### Returns

`Promise`\<`void`\>

#### Source

[cli/source/program/Command.ts:107](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/cli/source/program/Command.ts#L107)
