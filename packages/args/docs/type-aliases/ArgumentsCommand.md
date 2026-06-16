[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`\> = `Omit`\<`O`, `"commands"`\> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Defined in:
[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/b0bb0183149e2989c9979a7ef92189054e923365/packages/args/source/ArgumentsCommand.ts#L4)

Parsed command.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
