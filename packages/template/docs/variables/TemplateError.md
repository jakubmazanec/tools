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

## Source

[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/template/source/TemplateError.ts#L9)
