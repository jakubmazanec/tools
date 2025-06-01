[**@jakubmazanec/carson**](../README.md)

---

# Variable: CarsonTemplateError()

> `const` **CarsonTemplateError**: (`code`, `options?`) =>
> `CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
> `"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"INVALID_SNAPSHOT"` \|
> `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `CarsonTemplateErrorData`\>

Defined in:
[packages/carson/source/template/CarsonTemplateError.ts:6](https://github.com/jakubmazanec/tools/blob/a9ba87d349a220bbed24d161794f90a6ba6009e5/packages/carson/source/template/CarsonTemplateError.ts#L6)

A subclass of `Error` that indicates a Carson template failure.

## Parameters

### code

`"INVALID_CARSON_TEMPLATE_ID"` | `"CARSON_TEMPLATE_NOT_FOUND"` | `"STRATEGY_UNSUPPORTED_EXTENSION"`
| `"STRATEGY_MISSING_FILE"` | `"INVALID_SNAPSHOT"` | `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`CarsonTemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
`"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"INVALID_SNAPSHOT"` \|
`"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `CarsonTemplateErrorData`\>
