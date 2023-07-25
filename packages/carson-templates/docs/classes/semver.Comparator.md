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

• **new Comparator**(`comp`, `optionsOrLoose?`)

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `comp`            | `string` \| [`Comparator`](semver.Comparator.md)          |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Defined in

node_modules/@types/semver/index.d.ts:272

## Properties

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/index.d.ts:277

---

### operator

• **operator**: `""` \| `"="` \| `">"` \| `">="` \| `"<"` \| `"<="`

#### Defined in

node_modules/@types/semver/index.d.ts:275

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/index.d.ts:278

---

### semver

• **semver**: [`SemVer`](semver.SemVer.md)

#### Defined in

node_modules/@types/semver/index.d.ts:274

---

### value

• **value**: `string`

#### Defined in

node_modules/@types/semver/index.d.ts:276

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

node_modules/@types/semver/index.d.ts:281

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

node_modules/@types/semver/index.d.ts:279

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

node_modules/@types/semver/index.d.ts:280
