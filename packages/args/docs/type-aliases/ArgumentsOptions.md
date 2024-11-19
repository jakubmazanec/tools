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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/args/source/ArgumentsOptions.ts#L79)
