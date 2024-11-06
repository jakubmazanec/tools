[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type Alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\>: `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Parsed options.

## Type Parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Defined in

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/args/source/ArgumentsOptions.ts#L79)
