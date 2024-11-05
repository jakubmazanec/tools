[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: Parameters\<T\>

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

## Type parameters

• **T** _extends_ `""` \| `false` \| (...`args`) => `any` \| `null` \| `undefined`

Base for the new type

## Source

[packages/ts-utils/source/types/Parameters.ts:19](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ts-utils/source/types/Parameters.ts#L19)
