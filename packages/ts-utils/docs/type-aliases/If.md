[**@jakubmazanec/ts-utils**](../README.md) • **Docs**

---

# Type Alias: If\<X, Y, T, F\>

> **If**\<`X`, `Y`, `T`, `F`\>: `X` _extends_ `Y` ? `T` : `F`

`If<X, Y, T, F>` is shorthand for conditional type `X extends Y ? T : F`:

```TypeScript
// these two types are equivalent:
type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = If<T, null | undefined, never, T>;
```

## Type Parameters

• **X**

Type on the left of the `extends`

• **Y**

Type on the right of the `extends`

• **T**

Type returned when `X` is assignable to `Y`

• **F**

Type returned when `X` isn't assignable to `Y`

## Defined in

[packages/ts-utils/source/types/If.ts:15](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/ts-utils/source/types/If.ts#L15)
