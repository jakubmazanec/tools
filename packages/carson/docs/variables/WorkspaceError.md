[**@jakubmazanec/carson**](../README.md)

---

# Variable: WorkspaceError()

> `const` **WorkspaceError**: (`code`, `options?`) =>
> `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
> `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
> `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
> `"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>

Defined in:
[packages/carson/source/workspace/WorkspaceError.ts:7](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/carson/source/workspace/WorkspaceError.ts#L7)

A subclass of `Error` that indicates a workspace failure.

## Parameters

### code

`"INVALID_PACKAGE_JSON"` | `"MISSING_CARSON_TEMPLATE_ID"` | `"INVALID_WORKSPACE_CONFIG"` |
`"NO_SUCH_WORKSPACE_PATH"` | `"NO_WORKSPACE_FOUND"` | `"PATH_MISMATCH"` |
`"WORKSPACE_PATH_NOT_EMPTY"` | `"DUPLICATE_PROJECT_NAME"` | `"DUPLICATE_PROJECT_PATH"` |
`"TOO_MANY_PROJECTS"` | `"PROJECT_GLOBS_MISMATCH"`

### options?

`CustomErrorWithDataOptions`\<`WorkspaceErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
`"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>
