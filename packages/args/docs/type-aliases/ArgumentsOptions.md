[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\>: `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Defined in:
[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/40ba1fb8bbde716fbe797d7886fffe14521e098a/packages/args/source/ArgumentsOptions.ts#L79)

Parsed options.

## Type Parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)
