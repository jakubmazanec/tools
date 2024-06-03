[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Class: Comparator

## Constructors

### new Comparator()

> **new Comparator**(`comp`, `optionsOrLoose`?): [`Comparator`](Comparator.md)

#### Parameters

• **comp**: `string` \| [`Comparator`](Comparator.md)

• **optionsOrLoose?**: `boolean` \| [`Options`](../interfaces/Options.md)

#### Returns

[`Comparator`](Comparator.md)

#### Source

node_modules/@types/semver/classes/comparator.d.ts:5

## Properties

### loose

> **loose**: `boolean`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:10

---

### operator

> **operator**: `""` \| `"="` \| `">"` \| `">="` \| `"<"` \| `"<="`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:8

---

### options

> **options**: [`Options`](../interfaces/Options.md)

#### Source

node_modules/@types/semver/classes/comparator.d.ts:11

---

### semver

> **semver**: [`SemVer`](SemVer.md)

#### Source

node_modules/@types/semver/classes/comparator.d.ts:7

---

### value

> **value**: `string`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:9

## Methods

### intersects()

> **intersects**(`comp`, `optionsOrLoose`?): `boolean`

#### Parameters

• **comp**: [`Comparator`](Comparator.md)

• **optionsOrLoose?**: `boolean` \| [`Options`](../interfaces/Options.md)

#### Returns

`boolean`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:14

---

### parse()

> **parse**(`comp`): `void`

#### Parameters

• **comp**: `string`

#### Returns

`void`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:12

---

### test()

> **test**(`version`): `boolean`

#### Parameters

• **version**: `string` \| [`SemVer`](SemVer.md)

#### Returns

`boolean`

#### Source

node_modules/@types/semver/classes/comparator.d.ts:13
