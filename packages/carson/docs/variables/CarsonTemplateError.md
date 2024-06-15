[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Variable: CarsonTemplateError()

> `const` **CarsonTemplateError**: (`code`, `options`?) =>
> `CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
> `"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"UNKNOWN_ERROR"`,
> `CarsonTemplateErrorData`\>

A subclass of `Error` that indicates a Carson template failure.

## Parameters

• **code**: `"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
`"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"`

• **options?**: `CustomErrorWithDataOptions`\<`CarsonTemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
`"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"UNKNOWN_ERROR"`,
`CarsonTemplateErrorData`\>

## Source

[packages/carson/source/template/CarsonTemplateError.ts:6](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/template/CarsonTemplateError.ts#L6)
