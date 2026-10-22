[**@jakubmazanec/args**](../README.md)

---

# Variable: ParsingError

> `const` **ParsingError**: (`code`, `options?`) => `CustomError`\<`"INVALID_PARAMETER"` \|
> `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>

Defined in:
[args/source/ParsingError.ts:6](https://github.com/jakubmazanec/tools/blob/cb8264c831f1e3ca31cf4c8013393ebc056dc355/packages/args/source/ParsingError.ts#L6)

A subclass of `Error` that indicates a parsing failure.

## Parameters

### code

`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"`

### options?

`CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>
