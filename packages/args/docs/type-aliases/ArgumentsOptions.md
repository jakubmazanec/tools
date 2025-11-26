[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsOptions\<O\>

> **ArgumentsOptions**\<`O`\> = `Omit`\<`O`, `"options"`\> _extends_ `O` ? `null` :
> `O`\[`"options"`\] _extends_ `undefined` ? `null` :
> `OptionsConfigToArgumentsOptions`\<`NonNullable`\<`O`\[`"options"`\]\>\>

Defined in:
[args/source/ArgumentsOptions.ts:79](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/args/source/ArgumentsOptions.ts#L79)

Parsed options.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
