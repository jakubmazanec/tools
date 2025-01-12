[**@jakubmazanec/args**](../README.md)

---

# Variable: ParsingError()

> `const` **ParsingError**: (`code`, `options`?) => `CustomError`\<`"INVALID_PARAMETER"` \|
> `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

Defined in:
[args/source/ParsingError.ts:6](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/args/source/ParsingError.ts#L6)

A subclass of `Error` that indicates a parsing failure.

## Parameters

### code

`"INVALID_PARAMETER"` | `"UNKNOWN_PARAMETER"` | `"INVALID_OPTION"` | `"UNKNOWN_OPTION"`

### options?

`CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>
