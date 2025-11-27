[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Interface: CoerceOptions

Defined in: node_modules/@types/semver/index.d.ts:113

## Extends

- [`Options`](Options.md)

## Properties

### includePrerelease?

> `optional` **includePrerelease**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:122

If the `options.includePrerelease` flag is set, then the `coerce` result will contain prerelease and
build parts of a version. For example, `1.2.3.4-rc.1+rev.2` will preserve prerelease `rc.1` and
build `rev.2` in the result.

#### Default

```ts
false;
```

#### Since

7.6.0

---

### loose?

> `optional` **loose**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:107

#### Inherited from

[`Options`](Options.md).[`loose`](Options.md#loose)

---

### rtl?

> `optional` **rtl**: `boolean`

Defined in: node_modules/@types/semver/index.d.ts:133

If the `options.rtl` flag is set, then `coerce` will return the right-most coercible tuple that does
not share an ending index with a longer coercible tuple. For example, `1.2.3.4` will return `2.3.4`
in rtl mode, not `4.0.0`. `1.2.3/4` will return `4.0.0`, because the `4` is not a part of any other
overlapping SemVer tuple.

#### Default

```ts
false;
```

#### Since

6.2.0
