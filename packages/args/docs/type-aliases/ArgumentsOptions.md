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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/js-tools/blob/4653f1571319b3537b5a901a19e171562b7727e5/packages/args/source/ArgumentsOptions.ts#L79)
