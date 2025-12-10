[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\> = `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Defined in:
[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/args/source/ArgumentsOptions.ts#L79)

Parsed options.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
