[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Function: maxSatisfying()

> **maxSatisfying**\<`T`\>(`versions`, `range`, `optionsOrLoose`?): `T` \| `null`

Return the highest version in the list that satisfies the range, or null if none of them do.

## Type parameters

• **T** _extends_ `string` \| [`SemVer`](../classes/SemVer.md)

## Parameters

• **versions**: readonly `T`[]

• **range**: `string` \| [`Range`](../classes/Range.md)

• **optionsOrLoose?**: `boolean` \| [`RangeOptions`](../interfaces/RangeOptions.md)

## Returns

`T` \| `null`

## Source

node_modules/@types/semver/ranges/max-satisfying.d.ts:8
