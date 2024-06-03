[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type alias: CommandAction()\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\>: (`parsedArgs`, `program`) => `Promise`\<`void`\>

Command action.

## Type parameters

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

## Source

[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/cli/source/program/CommandAction.ts#L8)
