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

[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/ts-utils/source/types/If.ts#L15)