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

[args/source/ParserConfig.ts:6](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/args/source/ParserConfig.ts#L6)
