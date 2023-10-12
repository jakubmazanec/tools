# Namespace: semver

## Table of contents

### Namespaces

- [inc](semver.inc.md)

### Classes

- [Comparator](../classes/semver.Comparator.md)
- [Range](../classes/semver.Range.md)
- [SemVer](../classes/semver.SemVer.md)

### Interfaces

- [CoerceOptions](../interfaces/semver.CoerceOptions.md)
- [Options](../interfaces/semver.Options.md)
- [RangeOptions](../interfaces/semver.RangeOptions.md)

### Type Aliases

- [Operator](semver.md#operator)
- [ReleaseType](semver.md#releasetype)

### Variables

- [RELEASE_TYPES](semver.md#release_types)
- [SEMVER_SPEC_VERSION](semver.md#semver_spec_version)

### Functions

- [clean](semver.md#clean)
- [cmp](semver.md#cmp)
- [coerce](semver.md#coerce)
- [compare](semver.md#compare)
- [compareBuild](semver.md#comparebuild)
- [compareIdentifiers](semver.md#compareidentifiers)
- [compareLoose](semver.md#compareloose)
- [diff](semver.md#diff)
- [eq](semver.md#eq)
- [gt](semver.md#gt)
- [gte](semver.md#gte)
- [gtr](semver.md#gtr)
- [inc](semver.md#inc)
- [intersects](semver.md#intersects)
- [lt](semver.md#lt)
- [lte](semver.md#lte)
- [ltr](semver.md#ltr)
- [major](semver.md#major)
- [maxSatisfying](semver.md#maxsatisfying)
- [minSatisfying](semver.md#minsatisfying)
- [minVersion](semver.md#minversion)
- [minor](semver.md#minor)
- [neq](semver.md#neq)
- [outside](semver.md#outside)
- [parse](semver.md#parse)
- [patch](semver.md#patch)
- [prerelease](semver.md#prerelease)
- [rcompare](semver.md#rcompare)
- [rcompareIdentifiers](semver.md#rcompareidentifiers)
- [rsort](semver.md#rsort)
- [satisfies](semver.md#satisfies)
- [simplifyRange](semver.md#simplifyrange)
- [sort](semver.md#sort)
- [subset](semver.md#subset)
- [toComparators](semver.md#tocomparators)
- [valid](semver.md#valid)
- [validRange](semver.md#validrange)

## Type Aliases

### Operator

Ƭ **Operator**: `"==="` \| `"!=="` \| `""` \| `"="` \| `"=="` \| `"!="` \| `">"` \| `">="` \| `"<"`
\| `"<="`

#### Defined in

node_modules/@types/semver/index.d.ts:138

---

### ReleaseType

Ƭ **ReleaseType**: `"major"` \| `"premajor"` \| `"minor"` \| `"preminor"` \| `"patch"` \|
`"prepatch"` \| `"prerelease"`

#### Defined in

node_modules/@types/semver/index.d.ts:114

## Variables

### RELEASE_TYPES

• `Const` **RELEASE_TYPES**: [`ReleaseType`](semver.md#releasetype)[]

#### Defined in

node_modules/@types/semver/index.d.ts:112

---

### SEMVER_SPEC_VERSION

• `Const` **SEMVER_SPEC_VERSION**: `"2.0.0"`

#### Defined in

node_modules/@types/semver/index.d.ts:110

## Functions

### clean

▸ **clean**(`version`, `optionsOrLoose?`): `string` \| `null`

Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or
null if version is invalid.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string`                                                  |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`string` \| `null`

#### Defined in

node_modules/@types/semver/functions/clean.d.ts:6

---

### cmp

▸ **cmp**(`v1`, `operator`, `v2`, `optionsOrLoose?`): `boolean`

Pass in a comparison string, and it'll call the corresponding semver comparison function. "===" and
"!==" do simple string comparison, but are included for completeness. Throws if an invalid
comparison string is provided.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `operator`        | [`Operator`](semver.md#operator)                          |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/cmp.d.ts:9

---

### coerce

▸ **coerce**(`version`, `options?`): [`SemVer`](../classes/semver.SemVer.md) \| `null`

Coerces a string to SemVer if possible

#### Parameters

| Name       | Type                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------- |
| `version`  | `undefined` \| `null` \| `string` \| `number` \| [`SemVer`](../classes/semver.SemVer.md) |
| `options?` | [`CoerceOptions`](../interfaces/semver.CoerceOptions.md)                                 |

#### Returns

[`SemVer`](../classes/semver.SemVer.md) \| `null`

#### Defined in

node_modules/@types/semver/functions/coerce.d.ts:7

---

### compare

▸ **compare**(`v1`, `v2`, `optionsOrLoose?`): `1` \| `0` \| `-1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

Sorts in ascending order when passed to `Array.sort()`.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`1` \| `0` \| `-1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.

#### Defined in

node_modules/@types/semver/functions/compare.d.ts:14

---

### compareBuild

▸ **compareBuild**(`a`, `b`, `optionsOrLoose?`): `1` \| `0` \| `-1`

Compares two versions including build identifiers (the bit after `+` in the semantic version
string).

Sorts in ascending order when passed to `Array.sort()`.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `a`               | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `b`               | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`1` \| `0` \| `-1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.

**`Since`**

6.1.0

#### Defined in

node_modules/@types/semver/functions/compare-build.d.ts:16

---

### compareIdentifiers

▸ **compareIdentifiers**(`a`, `b`): `1` \| `0` \| `-1`

Compares two identifiers, must be numeric strings or truthy/falsy values.

Sorts in ascending order when passed to `Array.sort()`.

#### Parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `a`  | `undefined` \| `null` \| `string` |
| `b`  | `undefined` \| `null` \| `string` |

#### Returns

`1` \| `0` \| `-1`

#### Defined in

node_modules/@types/semver/internals/identifiers.d.ts:6

---

### compareLoose

▸ **compareLoose**(`v1`, `v2`): `1` \| `0` \| `-1`

#### Parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `v1` | `string` \| [`SemVer`](../classes/semver.SemVer.md) |
| `v2` | `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Returns

`1` \| `0` \| `-1`

#### Defined in

node_modules/@types/semver/functions/compare-loose.d.ts:3

---

### diff

▸ **diff**(`v1`, `v2`): [`ReleaseType`](semver.md#releasetype) \| `null`

Returns difference between two versions by the release type (major, premajor, minor, preminor,
patch, prepatch, or prerelease), or null if the versions are the same.

#### Parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `v1` | `string` \| [`SemVer`](../classes/semver.SemVer.md) |
| `v2` | `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Returns

[`ReleaseType`](semver.md#releasetype) \| `null`

#### Defined in

node_modules/@types/semver/functions/diff.d.ts:7

---

### eq

▸ **eq**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string.
You already know how to compare strings.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/eq.d.ts:7

---

### gt

▸ **gt**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 > v2

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/gt.d.ts:7

---

### gte

▸ **gte**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 >= v2

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/gte.d.ts:7

---

### gtr

▸ **gtr**(`version`, `range`, `optionsOrLoose?`): `boolean`

Return true if version is greater than all the versions possible in the range.

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)                 |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/ranges/gtr.d.ts:8

---

### inc

▸ **inc**(`version`, `release`, `optionsOrLoose?`, `identifier?`): `string` \| `null`

Return the version incremented by the release type (major, premajor, minor, preminor, patch,
prepatch, or prerelease), or null if it's not valid.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `release`         | [`ReleaseType`](semver.md#releasetype)                    |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |
| `identifier?`     | `string`                                                  |

#### Returns

`string` \| `null`

#### Defined in

node_modules/@types/semver/functions/inc.d.ts:12

▸ **inc**(`version`, `release`, `identifier?`, `identifierBase?`): `string` \| `null`

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)         |
| `release`         | [`ReleaseType`](semver.md#releasetype)                      |
| `identifier?`     | `string`                                                    |
| `identifierBase?` | `false` \| [`IdentifierBase`](semver.inc.md#identifierbase) |

#### Returns

`string` \| `null`

#### Defined in

node_modules/@types/semver/functions/inc.d.ts:18

---

### intersects

▸ **intersects**(`range1`, `range2`, `optionsOrLoose?`): `boolean`

Return true if any of the ranges comparators intersect

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `range1`          | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `range2`          | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/ranges/intersects.d.ts:7

---

### lt

▸ **lt**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 < v2

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/lt.d.ts:7

---

### lte

▸ **lte**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 <= v2

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/lte.d.ts:7

---

### ltr

▸ **ltr**(`version`, `range`, `optionsOrLoose?`): `boolean`

Return true if version is less than all the versions possible in the range.

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)                 |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/ranges/ltr.d.ts:8

---

### major

▸ **major**(`version`, `optionsOrLoose?`): `number`

Return the major version number.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/semver/functions/major.d.ts:7

---

### maxSatisfying

▸ **maxSatisfying**<`T`\>(`versions`, `range`, `optionsOrLoose?`): `T` \| `null`

Return the highest version in the list that satisfies the range, or null if none of them do.

#### Type parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `T`  | extends `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `versions`        | readonly `T`[]                                                      |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`T` \| `null`

#### Defined in

node_modules/@types/semver/ranges/max-satisfying.d.ts:8

---

### minSatisfying

▸ **minSatisfying**<`T`\>(`versions`, `range`, `optionsOrLoose?`): `T` \| `null`

Return the lowest version in the list that satisfies the range, or null if none of them do.

#### Type parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `T`  | extends `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `versions`        | readonly `T`[]                                                      |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`T` \| `null`

#### Defined in

node_modules/@types/semver/ranges/min-satisfying.d.ts:8

---

### minVersion

▸ **minVersion**(`range`, `optionsOrLoose?`): [`SemVer`](../classes/semver.SemVer.md) \| `null`

Return the lowest version that can possibly match the given range.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)         |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

[`SemVer`](../classes/semver.SemVer.md) \| `null`

#### Defined in

node_modules/@types/semver/ranges/min-version.d.ts:8

---

### minor

▸ **minor**(`version`, `optionsOrLoose?`): `number`

Return the minor version number.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/semver/functions/minor.d.ts:7

---

### neq

▸ **neq**(`v1`, `v2`, `optionsOrLoose?`): `boolean`

v1 != v2 The opposite of eq.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/neq.d.ts:7

---

### outside

▸ **outside**(`version`, `range`, `hilo`, `optionsOrLoose?`): `boolean`

Return true if the version is outside the bounds of the range in either the high or low direction.
The hilo argument must be either the string '>' or '<'. (This is the function called by gtr and
ltr.)

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)                 |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `hilo`            | `">"` \| `"<"`                                                      |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/ranges/outside.d.ts:9

---

### parse

▸ **parse**(`version`, `optionsOrLoose?`): [`SemVer`](../classes/semver.SemVer.md) \| `null`

Return the parsed version as a SemVer object, or null if it's not valid.

#### Parameters

| Name              | Type                                                                         |
| :---------------- | :--------------------------------------------------------------------------- |
| `version`         | `undefined` \| `null` \| `string` \| [`SemVer`](../classes/semver.SemVer.md) |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md)                    |

#### Returns

[`SemVer`](../classes/semver.SemVer.md) \| `null`

#### Defined in

node_modules/@types/semver/functions/parse.d.ts:7

---

### patch

▸ **patch**(`version`, `optionsOrLoose?`): `number`

Return the patch version number.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/semver/functions/patch.d.ts:7

---

### prerelease

▸ **prerelease**(`version`, `optionsOrLoose?`): `ReadonlyArray`<`string` \| `number`\> \| `null`

Returns an array of prerelease components, or null if none exist.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`ReadonlyArray`<`string` \| `number`\> \| `null`

#### Defined in

node_modules/@types/semver/functions/prerelease.d.ts:7

---

### rcompare

▸ **rcompare**(`v1`, `v2`, `optionsOrLoose?`): `1` \| `0` \| `-1`

The reverse of compare.

Sorts in descending order when passed to `Array.sort()`.

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `v1`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `v2`              | `string` \| [`SemVer`](../classes/semver.SemVer.md)       |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`1` \| `0` \| `-1`

#### Defined in

node_modules/@types/semver/functions/rcompare.d.ts:9

---

### rcompareIdentifiers

▸ **rcompareIdentifiers**(`a`, `b`): `1` \| `0` \| `-1`

The reverse of compareIdentifiers.

Sorts in descending order when passed to `Array.sort()`.

#### Parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `a`  | `undefined` \| `null` \| `string` |
| `b`  | `undefined` \| `null` \| `string` |

#### Returns

`1` \| `0` \| `-1`

#### Defined in

node_modules/@types/semver/internals/identifiers.d.ts:13

---

### rsort

▸ **rsort**<`T`\>(`list`, `optionsOrLoose?`): `T`[]

Sorts an array of semver entries in descending order using `compareBuild()`.

#### Type parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `T`  | extends `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `list`            | `T`[]                                                     |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`T`[]

#### Defined in

node_modules/@types/semver/functions/rsort.d.ts:7

---

### satisfies

▸ **satisfies**(`version`, `range`, `optionsOrLoose?`): `boolean`

Return true if the version satisfies the range.

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `version`         | `string` \| [`SemVer`](../classes/semver.SemVer.md)                 |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)                   |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/functions/satisfies.d.ts:8

---

### simplifyRange

▸ **simplifyRange**(`ranges`, `range`, `options?`): `string` \|
[`Range`](../classes/semver.Range.md)

Return a "simplified" range that matches the same items in `versions` list as the range specified.
Note that it does _not_ guarantee that it would match the same versions in all cases, only for the
set of versions provided. This is useful when generating ranges by joining together multiple
versions with `||` programmatically, to provide the user with something a bit more ergonomic. If the
provided range is shorter in string-length than the generated range, then that is returned.

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `ranges`   | `string`[]                                        |
| `range`    | `string` \| [`Range`](../classes/semver.Range.md) |
| `options?` | [`Options`](../interfaces/semver.Options.md)      |

#### Returns

`string` \| [`Range`](../classes/semver.Range.md)

#### Defined in

node_modules/@types/semver/ranges/simplify.d.ts:12

---

### sort

▸ **sort**<`T`\>(`list`, `optionsOrLoose?`): `T`[]

Sorts an array of semver entries in ascending order using `compareBuild()`.

#### Type parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `T`  | extends `string` \| [`SemVer`](../classes/semver.SemVer.md) |

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `list`            | `T`[]                                                     |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`T`[]

#### Defined in

node_modules/@types/semver/functions/sort.d.ts:7

---

### subset

▸ **subset**(`sub`, `dom`, `options?`): `boolean`

Return true if the subRange range is entirely contained by the superRange range.

#### Parameters

| Name       | Type                                                   |
| :--------- | :----------------------------------------------------- |
| `sub`      | `string` \| [`Range`](../classes/semver.Range.md)      |
| `dom`      | `string` \| [`Range`](../classes/semver.Range.md)      |
| `options?` | [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/ranges/subset.d.ts:7

---

### toComparators

▸ **toComparators**(`range`, `optionsOrLoose?`): `string`[][]

Mostly just for testing and legacy API reasons

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `range`           | `string` \| [`Range`](../classes/semver.Range.md)         |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`string`[][]

#### Defined in

node_modules/@types/semver/ranges/to-comparators.d.ts:7

---

### valid

▸ **valid**(`version`, `optionsOrLoose?`): `string` \| `null`

Return the parsed version as a string, or null if it's not valid.

#### Parameters

| Name              | Type                                                                         |
| :---------------- | :--------------------------------------------------------------------------- |
| `version`         | `undefined` \| `null` \| `string` \| [`SemVer`](../classes/semver.SemVer.md) |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md)                    |

#### Returns

`string` \| `null`

#### Defined in

node_modules/@types/semver/functions/valid.d.ts:6

---

### validRange

▸ **validRange**(`range`, `optionsOrLoose?`): `string` \| `null`

Return the valid range or null if it's not valid

#### Parameters

| Name              | Type                                                                       |
| :---------------- | :------------------------------------------------------------------------- |
| `range`           | `undefined` \| `null` \| `string` \| [`Range`](../classes/semver.Range.md) |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md)        |

#### Returns

`string` \| `null`

#### Defined in

node_modules/@types/semver/ranges/valid.d.ts:7
