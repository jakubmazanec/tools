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

[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/cli/source/program/CommandAction.ts#L8)
