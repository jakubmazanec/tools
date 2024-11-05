[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Variable: ProjectError()

> `const` **ProjectError**: (`code`, `options`?) => `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"`
> \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \|
> `"MISSING_CARSON_TEMPLATE_ID"` \| `"UNKNOWN_ERROR"`, `ProjectErrorData`\>

A subclass of `Error` that indicates a project failure.

## Parameters

• **code**: `"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \|
`"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"`

• **options?**: `CustomErrorWithDataOptions`\<`ProjectErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
`"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"`, `ProjectErrorData`\>

## Source

[packages/carson/source/workspace/ProjectError.ts:7](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/carson/source/workspace/ProjectError.ts#L7)
