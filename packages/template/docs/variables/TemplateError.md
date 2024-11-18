[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Variable: TemplateError()

> `const` **TemplateError**: (`code`, `options`?) => `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"`
> \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

A subclass of `Error` that indicates a template failure.

## Parameters

• **code**: `"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"`

• **options?**: `CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>

## Defined in

[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/29163046acd1da0224b08fd05ca40f385e9ab4e5/packages/template/source/TemplateError.ts#L9)
