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

[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/args/source/ArgumentsCommand.ts#L4)
