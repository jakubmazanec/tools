[**@jakubmazanec/carson-templates**](../../../README.md)

---

# Function: compareBuild()

> **compareBuild**(`a`, `b`, `optionsOrLoose`?): `1` \| `0` \| `-1`

Defined in: node_modules/@types/semver/functions/compare-build.d.ts:16

Compares two versions including build identifiers (the bit after `+` in the semantic version
string).

Sorts in ascending order when passed to `Array.sort()`.

## Parameters

### a

`string` | [`SemVer`](../classes/SemVer.md)

### b

`string` | [`SemVer`](../classes/SemVer.md)

### optionsOrLoose?

`boolean` | [`Options`](../interfaces/Options.md)

## Returns

`1` \| `0` \| `-1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.

## Since

6.1.0
