# Class: SemVer

[semver](../modules/semver.md).SemVer

## Table of contents

### Constructors

- [constructor](semver.SemVer.md#constructor)

### Properties

- [build](semver.SemVer.md#build)
- [loose](semver.SemVer.md#loose)
- [major](semver.SemVer.md#major)
- [minor](semver.SemVer.md#minor)
- [options](semver.SemVer.md#options)
- [patch](semver.SemVer.md#patch)
- [prerelease](semver.SemVer.md#prerelease)
- [raw](semver.SemVer.md#raw)
- [version](semver.SemVer.md#version)

### Methods

- [compare](semver.SemVer.md#compare)
- [compareBuild](semver.SemVer.md#comparebuild)
- [compareMain](semver.SemVer.md#comparemain)
- [comparePre](semver.SemVer.md#comparepre)
- [format](semver.SemVer.md#format)
- [inc](semver.SemVer.md#inc)
- [inspect](semver.SemVer.md#inspect)
- [toString](semver.SemVer.md#tostring)

## Constructors

### constructor

• **new SemVer**(`version`, `optionsOrLoose?`): [`SemVer`](semver.SemVer.md)

#### Parameters

| Name              | Type                                                                |
| :---------------- | :------------------------------------------------------------------ |
| `version`         | `string` \| [`SemVer`](semver.SemVer.md)                            |
| `optionsOrLoose?` | `boolean` \| [`RangeOptions`](../interfaces/semver.RangeOptions.md) |

#### Returns

[`SemVer`](semver.SemVer.md)

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:4

## Properties

### build

• **build**: readonly `string`[]

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:16

---

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:7

---

### major

• **major**: `number`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:12

---

### minor

• **minor**: `number`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:13

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:8

---

### patch

• **patch**: `number`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:14

---

### prerelease

• **prerelease**: readonly (`string` \| `number`)[]

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:17

---

### raw

• **raw**: `string`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:6

---

### version

• **version**: `string`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:15

## Methods

### compare

▸ **compare**(`other`): `-1` \| `0` \| `1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:27

---

### compareBuild

▸ **compareBuild**(`other`): `-1` \| `0` \| `1`

Compares the build identifier of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:57

---

### compareMain

▸ **compareMain**(`other`): `-1` \| `0` \| `1`

Compares the release portion of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:37

---

### comparePre

▸ **comparePre**(`other`): `-1` \| `0` \| `1`

Compares the prerelease portion of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:47

---

### format

▸ **format**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:9

---

### inc

▸ **inc**(`release`, `identifier?`): [`SemVer`](semver.SemVer.md)

#### Parameters

| Name          | Type                                              |
| :------------ | :------------------------------------------------ |
| `release`     | [`ReleaseType`](../modules/semver.md#releasetype) |
| `identifier?` | `string`                                          |

#### Returns

[`SemVer`](semver.SemVer.md)

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:59

---

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:10

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/classes/semver.d.ts:61
