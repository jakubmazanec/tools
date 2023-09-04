# @jakubmazanec/args

## Table of contents

### Type Aliases

- [Arguments](README.md#arguments)
- [ArgumentsCommand](README.md#argumentscommand)
- [ArgumentsOptions](README.md#argumentsoptions)
- [ArgumentsParameters](README.md#argumentsparameters)
- [ArgumentsUnknownOptions](README.md#argumentsunknownoptions)
- [Argv](README.md#argv)
- [BooleanOptionConfig](README.md#booleanoptionconfig)
- [BooleanParameterConfig](README.md#booleanparameterconfig)
- [BooleansOptionConfig](README.md#booleansoptionconfig)
- [CommandConfig](README.md#commandconfig)
- [CommandsConfig](README.md#commandsconfig)
- [CountOptionConfig](README.md#countoptionconfig)
- [LongOptionName](README.md#longoptionname)
- [NumberOptionConfig](README.md#numberoptionconfig)
- [NumberParameterConfig](README.md#numberparameterconfig)
- [NumbersOptionConfig](README.md#numbersoptionconfig)
- [OptionConfig](README.md#optionconfig)
- [OptionsConfig](README.md#optionsconfig)
- [ParameterConfig](README.md#parameterconfig)
- [ParametersConfig](README.md#parametersconfig)
- [ParserConfig](README.md#parserconfig)
- [ShortOptionName](README.md#shortoptionname)
- [StringOptionConfig](README.md#stringoptionconfig)
- [StringParameterConfig](README.md#stringparameterconfig)
- [StringsOptionConfig](README.md#stringsoptionconfig)

### Variables

- [ParsingError](README.md#parsingerror)
- [ValidationError](README.md#validationerror)

### Functions

- [parseArguments](README.md#parsearguments)

## Type Aliases

### Arguments

Ƭ **Arguments**<`T`\>: `Object`

Parsed arguments.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `T`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Type declaration

| Name             | Type                                                                 | Description                       |
| :--------------- | :------------------------------------------------------------------- | :-------------------------------- |
| `command`        | [`ArgumentsCommand`](README.md#argumentscommand)<`T`\>               | Parsed command.                   |
| `errors`         | `Error`[]                                                            | Parsing and validation rrors      |
| `options`        | [`ArgumentsOptions`](README.md#argumentsoptions)<`T`\>               | Parsed options.                   |
| `parameters`     | [`ArgumentsParameters`](README.md#argumentsparameters)<`T`\>         | Parsed parameters.                |
| `rest`           | `string`[]                                                           | Arguments that appear after "--". |
| `unknownOptions` | [`ArgumentsUnknownOptions`](README.md#argumentsunknownoptions)<`T`\> | Unconfigured options.             |

#### Defined in

[args/src/Arguments.ts:10](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/Arguments.ts#L10)

---

### ArgumentsCommand

Ƭ **ArgumentsCommand**<`O`\>: `Omit`<`O`, `"commands"`\> extends `O` ? `null` : `O`[``"commands"``]
extends `undefined` ? `null` : `Lowercase`<`NonNullable`<`O`[``"commands"``]\>[`number`]\> \|
`undefined`

Parsed command.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `O`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Defined in

[args/src/ArgumentsCommand.ts:4](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ArgumentsCommand.ts#L4)

---

### ArgumentsOptions

Ƭ **ArgumentsOptions**<`O`\>: `Omit`<`O`, `"options"`\> extends `O` ? `null` : `O`[``"options"``]
extends `undefined` ? `null` :
`OptionsConfigToArgumentsOptions`<`NonNullable`<`O`[``"options"``]\>\>

Parsed options.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `O`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Defined in

[args/src/ArgumentsOptions.ts:85](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ArgumentsOptions.ts#L85)

---

### ArgumentsParameters

Ƭ **ArgumentsParameters**<`O`\>: `Omit`<`O`, `"parameters"`\> extends `O` ?
`O`[``"allowUnknownParameters"``] extends `true` ? [...string[]] : `null` : `O`[``"parameters"``]
extends `undefined` ? `null` : `O`[``"allowUnknownParameters"``] extends `true` ?
`ParametersConfigToVariadicArgumentsParameters`<`NonNullable`<`O`[``"parameters"``]\>\> :
`ParametersConfigToArgumentsParameters`<`NonNullable`<`O`[``"parameters"``]\>\>

Parsed parameters.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `O`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Defined in

[args/src/ArgumentsParameters.ts:150](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ArgumentsParameters.ts#L150)

---

### ArgumentsUnknownOptions

Ƭ **ArgumentsUnknownOptions**<`O`\>: `O`[``"allowUnknownOptions"``] extends `true` ?
`Record`<`string`, `unknown`\> : `null`

Unknown options. Unknown options are always parsed as strings.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `O`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Defined in

[args/src/ArgumentsUnknownOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ArgumentsUnknownOptions.ts#L4)

---

### Argv

Ƭ **Argv**: `string`[]

Unparsed arguments.

#### Defined in

[args/src/Argv.ts:2](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/Argv.ts#L2)

---

### BooleanOptionConfig

Ƭ **BooleanOptionConfig**: { `count?`: `false` ; `defaultValue?`: `undefined` ; `description?`:
`string` ; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`) => `void` } \| { `count?`: `false` ; `defaultValue`: `boolean` ; `description?`: `string`
; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`) => `void` } \| { `count?`: `false` ; `defaultValue?`: `undefined` ; `description?`:
`string` ; `multiple?`: `false` ; `required`: `true` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`) => `void` }

#### Defined in

[args/src/OptionConfig.ts:5](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L5)

---

### BooleanParameterConfig

Ƭ **BooleanParameterConfig**: { `defaultValue?`: `undefined` ; `description?`: `string` ; `label?`:
`string` ; `required?`: `false` ; `type`: `"boolean"` ; `validate?`: (`value`: `boolean`) => `void`
} \| { `defaultValue`: `boolean` ; `description?`: `string` ; `label?`: `string` ; `required?`:
`false` ; `type`: `"boolean"` ; `validate?`: (`value`: `boolean`) => `void` } \| { `defaultValue?`:
`undefined` ; `description?`: `string` ; `label?`: `string` ; `required`: `true` ; `type`:
`"boolean"` ; `validate?`: (`value`: `boolean`) => `void` }

#### Defined in

[args/src/ParameterConfig.ts:3](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParameterConfig.ts#L3)

---

### BooleansOptionConfig

Ƭ **BooleansOptionConfig**: { `arity?`: `number` ; `count?`: `false` ; `defaultValue?`: `undefined`
; `description?`: `string` ; `multiple`: `true` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`[]) => `void` } \| { `arity?`: `number` ; `count?`: `false` ; `defaultValue`: readonly
`boolean`[] ; `description?`: `string` ; `multiple`: `true` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`[]) => `void` } \| { `arity?`: `number` ; `count?`: `false` ; `defaultValue?`: `undefined`
; `description?`: `string` ; `multiple`: `true` ; `required`: `true` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"boolean"` ; `validate?`: (`value`:
`boolean`[]) => `void` }

#### Defined in

[args/src/OptionConfig.ts:40](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L40)

---

### CommandConfig

Ƭ **CommandConfig**: `string`

Parser's command configuration.

#### Defined in

[args/src/CommandConfig.ts:2](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/CommandConfig.ts#L2)

---

### CommandsConfig

Ƭ **CommandsConfig**: readonly [[`CommandConfig`](README.md#commandconfig), ...CommandConfig[]]

Parser's commands configuration.

#### Defined in

[args/src/CommandsConfig.ts:4](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/CommandsConfig.ts#L4)

---

### CountOptionConfig

Ƭ **CountOptionConfig**: { `count`: `true` ; `defaultValue?`: `undefined` ; `description?`: `string`
; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` } \| { `count`: `true` ; `defaultValue`: `number` ; `description?`: `string` ;
`multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` } \| { `count`: `true` ; `defaultValue?`: `undefined` ; `description?`: `string`
; `multiple?`: `false` ; `required`: `true` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` }

#### Defined in

[args/src/OptionConfig.ts:157](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L157)

---

### LongOptionName

Ƭ **LongOptionName**: `string`

Long option name.

#### Defined in

[args/src/LongOptionName.ts:2](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/LongOptionName.ts#L2)

---

### NumberOptionConfig

Ƭ **NumberOptionConfig**: { `choices?`: readonly `number`[] ; `count?`: `false` ; `defaultValue?`:
`undefined` ; `description?`: `string` ; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` } \| { `choices?`: readonly `number`[] ; `count?`: `false` ; `defaultValue`:
`number` ; `description?`: `string` ; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` } \| { `choices?`: readonly `number`[] ; `count?`: `false` ; `defaultValue?`:
`undefined` ; `description?`: `string` ; `multiple?`: `false` ; `required`: `true` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`) => `void` }

#### Defined in

[args/src/OptionConfig.ts:78](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L78)

---

### NumberParameterConfig

Ƭ **NumberParameterConfig**: { `choices?`: readonly `number`[] ; `defaultValue?`: `undefined` ;
`description?`: `string` ; `label?`: `string` ; `required?`: `false` ; `type`: `"number"` ;
`validate?`: (`value`: `number`) => `void` } \| { `choices?`: readonly `number`[] ; `defaultValue`:
`number` ; `description?`: `string` ; `label?`: `string` ; `required?`: `false` ; `type`: `"number"`
; `validate?`: (`value`: `number`) => `void` } \| { `choices?`: readonly `number`[] ;
`defaultValue?`: `undefined` ; `description?`: `string` ; `label?`: `string` ; `required`: `true` ;
`type`: `"number"` ; `validate?`: (`value`: `number`) => `void` }

#### Defined in

[args/src/ParameterConfig.ts:32](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParameterConfig.ts#L32)

---

### NumbersOptionConfig

Ƭ **NumbersOptionConfig**: { `arity?`: `number` ; `choices?`: readonly `number`[] ; `count?`:
`false` ; `defaultValue?`: `undefined` ; `description?`: `string` ; `multiple`: `true` ;
`required?`: `false` ; `shortName?`: [`ShortOptionName`](README.md#shortoptionname) ; `type`:
`"number"` ; `validate?`: (`value`: `number`[]) => `void` } \| { `arity?`: `number` ; `choices?`:
readonly `number`[] ; `count?`: `false` ; `defaultValue`: readonly `number`[] ; `description?`:
`string` ; `multiple`: `true` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ; `validate?`: (`value`:
`number`[]) => `void` } \| { `arity?`: `number` ; `choices?`: readonly `number`[] ; `count?`:
`false` ; `defaultValue?`: `undefined` ; `description?`: `string` ; `multiple`: `true` ; `required`:
`true` ; `shortName?`: [`ShortOptionName`](README.md#shortoptionname) ; `type`: `"number"` ;
`validate?`: (`value`: `number`[]) => `void` }

#### Defined in

[args/src/OptionConfig.ts:116](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L116)

---

### OptionConfig

Ƭ **OptionConfig**: [`BooleanOptionConfig`](README.md#booleanoptionconfig) \|
[`BooleansOptionConfig`](README.md#booleansoptionconfig) \|
[`CountOptionConfig`](README.md#countoptionconfig) \|
[`NumberOptionConfig`](README.md#numberoptionconfig) \|
[`NumbersOptionConfig`](README.md#numbersoptionconfig) \|
[`StringOptionConfig`](README.md#stringoptionconfig) \|
[`StringsOptionConfig`](README.md#stringsoptionconfig)

Parser's option configuration.

#### Defined in

[args/src/OptionConfig.ts:272](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L272)

---

### OptionsConfig

Ƭ **OptionsConfig**: `Record`<`string`, [`OptionConfig`](README.md#optionconfig)\>

Parser's options configuration.

#### Defined in

[args/src/OptionsConfig.ts:4](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionsConfig.ts#L4)

---

### ParameterConfig

Ƭ **ParameterConfig**: [`BooleanParameterConfig`](README.md#booleanparameterconfig) \|
[`NumberParameterConfig`](README.md#numberparameterconfig) \|
[`StringParameterConfig`](README.md#stringparameterconfig)

Parser's parameter configuration.

#### Defined in

[args/src/ParameterConfig.ts:97](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParameterConfig.ts#L97)

---

### ParametersConfig

Ƭ **ParametersConfig**: readonly [[`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig)] \| readonly
[[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig)] \| readonly
[[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig)] \|
readonly [[`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig), [`ParameterConfig`](README.md#parameterconfig)] \|
readonly [[`ParameterConfig`](README.md#parameterconfig),
[`ParameterConfig`](README.md#parameterconfig)] \| readonly
[[`ParameterConfig`](README.md#parameterconfig)]

Parser's parameters configuration.

#### Defined in

[args/src/ParametersConfig.ts:4](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParametersConfig.ts#L4)

---

### ParserConfig

Ƭ **ParserConfig**: `Object`

Parser configuration specifies how the command line arguments should be parsed.

#### Type declaration

| Name                      | Type                                             | Description                       |
| :------------------------ | :----------------------------------------------- | :-------------------------------- |
| `allowUnknownOptions?`    | `boolean`                                        | Allow parsing unknown options.    |
| `allowUnknownParameters?` | `boolean`                                        | Allow parsing unknown parameters. |
| `commands?`               | [`CommandsConfig`](README.md#commandsconfig)     | Commands configuration.           |
| `options?`                | [`OptionsConfig`](README.md#optionsconfig)       | Options configuration.            |
| `parameters?`             | [`ParametersConfig`](README.md#parametersconfig) | Parameters configuration.         |

#### Defined in

[args/src/ParserConfig.ts:6](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParserConfig.ts#L6)

---

### ShortOptionName

Ƭ **ShortOptionName**: `"A"` \| `"a"` \| `"B"` \| `"b"` \| `"C"` \| `"c"` \| `"D"` \| `"d"` \| `"E"`
\| `"e"` \| `"F"` \| `"f"` \| `"G"` \| `"g"` \| `"H"` \| `"h"` \| `"I"` \| `"i"` \| `"J"` \| `"j"`
\| `"K"` \| `"k"` \| `"L"` \| `"l"` \| `"M"` \| `"m"` \| `"N"` \| `"n"` \| `"O"` \| `"o"` \| `"P"`
\| `"p"` \| `"Q"` \| `"q"` \| `"R"` \| `"r"` \| `"S"` \| `"s"` \| `"T"` \| `"t"` \| `"U"` \| `"u"`
\| `"V"` \| `"v"` \| `"W"` \| `"w"` \| `"X"` \| `"x"` \| `"Y"` \| `"y"` \| `"Z"` \| `"z"`

Short option name.

#### Defined in

[args/src/ShortOptionName.ts:2](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ShortOptionName.ts#L2)

---

### StringOptionConfig

Ƭ **StringOptionConfig**: { `choices?`: readonly `string`[] ; `count?`: `false` ; `defaultValue?`:
`undefined` ; `description?`: `string` ; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"string"` ; `validate?`: (`value`:
`string`) => `void` } \| { `choices?`: readonly `string`[] ; `count?`: `false` ; `defaultValue`:
`string` ; `description?`: `string` ; `multiple?`: `false` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"string"` ; `validate?`: (`value`:
`string`) => `void` } \| { `choices?`: readonly `string`[] ; `count?`: `false` ; `defaultValue?`:
`undefined` ; `description?`: `string` ; `multiple?`: `false` ; `required`: `true` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"string"` ; `validate?`: (`value`:
`string`) => `void` }

#### Defined in

[args/src/OptionConfig.ts:192](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L192)

---

### StringParameterConfig

Ƭ **StringParameterConfig**: { `choices?`: readonly `string`[] ; `defaultValue?`: `undefined` ;
`description?`: `string` ; `label?`: `string` ; `required?`: `false` ; `type`: `"string"` ;
`validate?`: (`value`: `string`) => `void` } \| { `choices?`: readonly `string`[] ; `defaultValue`:
`string` ; `description?`: `string` ; `label?`: `string` ; `required?`: `false` ; `type`: `"string"`
; `validate?`: (`value`: `string`) => `void` } \| { `choices?`: readonly `string`[] ;
`defaultValue?`: `undefined` ; `description?`: `string` ; `label?`: `string` ; `required`: `true` ;
`type`: `"string"` ; `validate?`: (`value`: `string`) => `void` }

#### Defined in

[args/src/ParameterConfig.ts:64](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParameterConfig.ts#L64)

---

### StringsOptionConfig

Ƭ **StringsOptionConfig**: { `arity?`: `number` ; `choices?`: readonly `string`[] ; `count?`:
`false` ; `defaultValue?`: `undefined` ; `description?`: `string` ; `multiple`: `true` ;
`required?`: `false` ; `shortName?`: [`ShortOptionName`](README.md#shortoptionname) ; `type`:
`"string"` ; `validate?`: (`value`: `string`[]) => `void` } \| { `arity?`: `number` ; `choices?`:
readonly `string`[] ; `count?`: `false` ; `defaultValue`: readonly `string`[] ; `description?`:
`string` ; `multiple`: `true` ; `required?`: `false` ; `shortName?`:
[`ShortOptionName`](README.md#shortoptionname) ; `type`: `"string"` ; `validate?`: (`value`:
`string`[]) => `void` } \| { `arity?`: `number` ; `choices?`: readonly `string`[] ; `count?`:
`false` ; `defaultValue?`: `undefined` ; `description?`: `string` ; `multiple`: `true` ; `required`:
`true` ; `shortName?`: [`ShortOptionName`](README.md#shortoptionname) ; `type`: `"string"` ;
`validate?`: (`value`: `string`[]) => `void` }

#### Defined in

[args/src/OptionConfig.ts:230](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/OptionConfig.ts#L230)

## Variables

### ParsingError

• `Const` **ParsingError**: (`code`: `"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \|
`"INVALID_OPTION"` \| `"UNKNOWN_OPTION"`, `options?`: `CustomErrorOptions`) =>
`CustomError`<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

#### Type declaration

• **new ParsingError**(`code`, `options?`)

A subclass of `Error` that indicates a parsing failure.

##### Parameters

| Name       | Type                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------- |
| `code`     | `"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` |
| `options?` | `CustomErrorOptions`                                                                       |

#### Defined in

[args/src/ParsingError.ts:6](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ParsingError.ts#L6)

---

### ValidationError

• `Const` **ValidationError**: (`code`: `"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \|
`"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \|
`"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \|
`"INVALID_OPTION_ARITY"`, `options?`: `CustomErrorOptions`) => `CustomError`<`"INVALID_COMMAND"` \|
`"MISSING_PARAMETER"` \| `"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \|
`"MISSING_OPTION"` \| `"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \|
`"REPEATED_OPTION_NAME"` \| `"INVALID_OPTION_ARITY"` \| `"UNKNOWN_ERROR"`\>

#### Type declaration

• **new ValidationError**(`code`, `options?`)

A subclass of `Error` that indicates a validation issue.

##### Parameters

| Name       | Type                                                                                                                                                                                                                                                                        |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`     | `"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \| `"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \| `"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \| `"INVALID_OPTION_ARITY"` |
| `options?` | `CustomErrorOptions`                                                                                                                                                                                                                                                        |

#### Defined in

[args/src/ValidationError.ts:6](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/ValidationError.ts#L6)

## Functions

### parseArguments

▸ **parseArguments**<`O`\>(`argv`, `parserConfig`): [`Arguments`](README.md#arguments)<`O`\>

Parses a list of command line arguments into an arguments object. Based on provided parser config,
raw arguments can be parsed as commands, options and parameters.

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `O`  | extends [`ParserConfig`](README.md#parserconfig) |

#### Parameters

| Name           | Type                     | Description                 |
| :------------- | :----------------------- | :-------------------------- |
| `argv`         | [`Argv`](README.md#argv) | Raw arguments to be parsed. |
| `parserConfig` | `O`                      | Parser configuration.       |

#### Returns

[`Arguments`](README.md#arguments)<`O`\>

Parsed arguments.

#### Defined in

[args/src/parseArguments.ts:48](https://github.com/jakubmazanec/js-tools/blob/07ff4d8/packages/args/src/parseArguments.ts#L48)
