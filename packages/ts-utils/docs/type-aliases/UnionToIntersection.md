[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\>: `boolean` _extends_ `U` ?
> `UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`\>\> & `boolean` :
> `UnionToIntersectionHelper`\<`U`\>

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

## Type Parameters

• **U**

Base for the new type

## Defined in

[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/ts-utils/source/types/UnionToIntersection.ts#L10)
