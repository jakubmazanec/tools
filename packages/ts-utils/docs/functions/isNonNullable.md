[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Function: isNonNullable()

> **isNonNullable**\<`T`\>(`value`): `value is NonNullable<T>`

A type guard that checks whether variable is not `null` or `undefined`:

```TypeScript
declare let foobar: string | null;

if (isNonNullable(foobar)) {
  // `typeof foobar` is now `string`
} else {
  // `typeof foobar` is now `null`
}
```

## Type parameters

• **T**

Type of `value`

## Parameters

• **value**: `T`

Value being checked

## Returns

`value is NonNullable<T>`

`true` if `value` is non-nullable

## Source

[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/ts-utils/source/utils/isNonNullable.ts#L18)
