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

[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/args/source/ArgumentsCommand.ts#L4)
