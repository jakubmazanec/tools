[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type Alias: Arguments\<T\>

> **Arguments**\<`T`\>: `object`

Parsed arguments.

## Type Parameters

• **T** _extends_ [`ParserConfig`](ParserConfig.md)

## Type declaration

### command

> `readonly` **command**: [`ArgumentsCommand`](ArgumentsCommand.md)\<`T`\>

Parsed command.

### errors

> `readonly` **errors**: `Error`[]

Parsing and validation rrors

### options

> `readonly` **options**: [`ArgumentsOptions`](ArgumentsOptions.md)\<`T`\>

Parsed options.

### parameters

> `readonly` **parameters**: [`ArgumentsParameters`](ArgumentsParameters.md)\<`T`\>

Parsed parameters.

### rest

> `readonly` **rest**: `string`[]

Arguments that appear after "--".

### unknownOptions

> `readonly` **unknownOptions**: [`ArgumentsUnknownOptions`](ArgumentsUnknownOptions.md)\<`T`\>

Unconfigured options.

## Defined in

[args/source/Arguments.ts:10](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/args/source/Arguments.ts#L10)
