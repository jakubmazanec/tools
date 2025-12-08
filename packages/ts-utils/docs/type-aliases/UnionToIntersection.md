[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\> = `boolean` _extends_ `U` ?
> `UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`\>\> & `boolean` :
> `UnionToIntersectionHelper`\<`U`\>

Defined in:
[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/ts-utils/source/types/UnionToIntersection.ts#L10)

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

## Type Parameters

### U

`U`

Base for the new type
