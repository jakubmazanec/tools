[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: outside()

> **outside**(`version`, `range`, `hilo`, `optionsOrLoose?`): `boolean`

Defined in: node_modules/@types/semver/ranges/outside.d.ts:9

Return true if the version is outside the bounds of the range in either the high or low direction.
The hilo argument must be either the string '>' or '<'. (This is the function called by gtr and
ltr.)

## Parameters

### version

`string` | [`SemVer`](../classes/SemVer.md)

### range

`string` | [`Range`](../classes/Range.md)

### hilo

`">"` | `"<"`

### optionsOrLoose?

`boolean` | [`RangeOptions`](../interfaces/RangeOptions.md)

## Returns

`boolean`
