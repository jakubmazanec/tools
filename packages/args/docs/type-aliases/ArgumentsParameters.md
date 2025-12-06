[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsParameters\<O\>

> **ArgumentsParameters**\<`O`\> = `Omit`\<`O`, `"parameters"`\> _extends_ `O` ?
> `O`\[`"allowUnknownParameters"`\] _extends_ `true` ? \[`...string[]`\] : `null` :
> `O`\[`"parameters"`\] _extends_ `undefined` ? `null` : `O`\[`"allowUnknownParameters"`\] _extends_
> `true` ? `ParametersConfigToVariadicArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>
> : `ParametersConfigToArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>

Defined in:
[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/tools/blob/4b0540484b6010d133c2a5e92e51cdd4ed82edb4/packages/args/source/ArgumentsParameters.ts#L141)

Parsed parameters.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
