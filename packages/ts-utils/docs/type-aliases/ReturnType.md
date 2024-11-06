[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: ReturnType\<T\>

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

## Type parameters

• **T** _extends_ `""` \| `false` \| (...`args`) => `any` \| `null` \| `undefined`

Base for the new type

## Source

[packages/ts-utils/source/types/ReturnType.ts:20](https://github.com/jakubmazanec/tools/blob/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8/packages/ts-utils/source/types/ReturnType.ts#L20)
