[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Class: SemVer

## Constructors

### new SemVer()

> **new SemVer**(`version`, `optionsOrLoose`?): [`SemVer`](SemVer.md)

#### Parameters

• **version**: `string` \| [`SemVer`](SemVer.md)

• **optionsOrLoose?**: `boolean` \| [`RangeOptions`](../interfaces/RangeOptions.md)

#### Returns

[`SemVer`](SemVer.md)

#### Source

node_modules/@types/semver/classes/semver.d.ts:4

## Properties

### build

> **build**: readonly `string`[]

#### Source

node_modules/@types/semver/classes/semver.d.ts:16

---

### loose

> **loose**: `boolean`

#### Source

node_modules/@types/semver/classes/semver.d.ts:7

---

### major

> **major**: `number`

#### Source

node_modules/@types/semver/classes/semver.d.ts:12

---

### minor

> **minor**: `number`

#### Source

node_modules/@types/semver/classes/semver.d.ts:13

---

### options

> **options**: [`Options`](../interfaces/Options.md)

#### Source

node_modules/@types/semver/classes/semver.d.ts:8

---

### patch

> **patch**: `number`

#### Source

node_modules/@types/semver/classes/semver.d.ts:14

---

### prerelease

> **prerelease**: readonly (`string` \| `number`)[]

#### Source

node_modules/@types/semver/classes/semver.d.ts:17

---

### raw

> **raw**: `string`

#### Source

node_modules/@types/semver/classes/semver.d.ts:6

---

### version

> **version**: `string`

#### Source

node_modules/@types/semver/classes/semver.d.ts:15

## Methods

### compare()

> **compare**(`other`): `-1` \| `0` \| `1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

#### Parameters

• **other**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Source

node_modules/@types/semver/classes/semver.d.ts:27

---

### compareBuild()

> **compareBuild**(`other`): `-1` \| `0` \| `1`

Compares the build identifier of two versions.

#### Parameters

• **other**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Source

node_modules/@types/semver/classes/semver.d.ts:57

---

### compareMain()

> **compareMain**(`other`): `-1` \| `0` \| `1`

Compares the release portion of two versions.

#### Parameters

• **other**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Source

node_modules/@types/semver/classes/semver.d.ts:37

---

### comparePre()

> **comparePre**(`other`): `-1` \| `0` \| `1`

Compares the prerelease portion of two versions.

#### Parameters

• **other**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

#### Source

node_modules/@types/semver/classes/semver.d.ts:47

---

### format()

> **format**(): `string`

#### Returns

`string`

#### Source

node_modules/@types/semver/classes/semver.d.ts:9

---

### inc()

> **inc**(`release`, `identifier`?): [`SemVer`](SemVer.md)

#### Parameters

• **release**: [`ReleaseType`](../type-aliases/ReleaseType.md)

• **identifier?**: `string`

#### Returns

[`SemVer`](SemVer.md)

#### Source

node_modules/@types/semver/classes/semver.d.ts:59

---

### inspect()

> **inspect**(): `string`

#### Returns

`string`

#### Source

node_modules/@types/semver/classes/semver.d.ts:10

---

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

node_modules/@types/semver/classes/semver.d.ts:61
