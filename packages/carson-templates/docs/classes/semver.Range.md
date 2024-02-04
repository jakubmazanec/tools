# Class: Range

[semver](../modules/semver.md).Range

## Table of contents

### Constructors

- [constructor](semver.Range.md#constructor)

### Properties

- [includePrerelease](semver.Range.md#includeprerelease)
- [loose](semver.Range.md#loose)
- [options](semver.Range.md#options)
- [range](semver.Range.md#range)
- [raw](semver.Range.md#raw)
- [set](semver.Range.md#set)

### Methods

- [format](semver.Range.md#format)
- [inspect](semver.Range.md#inspect)
- [intersects](semver.Range.md#intersects)
- [parseRange](semver.Range.md#parserange)
- [test](semver.Range.md#test)

## Constructors

### constructor

• **new Range**(`range`, `optionsOrLoose?`): [`Range`](semver.Range.md)

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `range`           | `string` \| [`Range`](semver.Range.md)                              |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

[`Range`](semver.Range.md)

#### Defined in

node_modules/@types/semver/classes/range.d.ts:6

## Properties

### includePrerelease

• **includePrerelease**: `boolean`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:12

---

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:10

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/classes/range.d.ts:11

---

### range

• **range**: `string`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:8

---

### raw

• **raw**: `string`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:9

---

### set

• **set**: readonly readonly [`Comparator`](semver.Comparator.md)[][]

#### Defined in

node_modules/@types/semver/classes/range.d.ts:16

## Methods

### format

▸ **format**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:13

---

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:14

---

### intersects

▸ **intersects**(`range`, `optionsOrLoose?`): `boolean`

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `range`           | [`Range`](semver.Range.md)                                |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:19

---

### parseRange

▸ **parseRange**(`range`): readonly [`Comparator`](semver.Comparator.md)[]

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

readonly [`Comparator`](semver.Comparator.md)[]

#### Defined in

node_modules/@types/semver/classes/range.d.ts:17

---

### test

▸ **test**(`version`): `boolean`

#### Parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `version` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/classes/range.d.ts:18
