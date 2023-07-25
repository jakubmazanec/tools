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

• **new Range**(`range`, `optionsOrLoose?`)

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `range`           | `string` \| [`Range`](semver.Range.md)                    |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Defined in

node_modules/@types/semver/index.d.ts:285

## Properties

### includePrerelease

• **includePrerelease**: `boolean`

#### Defined in

node_modules/@types/semver/index.d.ts:291

---

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/index.d.ts:289

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/index.d.ts:290

---

### range

• **range**: `string`

#### Defined in

node_modules/@types/semver/index.d.ts:287

---

### raw

• **raw**: `string`

#### Defined in

node_modules/@types/semver/index.d.ts:288

---

### set

• **set**: readonly readonly Comparator[][]

#### Defined in

node_modules/@types/semver/index.d.ts:295

## Methods

### format

▸ **format**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/index.d.ts:292

---

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/index.d.ts:293

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

node_modules/@types/semver/index.d.ts:298

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

node_modules/@types/semver/index.d.ts:296

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

node_modules/@types/semver/index.d.ts:297
