[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: Parameters\<T\>

> **Parameters**\<`T`\>: `T` _extends_ (...`args`) => `any` ? `P` : `never`

Constructs a tuple type from the types used in the parameters of a function type `T`. Similarly like
built-in `Parameters` utility type, but works also on nullable and other types.

```TypeScript
interface Foo {
  get?: (id: number) => string;
}

declare const foo: Foo;

type Result = Parameters<typeof foo.get>; // `typeof Result` is `[id: number]`
```

## Type Parameters

• **T** _extends_ `""` \| `false` \| (...`args`) => `any` \| `null` \| `undefined`

Base for the new type

## Defined in

[packages/ts-utils/source/types/Parameters.ts:19](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/ts-utils/source/types/Parameters.ts#L19)
