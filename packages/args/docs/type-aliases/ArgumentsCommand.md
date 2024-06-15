[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`\>: `Omit`\<`O`, `"commands"`\> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Parsed command.

## Type parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Source

[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/args/source/ArgumentsCommand.ts#L4)
