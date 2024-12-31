[**@jakubmazanec/carson-templates**](../../../README.md)

---

# Function: simplifyRange()

> **simplifyRange**(`ranges`, `range`, `options`?): `string` \| [`Range`](../classes/Range.md)

Defined in: node_modules/@types/semver/ranges/simplify.d.ts:12

Return a "simplified" range that matches the same items in `versions` list as the range specified.
Note that it does _not_ guarantee that it would match the same versions in all cases, only for the
set of versions provided. This is useful when generating ranges by joining together multiple
versions with `||` programmatically, to provide the user with something a bit more ergonomic. If the
provided range is shorter in string-length than the generated range, then that is returned.

## Parameters

### ranges

`string`[]

### range

`string` | [`Range`](../classes/Range.md)

### options?

[`Options`](../interfaces/Options.md)

## Returns

`string` \| [`Range`](../classes/Range.md)
