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

[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/ts-utils/source/types/If.ts#L15)
