[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\> = `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Defined in:
[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/4b0540484b6010d133c2a5e92e51cdd4ed82edb4/packages/args/source/ArgumentsOptions.ts#L79)

Parsed options.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
