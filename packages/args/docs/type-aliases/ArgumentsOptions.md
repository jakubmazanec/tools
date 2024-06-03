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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/args/source/ArgumentsOptions.ts#L79)
