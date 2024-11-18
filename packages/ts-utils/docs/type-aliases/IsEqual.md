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

[packages/ts-utils/source/types/IsEqual.ts:15](https://github.com/jakubmazanec/tools/blob/29163046acd1da0224b08fd05ca40f385e9ab4e5/packages/ts-utils/source/types/IsEqual.ts#L15)
