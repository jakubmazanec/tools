[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Class: Range

Defined in: node_modules/@types/semver/classes/range.d.ts:5

## Constructors

### Constructor

> **new Range**(`range`, `optionsOrLoose?`): `Range`

Defined in: node_modules/@types/semver/classes/range.d.ts:6

#### Parameters

##### range

`string` | `Range`

##### optionsOrLoose?

`boolean` | [`RangeOptions`](../interfaces/RangeOptions.md)

#### Returns

`Range`

## Properties

### includePrerelease

> **includePrerelease**: `boolean`

Defined in: node_modules/@types/semver/classes/range.d.ts:12

---

### loose

> **loose**: `boolean`

Defined in: node_modules/@types/semver/classes/range.d.ts:10

---

### options

> **options**: [`Options`](../interfaces/Options.md)

Defined in: node_modules/@types/semver/classes/range.d.ts:11

---

### range

> **range**: `string`

Defined in: node_modules/@types/semver/classes/range.d.ts:8

---

### raw

> **raw**: `string`

Defined in: node_modules/@types/semver/classes/range.d.ts:9

---

### set

> **set**: readonly readonly [`Comparator`](Comparator.md)[][]

Defined in: node_modules/@types/semver/classes/range.d.ts:16

## Methods

### format()

> **format**(): `string`

Defined in: node_modules/@types/semver/classes/range.d.ts:13

#### Returns

`string`

---

### inspect()

> **inspect**(): `string`

Defined in: node_modules/@types/semver/classes/range.d.ts:14

#### Returns

`string`

---

### intersects()

> **intersects**(`range`, `optionsOrLoose?`): `boolean`

Defined in: node_modules/@types/semver/classes/range.d.ts:19

#### Parameters

##### range

`Range`

##### optionsOrLoose?

`boolean` | [`Options`](../interfaces/Options.md)

#### Returns

`boolean`

---

### parseRange()

> **parseRange**(`range`): readonly [`Comparator`](Comparator.md)[]

Defined in: node_modules/@types/semver/classes/range.d.ts:17

#### Parameters

##### range

`string`

#### Returns

readonly [`Comparator`](Comparator.md)[]

---

### test()

> **test**(`version`): `boolean`

Defined in: node_modules/@types/semver/classes/range.d.ts:18

#### Parameters

##### version

`string` | [`SemVer`](SemVer.md)

#### Returns

`boolean`
