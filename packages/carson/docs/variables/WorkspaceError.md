[**@jakubmazanec/carson**](../README.md)

---

# Variable: WorkspaceError

> `const` **WorkspaceError**: new (`code`, `options?`) =>
> `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_WORKSPACE_CONFIG"` \|
> `"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \|
> `"WORKSPACE_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"DUPLICATE_PROJECT_NAME"` \|
> `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \| `"PROJECT_GLOBS_MISMATCH"` \|
> `"UNKNOWN_ERROR"`, `WorkspaceErrorData`\>

Defined in:
[packages/carson/source/workspace/WorkspaceError.ts:7](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/WorkspaceError.ts#L7)

A subclass of `Error` that indicates a workspace failure.

## Parameters

### code

`"INVALID_PACKAGE_JSON"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"MISSING_CARSON_TEMPLATE_ID"` \| `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \|
`"TOO_MANY_PROJECTS"` \| `"PROJECT_GLOBS_MISMATCH"`

### options?

`CustomErrorWithDataOptions`\<`WorkspaceErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_WORKSPACE_CONFIG"` \|
`"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \|
`"WORKSPACE_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"DUPLICATE_PROJECT_NAME"` \|
`"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \| `"PROJECT_GLOBS_MISMATCH"` \|
`"UNKNOWN_ERROR"`, `WorkspaceErrorData`\>
