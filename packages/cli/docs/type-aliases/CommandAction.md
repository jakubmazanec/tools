[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: CommandAction()\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\> = (`parsedArgs`, `program`) => `Promise`\<`void`\>

Defined in:
[packages/cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/cli/source/program/CommandAction.ts#L8)

Command action.

## Type Parameters

### A

`A` _extends_ `string`

### B

`B` _extends_ `ParametersConfig` \| `undefined` = `undefined`

### C

`C` _extends_ `OptionsConfig` \| `undefined` = `undefined`

### D

`D` _extends_ `boolean` = `false`

### E

`E` _extends_ `boolean` = `false`

## Parameters

### parsedArgs

`Arguments`\<\{ `allowUnknownOptions`: `D`; `allowUnknownParameters`: `E`; `commands`: readonly
\[`A`\]; `options`: `C`; `parameters`: `B`; \}\>

### program

[`Program`](../classes/Program.md)

## Returns

`Promise`\<`void`\>
