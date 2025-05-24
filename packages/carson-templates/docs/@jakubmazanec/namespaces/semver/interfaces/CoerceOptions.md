[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Interface: CoerceOptions

Defined in: node_modules/@types/semver/index.d.ts:113

## Extends

- [`Options`](Options.md)

## Properties

### includePrerelease?

> `optional` **includePrerelease**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:114

---

### loose?

> `optional` **loose**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:107

#### Inherited from

[`Options`](Options.md).[`loose`](Options.md#loose)

---

### rtl?

> `optional` **rtl**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:126

Used by `coerce()` to coerce from right to left.

#### Default

```ts
false;
```

#### Example

```ts
coerce('1.2.3.4', {rtl: true});
// => SemVer { version: '2.3.4', ... }
```

#### Since

6.2.0
