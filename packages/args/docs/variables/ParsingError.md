[**@jakubmazanec/args**](../README.md)

---

# Variable: ParsingError()

> `const` **ParsingError**: (`code`, `options`?) => `CustomError`\<`"INVALID_PARAMETER"` \|
> `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

A subclass of `Error` that indicates a parsing failure.

## Parameters

### code

`"INVALID_PARAMETER"` | `"UNKNOWN_PARAMETER"` | `"INVALID_OPTION"` | `"UNKNOWN_OPTION"`

### options?

`CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

## Defined in

[args/source/ParsingError.ts:6](https://github.com/jakubmazanec/tools/blob/077fa4993ebe623b1c463499cc41912353ae6eb1/packages/args/source/ParsingError.ts#L6)
