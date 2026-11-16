[**@jakubmazanec/template**](../README.md)

---

# Variable: TemplateError

> `const` **TemplateError**: new (`code`, `options?`) =>
> `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
> `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

Defined in:
[template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/template/source/TemplateError.ts#L9)

A subclass of `Error` that indicates a template failure.

## Parameters

### code

`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>
