[**@jakubmazanec/template**](../README.md)

---

# Variable: TemplateError

> `const` **TemplateError**: (`code`, `options?`) => `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"`
> \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

Defined in:
[template/source/TemplateError.ts:9](https://github.com/jakubmazanec/tools/blob/cb8264c831f1e3ca31cf4c8013393ebc056dc355/packages/template/source/TemplateError.ts#L9)

A subclass of `Error` that indicates a template failure.

## Parameters

### code

`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"`

### options?

`CustomErrorWithDataOptions`\<`TemplateErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>
