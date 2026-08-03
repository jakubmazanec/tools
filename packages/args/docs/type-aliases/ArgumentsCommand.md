[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ArgumentsCommand\<O\>

> **ArgumentsCommand**\<`O`> \> = `Omit`\<`O`, `"commands"`> \> _extends_ `O` ? `null` :
> `O`\[`"commands"`\] _extends_ `undefined` ? `null` :
> `Lowercase`\<`NonNullable`\<`O`\[`"commands"`\]\>\[`number`\]\> \| `undefined`

Defined in:
[args/source/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/tools/blob/5440cb509cb4ec7a792c8768f79dc0266aab15d1/packages/args/source/ArgumentsCommand.ts#L4)

Parsed command.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](ParserConfig.md)
