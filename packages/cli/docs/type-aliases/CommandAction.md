[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: CommandAction()\<A, B, C, D, E\>

> **CommandAction**\<`A`, `B`, `C`, `D`, `E`\> = (`parsedArgs`, `program`) => `Promise`\<`void`\>

Defined in:
[packages/cli/source/program/CommandAction.ts:8](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/cli/source/program/CommandAction.ts#L8)

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
