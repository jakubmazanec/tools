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

[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/args/source/ArgumentsParameters.ts#L141)
