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

[packages/ts-utils/source/utils/isNonNullable.ts:18](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/ts-utils/source/utils/isNonNullable.ts#L18)
