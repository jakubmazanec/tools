[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: CommandAction\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`> \> = (`parsedArgs`, `program`) => `Promise`\<`void`>\>

Defined in:
[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/36b99004a93b06a721cdb2d08a00e55c653d227d/packages/cli/source/program/CommandAction.ts#L8)

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
