[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ParserConfig

> **ParserConfig**: `object`

Defined in:
[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/adfe44f908094c1d1cdf19837842b33066bbd9d7/packages/args/source/ParserConfig.ts#L6)

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
