[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type alias: ArgumentsParameters\<O\>

> **ArgumentsParameters**\<`O`\>: `Omit`\<`O`, `"parameters"`\> _extends_ `O` ?
> `O`\[`"allowUnknownParameters"`\] _extends_ `true` ? [`...string[]`] : `null` :
> `O`\[`"parameters"`\] _extends_ `undefined` ? `null` : `O`\[`"allowUnknownParameters"`\] _extends_
> `true` ? `ParametersConfigToVariadicArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>
> : `ParametersConfigToArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>

Parsed parameters.

## Type parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Source

[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/args/source/ArgumentsParameters.ts#L141)
