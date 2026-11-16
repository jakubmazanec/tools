[**@jakubmazanec/args**](../README.md)

---

# Variable: ValidationError

> `const` **ValidationError**: new (`code`, `options?`) => `CustomError`\<`"INVALID_COMMAND"` \|
> `"MISSING_PARAMETER"` \| `"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"`
> \| `"MISSING_OPTION"` \| `"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \|
> `"REPEATED_OPTION_NAME"` \| `"INVALID_OPTION_ARITY"` \| `"UNKNOWN_ERROR"`\>

Defined in:
[args/source/ValidationError.ts:6](https://github.com/jakubmazanec/tools/blob/66efa054b871c783405ec2cb1e4ebd507a77039a/packages/args/source/ValidationError.ts#L6)

A subclass of `Error` that indicates a validation issue.

## Parameters

### code

`"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \| `"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \|
`"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \| `"INVALID_OPTION_DEFAULT_AND_CHOICES"` \|
`"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \| `"INVALID_OPTION_ARITY"`

### options?

`CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_COMMAND"` \| `"MISSING_PARAMETER"` \|
`"INVALID_PARAMETER_DEFAULT_AND_CHOICES"` \| `"INVALID_PARAMETER_ORDER"` \| `"MISSING_OPTION"` \|
`"INVALID_OPTION_DEFAULT_AND_CHOICES"` \| `"INVALID_OPTION_NAME"` \| `"REPEATED_OPTION_NAME"` \|
`"INVALID_OPTION_ARITY"` \| `"UNKNOWN_ERROR"`\>
