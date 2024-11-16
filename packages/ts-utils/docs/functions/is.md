[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Function: is()

> **is**\<`T`\>(`value`, `isMatched`): `value is T`

A generic type guard. If `isMatched` is `true`, TypeScript assumes `value` is of type `T`. You can
use it to narrow types:

```TypeScript
interface Foo {
  value: string;
}

interface Bar {
  value: number;
}

declare let foobar: Foo | Bar;

if (is<Foo>(foobar, typeof foobar.value === 'string')) {
  // `typeof foobar` is now `Foo`
} else {
  // `typeof foobar` is now `Bar`
}
```

## Type Parameters

• **T**

Potential type of `value`

## Parameters

• **value**: `unknown`

Value being checked

• **isMatched**: `boolean`

Specifies if `value` is of type `T`

## Returns

`value is T`

Value of `isMatched`

## Defined in

[packages/ts-utils/source/utils/is.ts:28](https://github.com/jakubmazanec/tools/blob/eb8c22844f0a0aa0874efeab93afc2bd96c269e6/packages/ts-utils/source/utils/is.ts#L28)
