[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsParameters\<O\>

> **ArgumentsParameters**\<`O`\> = `Omit`\<`O`, `"parameters"`\> _extends_ `O` ?
> `O`\[`"allowUnknownParameters"`\] _extends_ `true` ? \[`...string[]`\] : `null` :
> `O`\[`"parameters"`\] _extends_ `undefined` ? `null` : `O`\[`"allowUnknownParameters"`\] _extends_
> `true` ? `ParametersConfigToVariadicArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>
> : `ParametersConfigToArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>

Defined in:
[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/tools/blob/a9ba87d349a220bbed24d161794f90a6ba6009e5/packages/args/source/ArgumentsParameters.ts#L141)

Parsed parameters.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
