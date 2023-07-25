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

## Constructors

### constructor

• **new SemVer**(`version`, `optionsOrLoose?`)

#### Parameters

| Name              | Type                                                      |
| :---------------- | :-------------------------------------------------------- |
| `version`         | `string` \| [`SemVer`](semver.SemVer.md)                  |
| `optionsOrLoose?` | `boolean` \| [`Options`](../interfaces/semver.Options.md) |

#### Defined in

node_modules/@types/semver/index.d.ts:213

## Properties

### build

• **build**: readonly `string`[]

#### Defined in

node_modules/@types/semver/index.d.ts:225

---

### loose

• **loose**: `boolean`

#### Defined in

node_modules/@types/semver/index.d.ts:216

---

### major

• **major**: `number`

#### Defined in

node_modules/@types/semver/index.d.ts:221

---

### minor

• **minor**: `number`

#### Defined in

node_modules/@types/semver/index.d.ts:222

---

### options

• **options**: [`Options`](../interfaces/semver.Options.md)

#### Defined in

node_modules/@types/semver/index.d.ts:217

---

### patch

• **patch**: `number`

#### Defined in

node_modules/@types/semver/index.d.ts:223

---

### prerelease

• **prerelease**: readonly (`string` \| `number`)[]

#### Defined in

node_modules/@types/semver/index.d.ts:226

---

### raw

• **raw**: `string`

#### Defined in

node_modules/@types/semver/index.d.ts:215

---

### version

• **version**: `string`

#### Defined in

node_modules/@types/semver/index.d.ts:224

## Methods

### compare

▸ **compare**(`other`): `0` \| `1` \| `-1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`0` \| `1` \| `-1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/index.d.ts:236

---

### compareBuild

▸ **compareBuild**(`other`): `0` \| `1` \| `-1`

Compares the build identifier of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`0` \| `1` \| `-1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/index.d.ts:266

---

### compareMain

▸ **compareMain**(`other`): `0` \| `1` \| `-1`

Compares the release portion of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`0` \| `1` \| `-1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/index.d.ts:246

---

### comparePre

▸ **comparePre**(`other`): `0` \| `1` \| `-1`

Compares the prerelease portion of two versions.

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `other` | `string` \| [`SemVer`](semver.SemVer.md) |

#### Returns

`0` \| `1` \| `-1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Defined in

node_modules/@types/semver/index.d.ts:256

---

### format

▸ **format**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/index.d.ts:218

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

node_modules/@types/semver/index.d.ts:268

---

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/semver/index.d.ts:219
