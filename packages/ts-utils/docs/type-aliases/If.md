[**@jakubmazanec/ts-utils**](../README.md)

---

# Type Alias: If\<X, Y, T, F\>

> **If**\<`X`, `Y`, `T`, `F`\> = `X` _extends_ `Y` ? `T` : `F`

Defined in:
[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/ts-utils/source/types/If.ts#L15)

`If<X, Y, T, F>` is shorthand for conditional type `X extends Y ? T : F`:

```TypeScript
// these two types are equivalent:
type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = If<T, null | undefined, never, T>;
```

## Type Parameters

### X

`X`

Type on the left of the `extends`

### Y

`Y`

Type on the right of the `extends`

### T

`T`

Type returned when `X` is assignable to `Y`

### F

`F`

Type returned when `X` isn't assignable to `Y`
