[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ParserConfig

> **ParserConfig**: `object`

Defined in:
[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/args/source/ParserConfig.ts#L6)

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
