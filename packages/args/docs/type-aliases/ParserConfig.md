[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type Alias: ParserConfig

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

## Defined in

[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/053e1fea9cfce27a70a78b00a30cdd281cb0a72b/packages/args/source/ParserConfig.ts#L6)
