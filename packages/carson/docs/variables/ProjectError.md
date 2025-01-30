[**@jakubmazanec/carson**](../README.md)

---

# Variable: ProjectError()

> `const` **ProjectError**: (`code`, `options`?) => `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"`
> \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \|
> `"MISSING_CARSON_TEMPLATE_ID"` \| `"UNKNOWN_ERROR"`, `ProjectErrorData`\>

Defined in:
[packages/carson/source/workspace/ProjectError.ts:7](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/carson/source/workspace/ProjectError.ts#L7)

A subclass of `Error` that indicates a project failure.

## Parameters

### code

`"INVALID_PACKAGE_JSON"` | `"INVALID_PROJECT_CONFIG"` | `"NO_SUCH_PROJECT_PATH"` |
`"PROJECT_PATH_NOT_EMPTY"` | `"MISSING_CARSON_TEMPLATE_ID"`

### options?

`CustomErrorWithDataOptions`\<`ProjectErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
`"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"`, `ProjectErrorData`\>
