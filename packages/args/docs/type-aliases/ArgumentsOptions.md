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

[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/args/source/ArgumentsOptions.ts#L79)
