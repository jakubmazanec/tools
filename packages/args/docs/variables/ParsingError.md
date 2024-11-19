[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Variable: ParsingError()

> `const` **ParsingError**: (`code`, `options`?) => `CustomError`\<`"INVALID_PARAMETER"` \|
> `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

A subclass of `Error` that indicates a parsing failure.

## Parameters

• **code**: `"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"`

• **options?**: `CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

## Defined in

[args/source/ParsingError.ts:6](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/args/source/ParsingError.ts#L6)
