[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\> = `boolean` _extends_ `U` ?
> `UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`\>\> & `boolean` :
> `UnionToIntersectionHelper`\<`U`\>

Defined in:
[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/ts-utils/source/types/UnionToIntersection.ts#L10)

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

## Type Parameters

### U

`U`

Base for the new type
