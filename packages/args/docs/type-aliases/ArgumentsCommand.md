[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type Alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`\>: `Omit`\<`O`, `"commands"`\> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Parsed command.

## Type Parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)

## Defined in

[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/3137813ef46c72d3c081751f960a2aa2c61ad567/packages/args/source/ArgumentsCommand.ts#L4)
