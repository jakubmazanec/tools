[**@jakubmazanec/args**](../README.md)

---

# Function: parseArguments()

> **parseArguments**\<`O`\>(`argv`, `parserConfig`):
> [`Arguments`](../type-aliases/Arguments.md)\<`O`\>

Defined in:
[args/source/parseArguments.ts:45](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/args/source/parseArguments.ts#L45)

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
