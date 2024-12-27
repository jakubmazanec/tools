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

## Type Parameters

• **T**

Type of `value`

## Parameters

• **value**: `T`

Value being checked

## Returns

`value is NonNullable<T>`

`true` if `value` is non-nullable

## Defined in

[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/tools/blob/d628f137f5fc7b1bea261e1e59d468d8339ed884/packages/ts-utils/source/utils/isNonNullable.ts#L18)
