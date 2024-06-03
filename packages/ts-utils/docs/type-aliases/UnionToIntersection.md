[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\>: `boolean` _extends_ `U` ?
> `UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`\>\> & `boolean` :
> `UnionToIntersectionHelper`\<`U`\>

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

## Type parameters

• **U**

Base for the new type

## Source

[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/ts-utils/source/types/UnionToIntersection.ts#L10)
