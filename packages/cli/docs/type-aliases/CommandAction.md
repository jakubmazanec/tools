[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: CommandAction()\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\>: (`parsedArgs`, `program`) => `Promise`\<`void`\>

Defined in:
[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/40ba1fb8bbde716fbe797d7886fffe14521e098a/packages/cli/source/program/CommandAction.ts#L8)

Command action.

## Type Parameters

• **A** _extends_ `string`

• **B** _extends_ `ParametersConfig` \| `undefined` = `undefined`

• **C** _extends_ `OptionsConfig` \| `undefined` = `undefined`

• **D** _extends_ `boolean` = `false`

• **E** _extends_ `boolean` = `false`

## Parameters

### parsedArgs

`Arguments`\<\{ `allowUnknownOptions`: `D`; `allowUnknownParameters`: `E`; `commands`: readonly
\[`A`\]; `options`: `C`; `parameters`: `B`; \}\>

### program

[`Program`](../classes/Program.md)

## Returns

`Promise`\<`void`\>
