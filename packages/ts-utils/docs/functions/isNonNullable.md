[**@jakubmazanec/ts-utils**](../README.md)

---

# Function: isNonNullable()

> **isNonNullable**\<`T`\>(`value`): `value is NonNullable<T>`

Defined in:
[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/tools/blob/a2ad76298b012139ad7499a776924f487807cb38/packages/ts-utils/source/utils/isNonNullable.ts#L18)

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

### T

`T`

Type of `value`

## Parameters

### value

`T`

Value being checked

## Returns

`value is NonNullable<T>`

`true` if `value` is non-nullable
