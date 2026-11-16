[**@jakubmazanec/carson**](../README.md)

---

# Variable: ProjectError

> `const` **ProjectError**: new (`code`, `options?`) =>
> `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \|
> `"PROJECT_PATH_NOT_EMPTY"`, `ProjectErrorData`\>

Defined in:
[packages/carson/source/workspace/ProjectError.ts:7](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/carson/source/workspace/ProjectError.ts#L7)

A subclass of `Error` that indicates a project failure.

## Parameters

### code

`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_PROJECT_CONFIG"` \|
`"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"`

### options?

`CustomErrorWithDataOptions`\<`ProjectErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"` \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \|
`"PROJECT_PATH_NOT_EMPTY"`, `ProjectErrorData`\>
