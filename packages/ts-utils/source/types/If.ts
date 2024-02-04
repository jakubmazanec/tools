/**
 * `If<X, Y, T, F>` is shorthand for conditional type `X extends Y ? T : F`:
 *
 * ```TypeScript
 * // these two types are equivalent:
 * type NonNullable<T> = T extends null | undefined ? never : T;
 * type NonNullable<T> = If<T, null | undefined, never, T>;
 * ```
 *
 * @typeParam X Type on the left of the `extends`
 * @typeParam Y Type on the right of the `extends`
 * @typeParam T Type returned when `X` is assignable to `Y`
 * @typeParam F Type returned when `X` isn't assignable to `Y`
 */
export type If<X, Y, T, F> = X extends Y ? T : F;
