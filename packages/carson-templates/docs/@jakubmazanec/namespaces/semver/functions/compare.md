[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: compare()

> **compare**(`v1`, `v2`, `optionsOrLoose?`): `-1` \| `0` \| `1`

Defined in: node_modules/@types/semver/functions/compare.d.ts:14

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

Sorts in ascending order when passed to `Array.sort()`.

## Parameters

### v1

`string` | [`SemVer`](../classes/SemVer.md)

### v2

`string` | [`SemVer`](../classes/SemVer.md)

### optionsOrLoose?

`boolean` | [`Options`](../interfaces/Options.md)

## Returns

`-1` \| `0` \| `1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.
