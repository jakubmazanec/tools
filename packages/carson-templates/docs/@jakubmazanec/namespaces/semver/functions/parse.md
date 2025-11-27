[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: parse()

## Call Signature

> **parse**(`version?`): [`SemVer`](../classes/SemVer.md) \| `null`

Defined in: node_modules/@types/semver/functions/parse.d.ts:11

Return the parsed version as a `SemVer` object.

In case `version` is invalid, the function will

- throw if `throwErrors` is `true`.
- return `null` otherwise.

### Parameters

#### version?

`string` | [`SemVer`](../classes/SemVer.md) | `null`

### Returns

[`SemVer`](../classes/SemVer.md) \| `null`

## Call Signature

> **parse**(`version`, `optionsOrLoose`, `throwErrors`): [`SemVer`](../classes/SemVer.md)

Defined in: node_modules/@types/semver/functions/parse.d.ts:12

Return the parsed version as a `SemVer` object.

In case `version` is invalid, the function will

- throw if `throwErrors` is `true`.
- return `null` otherwise.

### Parameters

#### version

`string` | [`SemVer`](../classes/SemVer.md) | `null` | `undefined`

#### optionsOrLoose

`boolean` | [`Options`](../interfaces/Options.md)

#### throwErrors

`true`

### Returns

[`SemVer`](../classes/SemVer.md)

## Call Signature

> **parse**(`version`, `optionsOrLoose`, `throwErrors?`): [`SemVer`](../classes/SemVer.md) \| `null`

Defined in: node_modules/@types/semver/functions/parse.d.ts:17

Return the parsed version as a `SemVer` object.

In case `version` is invalid, the function will

- throw if `throwErrors` is `true`.
- return `null` otherwise.

### Parameters

#### version

`string` | [`SemVer`](../classes/SemVer.md) | `null` | `undefined`

#### optionsOrLoose

`boolean` | [`Options`](../interfaces/Options.md)

#### throwErrors?

`boolean`

### Returns

[`SemVer`](../classes/SemVer.md) \| `null`
