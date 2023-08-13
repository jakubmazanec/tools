# Interface: CoerceOptions

[semver](../modules/semver.md).CoerceOptions

## Hierarchy

- [`Options`](semver.Options.md)

  ↳ **`CoerceOptions`**

## Table of contents

### Properties

- [loose](semver.CoerceOptions.md#loose)
- [rtl](semver.CoerceOptions.md#rtl)

## Properties

### loose

• `Optional` **loose**: `boolean`

#### Inherited from

[Options](semver.Options.md).[loose](semver.Options.md#loose)

#### Defined in

node_modules/@types/semver/index.d.ts:115

---

### rtl

• `Optional` **rtl**: `boolean`

Used by `coerce()` to coerce from right to left.

**`Default`**

```ts
false;
```

**`Example`**

```ts
coerce('1.2.3.4', {rtl: true});
// => SemVer { version: '2.3.4', ... }
```

**`Since`**

6.2.0

#### Defined in

node_modules/@types/semver/index.d.ts:133
