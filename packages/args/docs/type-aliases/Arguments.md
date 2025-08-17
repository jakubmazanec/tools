[**@jakubmazanec/args**](../README.md)

---

# Type Alias: Arguments\<T\>

> **Arguments**\<`T`\> = `object`

Defined in:
[args/source/Arguments.ts:10](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L10)

Parsed arguments.

## Type Parameters

### T

`T` _extends_ [`ParserConfig`](ParserConfig.md)

## Properties

### command

> `readonly` **command**: [`ArgumentsCommand`](ArgumentsCommand.md)\<`T`\>

Defined in:
[args/source/Arguments.ts:12](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L12)

Parsed command.

---

### errors

> `readonly` **errors**: `Error`[]

Defined in:
[args/source/Arguments.ts:27](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L27)

Parsing and validation rrors

---

### options

> `readonly` **options**: [`ArgumentsOptions`](ArgumentsOptions.md)\<`T`\>

Defined in:
[args/source/Arguments.ts:18](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L18)

Parsed options.

---

### parameters

> `readonly` **parameters**: [`ArgumentsParameters`](ArgumentsParameters.md)\<`T`\>

Defined in:
[args/source/Arguments.ts:15](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L15)

Parsed parameters.

---

### rest

> `readonly` **rest**: `string`[]

Defined in:
[args/source/Arguments.ts:24](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L24)

Arguments that appear after "--".

---

### unknownOptions

> `readonly` **unknownOptions**: [`ArgumentsUnknownOptions`](ArgumentsUnknownOptions.md)\<`T`\>

Defined in:
[args/source/Arguments.ts:21](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/args/source/Arguments.ts#L21)

Unconfigured options.
