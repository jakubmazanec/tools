[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: IsEqual\<T, U\>

> **IsEqual**\<`T`, `U`\>: \<`G`\>() => `G` _extends_ `T` ? `1` : `2` _extends_ \<`G`\>() => `G`
> _extends_ `U` ? `1` : `2` ? `true` : `false`

Defined in:
[packages/ts-utils/source/types/IsEqual.ts:15](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/ts-utils/source/types/IsEqual.ts#L15)

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
