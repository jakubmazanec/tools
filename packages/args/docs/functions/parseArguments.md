[**@jakubmazanec/args**](../README.md)

---

# Function: parseArguments()

> **parseArguments**\<`O`>\>(`argv`, `parserConfig`):
> [`Arguments`](../type-aliases/Arguments.md)\<`O`>\>

Defined in:
[args/source/parseArguments.ts:44](https://github.com/jakubmazanec/tools/blob/5440cb509cb4ec7a792c8768f79dc0266aab15d1/packages/args/source/parseArguments.ts#L44)

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
