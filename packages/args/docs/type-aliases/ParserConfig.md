[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type alias: ParserConfig

> **ParserConfig**: `object`

Parser configuration specifies how the command line arguments should be parsed.

## Type declaration

### allowUnknownOptions?

> `optional` **allowUnknownOptions**: `boolean`

Allow parsing unknown options.

### allowUnknownParameters?

> `optional` **allowUnknownParameters**: `boolean`

Allow parsing unknown parameters.

### commands?

> `optional` **commands**: [`CommandsConfig`](CommandsConfig.md)

Commands configuration.

### options?

> `optional` **options**: [`OptionsConfig`](OptionsConfig.md)

Options configuration.

### parameters?

> `optional` **parameters**: [`ParametersConfig`](ParametersConfig.md)

Parameters configuration.

## Source

[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/args/source/ParserConfig.ts#L6)
