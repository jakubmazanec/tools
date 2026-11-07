[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: CommandAction\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\> = (`parsedArgs`, `program`) => `Promise`\<`void`\>

Defined in:
[cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/ef3a0c83d217cca7411f534708a95e6cd278e00f/packages/cli/source/program/CommandAction.ts#L8)

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
