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

[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4/packages/template/source/TemplateError.ts#L9)
