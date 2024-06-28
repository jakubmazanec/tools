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

[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/args/source/ArgumentsParameters.ts#L141)
