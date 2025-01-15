[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`\>: `Omit`\<`O`, `"commands"`\> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Defined in:
[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/args/source/ArgumentsCommand.ts#L4)

Parsed command.

## Type Parameters

• **O** _extends_ [`ParserConfig`](ParserConfig.md)
