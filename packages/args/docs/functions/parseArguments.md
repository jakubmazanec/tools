[**@jakubmazanec/args**](../README.md)

---

# Function: parseArguments()

> **parseArguments**\<`O`\>(`argv`, `parserConfig`):
> [`Arguments`](../type-aliases/Arguments.md)\<`O`\>

Defined in:
[args/source/parseArguments.ts:46](https://github.com/jakubmazanec/tools/blob/9041b493988a4f48f72a1cda839ea48fba933ec4/packages/args/source/parseArguments.ts#L46)

Parses a list of command line arguments into an arguments object. Based on provided parser config,
raw arguments can be parsed as commands, options and parameters.

## Type Parameters

### O

`O` _extends_ [`ParserConfig`](../type-aliases/ParserConfig.md)

## Parameters

### argv

[`Argv`](../type-aliases/Argv.md)

Raw arguments to be parsed.

### parserConfig

`O`

Parser configuration.

## Returns

[`Arguments`](../type-aliases/Arguments.md)\<`O`\>

Parsed arguments.
