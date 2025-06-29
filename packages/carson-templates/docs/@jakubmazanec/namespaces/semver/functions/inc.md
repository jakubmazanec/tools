[**@jakubmazanec/carson-templates**](../../../../README.md)

---

# Function: inc()

## Call Signature

> **inc**(`version`, `release`, `optionsOrLoose?`, `identifier?`): `null` \| `string`

Defined in: node_modules/@types/semver/functions/inc.d.ts:12

Return the version incremented by the release type (major, premajor, minor, preminor, patch,
prepatch, or prerelease), or null if it's not valid.

### Parameters

#### version

`string` | [`SemVer`](../classes/SemVer.md)

#### release

[`ReleaseType`](../type-aliases/ReleaseType.md)

#### optionsOrLoose?

`boolean` | [`Options`](../interfaces/Options.md)

#### identifier?

`string`

### Returns

`null` \| `string`

## Call Signature

> **inc**(`version`, `release`, `identifier?`, `identifierBase?`): `null` \| `string`

Defined in: node_modules/@types/semver/functions/inc.d.ts:18

Return the version incremented by the release type (major, premajor, minor, preminor, patch,
prepatch, or prerelease), or null if it's not valid.

### Parameters

#### version

`string` | [`SemVer`](../classes/SemVer.md)

#### release

[`ReleaseType`](../type-aliases/ReleaseType.md)

#### identifier?

`string`

#### identifierBase?

`false` | [`IdentifierBase`](../namespaces/inc/type-aliases/IdentifierBase.md)

### Returns

`null` \| `string`
