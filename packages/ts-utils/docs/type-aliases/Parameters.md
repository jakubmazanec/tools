[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: Parameters\<T\>

> **Parameters**\<`T`\> = `T` _extends_ (...`args`) => `any` ? `P` : `never`

Defined in:
[packages/ts-utils/source/types/Parameters.ts:19](https://github.com/jakubmazanec/tools/blob/a9ba87d349a220bbed24d161794f90a6ba6009e5/packages/ts-utils/source/types/Parameters.ts#L19)

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

### T

`T` _extends_ (...`args`) => `any` \| `""` \| `false` \| `null` \| `undefined`

Base for the new type
