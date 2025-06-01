[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: IsEqual\<T, U\>

> **IsEqual**\<`T`, `U`\> = \<`G`\>() => `G` _extends_ `T` ? `1` : `2` _extends_ \<`G`\>() => `G`
> _extends_ `U` ? `1` : `2` ? `true` : `false`

Defined in:
[packages/ts-utils/source/types/IsEqual.ts:15](https://github.com/jakubmazanec/tools/blob/a9ba87d349a220bbed24d161794f90a6ba6009e5/packages/ts-utils/source/types/IsEqual.ts#L15)

Allows you to test if two types are the same:

```TypeScript
type Result = IsEqual<string, number> // `typeof Result` is `false`
```

```TypeScript
type Result = IsEqual<{foo: string}, {foo: string}> // `typeof Result` is `true`
```

## Type Parameters

### T

`T`

First type to compare

### U

`U`

Second type to compare
