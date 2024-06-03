[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Class: Range

## Constructors

### new Range()

> **new Range**(`range`, `optionsOrLoose`?): [`Range`](Range.md)

#### Parameters

• **range**: `string` \| [`Range`](Range.md)

• **optionsOrLoose?**: `boolean` \| [`RangeOptions`](../interfaces/RangeOptions.md)

#### Returns

[`Range`](Range.md)

#### Source

node_modules/@types/semver/classes/range.d.ts:6

## Properties

### includePrerelease

> **includePrerelease**: `boolean`

#### Source

node_modules/@types/semver/classes/range.d.ts:12

---

### loose

> **loose**: `boolean`

#### Source

node_modules/@types/semver/classes/range.d.ts:10

---

### options

> **options**: [`Options`](../interfaces/Options.md)

#### Source

node_modules/@types/semver/classes/range.d.ts:11

---

### range

> **range**: `string`

#### Source

node_modules/@types/semver/classes/range.d.ts:8

---

### raw

> **raw**: `string`

#### Source

node_modules/@types/semver/classes/range.d.ts:9

---

### set

> **set**: readonly readonly [`Comparator`](Comparator.md)[][]

#### Source

node_modules/@types/semver/classes/range.d.ts:16

## Methods

### format()

> **format**(): `string`

#### Returns

`string`

#### Source

node_modules/@types/semver/classes/range.d.ts:13

---

### inspect()

> **inspect**(): `string`

#### Returns

`string`

#### Source

node_modules/@types/semver/classes/range.d.ts:14

---

### intersects()

> **intersects**(`range`, `optionsOrLoose`?): `boolean`

#### Parameters

• **range**: [`Range`](Range.md)

• **optionsOrLoose?**: `boolean` \| [`Options`](../interfaces/Options.md)

#### Returns

`boolean`

#### Source

node_modules/@types/semver/classes/range.d.ts:19

---

### parseRange()

> **parseRange**(`range`): readonly [`Comparator`](Comparator.md)[]

#### Parameters

• **range**: `string`

#### Returns

readonly [`Comparator`](Comparator.md)[]

#### Source

node_modules/@types/semver/classes/range.d.ts:17

---

### test()

> **test**(`version`): `boolean`

#### Parameters

• **version**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`boolean`

#### Source

node_modules/@types/semver/classes/range.d.ts:18
