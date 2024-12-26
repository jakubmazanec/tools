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

[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/3137813ef46c72d3c081751f960a2aa2c61ad567/packages/template/source/TemplateError.ts#L9)
