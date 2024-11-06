[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type Alias: CommandAction()\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\>: (`parsedArgs`, `program`) => `Promise`\<`void`\>

Command action.

## Type Parameters

• **A** _extends_ `string`

• **B** _extends_ `ParametersConfig` \| `undefined` = `undefined`

• **C** _extends_ `OptionsConfig` \| `undefined` = `undefined`

• **D** _extends_ `boolean` = `false`

• **E** _extends_ `boolean` = `false`

## Parameters

• **parsedArgs**: `Arguments`\<`object`\>

• **program**: [`Program`](../classes/Program.md)

## Returns

`Promise`\<`void`\>

## Defined in

[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/cli/source/program/CommandAction.ts#L8)
