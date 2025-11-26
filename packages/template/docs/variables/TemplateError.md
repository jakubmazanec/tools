[**@jakubmazanec/template**](../README.md)

---

# Variable: TemplateError()

> `const` **TemplateError**: (`code`, `options?`) => `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"`
> \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

Defined in:
[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/template/source/TemplateError.ts#L9)

A subclass of `Error` that indicates a template failure.

## Parameters

### code

`"INVALID_ATTRIBUTES"` | `"FAILED_FORMAT"` | `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>
