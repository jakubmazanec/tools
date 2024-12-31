[**@jakubmazanec/carson**](../README.md)

---

# Variable: ProjectError()

> `const` **ProjectError**: (`code`, `options`?) => `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"`
> \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \|
> `"MISSING_CARSON_TEMPLATE_ID"` \| `"UNKNOWN_ERROR"`, `ProjectErrorData`\>

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

## Defined in

[packages/carson/source/workspace/ProjectError.ts:7](https://github.com/jakubmazanec/tools/blob/92d3fc1374d1ad6d45198d05d061e0f856a89434/packages/carson/source/workspace/ProjectError.ts#L7)
