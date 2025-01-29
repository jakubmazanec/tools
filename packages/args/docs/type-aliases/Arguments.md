[**@jakubmazanec/args**](../README.md)

---

# Type Alias: Arguments\<T\>

> **Arguments**\<`T`\>: `object`

Defined in:
[args/source/Arguments.ts:10](https://github.com/jakubmazanec/tools/blob/0373298af23ca7b778987184cd6fcccd21ae54be/packages/args/source/Arguments.ts#L10)

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
