[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: cmp()

> **cmp**(`v1`, `operator`, `v2`, `optionsOrLoose?`): `boolean`

Defined in: node_modules/@types/semver/functions/cmp.d.ts:9

Pass in a comparison string, and it'll call the corresponding semver comparison function. "===" and
"!==" do simple string comparison, but are included for completeness. Throws if an invalid
comparison string is provided.

## Parameters

### v1

`string` | [`SemVer`](../classes/SemVer.md)

### operator

[`Operator`](../type-aliases/Operator.md)

### v2

`string` | [`SemVer`](../classes/SemVer.md)

### optionsOrLoose?

`boolean` | [`Options`](../interfaces/Options.md)

## Returns

`boolean`
