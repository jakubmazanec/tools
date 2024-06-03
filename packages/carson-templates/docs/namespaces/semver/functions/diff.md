[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Function: diff()

> **diff**(`v1`, `v2`): [`ReleaseType`](../type-aliases/ReleaseType.md) \| `null`

Returns difference between two versions by the release type (major, premajor, minor, preminor,
patch, prepatch, or prerelease), or null if the versions are the same.

## Parameters

• **v1**: `string` \| [`SemVer`](../classes/SemVer.md)

• **v2**: `string` \| [`SemVer`](../classes/SemVer.md)

## Returns

[`ReleaseType`](../type-aliases/ReleaseType.md) \| `null`

## Source

node_modules/@types/semver/functions/diff.d.ts:7
