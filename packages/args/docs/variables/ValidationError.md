[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Variable: ValidationError()

> `const` **ValidationError**: (`code`, `options`?) => `CustomError`\<`"INVALID_COMMAND"` \|
> `"MISSING_PARAMETER"` \| `"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"`
> \| `"MISSING_OPTION"` \| `"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \|
> `"REPEATED_OPTION_NAME"` \| `"INVALID_OPTION_ARITY"` \| `"UNKNOWN_ERROR"`\>

A subclass of `Error` that indicates a validation issue.

## Parameters

• **code**: `"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \|
`"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \|
`"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \|
`"INVALID_OPTION_ARITY"`

• **options?**: `CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \|
`"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \|
`"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \|
`"INVALID_OPTION_ARITY"` \| `"UNKNOWN_ERROR"`\>

## Source

[args/source/ValidationError.ts:6](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/args/source/ValidationError.ts#L6)
