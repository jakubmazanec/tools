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

[packages/carson/source/template/CarsonTemplateError.ts:6](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/carson/source/template/CarsonTemplateError.ts#L6)
