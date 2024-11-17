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

[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/2afd81e4680434017b6f838733fd5ccd928cec42/packages/args/source/ArgumentsCommand.ts#L4)
