/**
 * Converts tuple type to union type:
 *
 * ```TypeScript
 * type Result = TupleToUnion<['foo', 'bar']>; // `typeof Result` is `"foo" | "bar"`
 * ```
 *
 * @typeParam T Base for the new type
 */
export type TupleToUnion<T extends unknown[] | readonly unknown[]> = T[number];
