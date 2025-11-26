[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`\> = `Omit`\<`O`, `"commands"`\> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Defined in:
[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/args/source/ArgumentsCommand.ts#L4)

Parsed command.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
