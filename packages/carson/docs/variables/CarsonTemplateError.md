[**@jakubmazanec/carson**](../README.md)

---

# Variable: CarsonTemplateError()

> `const` **CarsonTemplateError**: (`code`, `options`?) =>
> `CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
> `"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"INVALID_SNAPSHOT"` \|
> `"UNKNOWN_ERROR"`, `CarsonTemplateErrorData`\>

A subclass of `Error` that indicates a Carson template failure.

## Parameters

### code

`"INVALID_CARSON_TEMPLATE_ID"` | `"CARSON_TEMPLATE_NOT_FOUND"` | `"STRATEGY_UNSUPPORTED_EXTENSION"`
| `"STRATEGY_MISSING_FILE"` | `"INVALID_SNAPSHOT"`

### options?

`CustomErrorWithDataOptions`\<`CarsonTemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
`"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"INVALID_SNAPSHOT"` \|
`"UNKNOWN_ERROR"`, `CarsonTemplateErrorData`\>

## Defined in

[packages/carson/source/template/CarsonTemplateError.ts:6](https://github.com/jakubmazanec/tools/blob/a4967209f10f2b04ade958bd873ac46f1290cee7/packages/carson/source/template/CarsonTemplateError.ts#L6)
