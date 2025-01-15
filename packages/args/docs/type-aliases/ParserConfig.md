[**@jakubmazanec/args**](../README.md)

---

# Type Alias: ParserConfig

> **ParserConfig**: `object`

Defined in:
[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/args/source/ParserConfig.ts#L6)

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
