[**@jakubmazanec/template**](../README.md)

---

# Variable: TemplateError()

> `const` **TemplateError**: (`code`, `options?`) => `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"`
> \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

Defined in:
[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/template/source/TemplateError.ts#L9)

A subclass of `Error` that indicates a template failure.

## Parameters

### code

`"INVALID_ATTRIBUTES"` | `"FAILED_FORMAT"` | `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>
