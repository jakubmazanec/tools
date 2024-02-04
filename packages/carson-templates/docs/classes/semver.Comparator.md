# Class: Comparator

[semver](../modules/semver.md).Comparator

## Table of contents

### Constructors

- [constructor](semver.Comparator.md#constructor)

### Properties

- [loose](semver.Comparator.md#loose)
- [operator](semver.Comparator.md#operator)
- [options](semver.Comparator.md#options)
- [semver](semver.Comparator.md#semver)
- [value](semver.Comparator.md#value)

### Methods

- [intersects](semver.Comparator.md#intersects)
- [parse](semver.Comparator.md#parse)
- [test](semver.Comparator.md#test)

## Constructors

### constructor

• **new Comparator**(`comp`, `optionsOrLoose?`): [`Comparator`](semver.Comparator.md)

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `comp`            | `string` \| [`Comparator`](semver.Comparator.md)          |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

[`Comparator`](semver.Comparator.md)

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:5

## Properties

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:10

---

### operator

• **operator**: `""` \| `"="` \| `">"` \| `">="` \| `"<"` \| `"<="`

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:8

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:11

---

### semver

• **semver**: [`SemVer`](semver.SemVer.md)

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:7

---

### value

• **value**: `string`

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:9

## Methods

### intersects

▸ **intersects**(`comp`, `optionsOrLoose?`): `boolean`

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `comp`            | [`Comparator`](semver.Comparator.md)                      |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:14

---

### parse

▸ **parse**(`comp`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `comp` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/semver/classes/comparator.d.ts:12

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

node_modules/@types/semver/classes/comparator.d.ts:13
