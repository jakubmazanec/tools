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

[packages/carson/source/workspace/WorkspaceError.ts:7](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/WorkspaceError.ts#L7)
