[**@jakubmazanec/args**](../README.md)

---

# Variable: ParsingError

> `const` **ParsingError**: (`code`, `options?`) => `CustomError`\<`"INVALID_PARAMETER"` \|
> `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`>\>

Defined in:
[args/source/ParsingError.ts:6](https://github.com/jakubmazanec/tools/blob/5440cb509cb4ec7a792c8768f79dc0266aab15d1/packages/args/source/ParsingError.ts#L6)

A subclass of `Error` that indicates a parsing failure.

## Parameters

### code

`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \| `"UNKNOWN_OPTION"`

### options?

`CustomErrorOptions`

## Returns

`CustomError`\<`"INVALID_PARAMETER"` \| `"UNKNOWN_PARAMETER"` \| `"INVALID_OPTION"` \|
`"UNKNOWN_OPTION"` \| `"UNKNOWN_ERROR"`\>
