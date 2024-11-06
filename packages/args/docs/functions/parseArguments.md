[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Function: parseArguments()

> **parseArguments**\<`O`\>(`argv`, `parserConfig`):
> [`Arguments`](../type-aliases/Arguments.md)\<`O`\>

Parses a list of command line arguments into an arguments object. Based on provided parser config,
raw arguments can be parsed as commands, options and parameters.

## Type Parameters

• **O** _extends_ [`ParserConfig`](../type-aliases/ParserConfig.md)

## Parameters

• **argv**: [`Argv`](../type-aliases/Argv.md)

Raw arguments to be parsed.

• **parserConfig**: `O`

Parser configuration.

## Returns

[`Arguments`](../type-aliases/Arguments.md)\<`O`\>

Parsed arguments.

## Defined in

[args/source/parseArguments.ts:48](https://github.com/jakubmazanec/tools/blob/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4/packages/args/source/parseArguments.ts#L48)
