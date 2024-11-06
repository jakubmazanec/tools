[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\>: `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Parsed options.

## Type parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Source

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/args/source/ArgumentsOptions.ts#L79)
