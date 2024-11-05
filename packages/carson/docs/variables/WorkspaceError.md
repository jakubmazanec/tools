[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Variable: WorkspaceError()

> `const` **WorkspaceError**: (`code`, `options`?) =>
> `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
> `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
> `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
> `"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>

A subclass of `Error` that indicates a workspace failure.

## Parameters

• **code**: `"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \|
`"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \| `"DUPLICATE_PROJECT_NAME"` \|
`"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \| `"PROJECT_GLOBS_MISMATCH"`

• **options?**: `CustomErrorWithDataOptions`\<`WorkspaceErrorData`\>

## Returns

`CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
`"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>

## Source

[packages/carson/source/workspace/WorkspaceError.ts:7](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/carson/source/workspace/WorkspaceError.ts#L7)
