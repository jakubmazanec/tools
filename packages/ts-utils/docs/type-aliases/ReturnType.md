[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: ReturnType\<T\>

> **ReturnType**\<`T`\>: `T` _extends_ (...`args`) => infer R ? `R` _extends_ `PromiseLike`\<infer
> J\> ? `J` : `R` : `never`

Constructs a type consisting of the return type of function `T`. Similarly like built-in
`ReturnType` utility type, but works also on nullable and other types, and if you use it with async
function, it doesn't return the type as a `Promise`:

```TypeScript
interface Foo {
  get?: (id: number) => Promise<string>;
}

declare const foo: Foo;

type Result = ReturnType<typeof foo.get>; // `typeof Result` is `string`
```

## Type Parameters

• **T** _extends_ `""` \| `false` \| (...`args`) => `any` \| `null` \| `undefined`

Base for the new type

## Defined in

[packages/ts-utils/source/types/ReturnType.ts:20](https://github.com/jakubmazanec/tools/blob/1c4f0471e4ca7ee64c14124101a8ac795175e9bf/packages/ts-utils/source/types/ReturnType.ts#L20)
