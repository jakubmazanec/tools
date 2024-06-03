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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/js-tools/blob/7be96c9bc335915647cfe729050b17fe2580309a/packages/args/source/ArgumentsOptions.ts#L79)
