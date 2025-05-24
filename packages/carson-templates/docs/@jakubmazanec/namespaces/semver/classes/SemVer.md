[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Class: SemVer

Defined in: node_modules/@types/semver/classes/semver.d.ts:3

## Constructors

### Constructor

> **new SemVer**(`version`, `optionsOrLoose?`): `SemVer`

Defined in: node_modules/@types/semver/classes/semver.d.ts:4

#### Parameters

##### version

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | [`RangeOptions`](../interfaces/RangeOptions.md)

#### Returns

`SemVer`

## Properties

### build

> **build**: readonly `string`[]

Defined in: node_modules/@types/semver/classes/semver.d.ts:16

---

### loose

> **loose**: `boolean`

Defined in: node_modules/@types/semver/classes/semver.d.ts:7

---

### major

> **major**: `number`

Defined in: node_modules/@types/semver/classes/semver.d.ts:12

---

### minor

> **minor**: `number`

Defined in: node_modules/@types/semver/classes/semver.d.ts:13

---

### options

> **options**: [`Options`](../interfaces/Options.md)

Defined in: node_modules/@types/semver/classes/semver.d.ts:8

---

### patch

> **patch**: `number`

Defined in: node_modules/@types/semver/classes/semver.d.ts:14

---

### prerelease

> **prerelease**: readonly (`string` \| `number`)[]

Defined in: node_modules/@types/semver/classes/semver.d.ts:17

---

### raw

> **raw**: `string`

Defined in: node_modules/@types/semver/classes/semver.d.ts:6

---

### version

> **version**: `string`

Defined in: node_modules/@types/semver/classes/semver.d.ts:15

## Methods

### compare()

> **compare**(`other`): `-1` \| `0` \| `1`

Defined in: node_modules/@types/semver/classes/semver.d.ts:27

Compares two versions excluding build identifiers (the bit after `+` in the semantic version
string).

#### Parameters

##### other

`string` | `SemVer`

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

---

### compareBuild()

> **compareBuild**(`other`): `-1` \| `0` \| `1`

Defined in: node_modules/@types/semver/classes/semver.d.ts:57

Compares the build identifier of two versions.

#### Parameters

##### other

`string` | `SemVer`

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

---

### compareMain()

> **compareMain**(`other`): `-1` \| `0` \| `1`

Defined in: node_modules/@types/semver/classes/semver.d.ts:37

Compares the release portion of two versions.

#### Parameters

##### other

`string` | `SemVer`

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

---

### comparePre()

> **comparePre**(`other`): `-1` \| `0` \| `1`

Defined in: node_modules/@types/semver/classes/semver.d.ts:47

Compares the prerelease portion of two versions.

#### Parameters

##### other

`string` | `SemVer`

#### Returns

`-1` \| `0` \| `1`

- `0` if `this` == `other`
- `1` if `this` is greater
- `-1` if `other` is greater.

---

### format()

> **format**(): `string`

Defined in: node_modules/@types/semver/classes/semver.d.ts:9

#### Returns

`string`

---

### inc()

> **inc**(`release`, `identifier?`): `SemVer`

Defined in: node_modules/@types/semver/classes/semver.d.ts:59

#### Parameters

##### release

[`ReleaseType`](../type-aliases/ReleaseType.md)

##### identifier?

`string`

#### Returns

`SemVer`

---

### inspect()

> **inspect**(): `string`

Defined in: node_modules/@types/semver/classes/semver.d.ts:10

#### Returns

`string`

---

### toString()

> **toString**(): `string`

Defined in: node_modules/@types/semver/classes/semver.d.ts:61

#### Returns

`string`
