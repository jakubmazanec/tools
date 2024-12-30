[**@jakubmazanec/ts-utils**](../README.md)

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

[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/tools/blob/3e339f67fc5b5cd011c28acb315570a2f29efedc/packages/ts-utils/source/types/UnionToIntersection.ts#L10)
