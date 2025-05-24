[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: diff()

> **diff**(`v1`, `v2`): `null` \| [`ReleaseType`](../type-aliases/ReleaseType.md)

Defined in: node_modules/@types/semver/functions/diff.d.ts:7

Returns difference between two versions by the release type (major, premajor, minor, preminor,
patch, prepatch, or prerelease), or null if the versions are the same.

## Parameters

### v1

`string` | [`SemVer`](../classes/SemVer.md)

### v2

`string` | [`SemVer`](../classes/SemVer.md)

## Returns

`null` \| [`ReleaseType`](../type-aliases/ReleaseType.md)
