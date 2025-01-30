[**@jakubmazanec/template**](../README.md)

---

# Variable: TemplateError()

> `const` **TemplateError**: (`code`, `options`?) => `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"`
> \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

Defined in:
[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/76a9140b954a789a6120dd2126b179ec0180d7e9/packages/template/source/TemplateError.ts#L9)

A subclass of `Error` that indicates a template failure.

## Parameters

### code

`"INVALID_ATTRIBUTES"` | `"FAILED_FORMAT"` | `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>
