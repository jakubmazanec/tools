[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: IsEqual\<T, U\>

> **IsEqual**\<`T`, `U`\>: \<`G`\>() => `G` _extends_ `T` ? `1` : `2` _extends_ \<`G`\>() => `G`
> _extends_ `U` ? `1` : `2` ? `true` : `false`

Allows you to test if two types are the same:

```TypeScript
type Result = IsEqual<string, number> // `typeof Result` is `false`
```

```TypeScript
type Result = IsEqual<{foo: string}, {foo: string}> // `typeof Result` is `true`
```

## Type Parameters

• **T**

First type to compare

• **U**

Second type to compare

## Defined in

[packages/ts-utils/source/types/IsEqual.ts:15](https://github.com/jakubmazanec/tools/blob/3137813ef46c72d3c081751f960a2aa2c61ad567/packages/ts-utils/source/types/IsEqual.ts#L15)
