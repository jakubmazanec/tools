[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type Alias: ArgumentsParameters\<O\>

> **ArgumentsParameters**\<`O`\>: `Omit`\<`O`, `"parameters"`\> _extends_ `O` ?
> `O`\[`"allowUnknownParameters"`\] _extends_ `true` ? [`...string[]`] : `null` :
> `O`\[`"parameters"`\] _extends_ `undefined` ? `null` : `O`\[`"allowUnknownParameters"`\] _extends_
> `true` ? `ParametersConfigToVariadicArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>
> : `ParametersConfigToArgumentsParameters`\<`NonNullable`\<`O`\[`"parameters"`\]\>\>

Parsed parameters.

## Type Parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Defined in

[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/tools/blob/053e1fea9cfce27a70a78b00a30cdd281cb0a72b/packages/args/source/ArgumentsParameters.ts#L141)
