[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Function: assert()

> **assert**(`condition`, `errorMessage`?): `asserts condition`

A function that throws [AssertionError](../classes/AssertionError.md) (with optional message defined
with `errorMessage`) if `condition` is falsy. You can use it to narrow types:

```TypeScript
interface Foo {
  kind: 'Foo';
}

interface Bar {
  kind: 'Bar';
}

declare const foobar: Foo | Bar;

assert(is<Foo>(foobar, foobar.kind === 'Foo'));

// `typeof foobar` is now `Foo`
```

## Parameters

• **condition**: `unknown`

Condition we're asserting isn't falsy

• **errorMessage?**: `string`

Message for the `AssertionError`

## Returns

`asserts condition`

## Defined in

[packages/ts-utils/source/utils/assert.ts:39](https://github.com/jakubmazanec/tools/blob/05074a1dedd887672f015df129961cd35c75acfe/packages/ts-utils/source/utils/assert.ts#L39)
