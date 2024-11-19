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

[args/source/ArgumentsParameters.ts:141](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/args/source/ArgumentsParameters.ts#L141)
