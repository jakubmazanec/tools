[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type alias: If\<X, Y, T, F\>

> **If**\<`X`, `Y`, `T`, `F`\>: `X` _extends_ `Y` ? `T` : `F`

`If<X, Y, T, F>` is shorthand for conditional type `X extends Y ? T : F`:

```TypeScript
// these two types are equivalent:
type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = If<T, null | undefined, never, T>;
```

## Type parameters

• **X**

Type on the left of the `extends`

• **Y**

Type on the right of the `extends`

• **T**

Type returned when `X` is assignable to `Y`

• **F**

Type returned when `X` isn't assignable to `Y`

## Source

[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/js-tools/blob/7be96c9bc335915647cfe729050b17fe2580309a/packages/ts-utils/source/types/If.ts#L15)
