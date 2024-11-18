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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/29163046acd1da0224b08fd05ca40f385e9ab4e5/packages/args/source/ArgumentsOptions.ts#L79)
