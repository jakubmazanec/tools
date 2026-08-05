[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`> \> = `boolean` _extends_ `U` ?
> `UnionToIntersectionHelper`\<`Exclude`\<`U`, `boolean`>> \>\> & `boolean` :
> `UnionToIntersectionHelper`\<`U`>\>

Defined in:
[packages/ts-utils/source/types/UnionToIntersection.ts:10](https://github.com/jakubmazanec/tools/blob/58225e9d3ad6348b685d0f2999c8be0390339cd4/packages/ts-utils/source/types/UnionToIntersection.ts#L10)

Converts union type to intersection type:

```TypeScript
type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
```

## Type Parameters

### U

`U`

Base for the new type
