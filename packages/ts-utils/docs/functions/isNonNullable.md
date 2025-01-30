[**@jakubmazanec/ts-utils**](../README.md)

---

# Function: isNonNullable()

> **isNonNullable**\<`T`\>(`value`): `value is NonNullable<T>`

Defined in:
[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/tools/blob/76a9140b954a789a6120dd2126b179ec0180d7e9/packages/ts-utils/source/utils/isNonNullable.ts#L18)

A type guard that checks whether variable is not `null` or `undefined`:

```TypeScript
declare let foobar: string | null;

if (isNonNullable(foobar)) {
  // `typeof foobar` is now `string`
} else {
  // `typeof foobar` is now `null`
}
```

## Type Parameters

• **T**

Type of `value`

## Parameters

### value

`T`

Value being checked

## Returns

`value is NonNullable<T>`

`true` if `value` is non-nullable
