[**@jakubmazanec/ts-utils**](../README.md)

---

# Function: assert()

> **assert**(`condition`, `errorMessage?`): `asserts condition`

Defined in:
[packages/ts-utils/source/utils/assert.ts:39](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/ts-utils/source/utils/assert.ts#L39)

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

### condition

`unknown`

Condition we're asserting isn't falsy

### errorMessage?

`string`

Message for the `AssertionError`

## Returns

`asserts condition`
