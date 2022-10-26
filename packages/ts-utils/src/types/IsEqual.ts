/**
 * Allows you to test if two types are the same:
 *
 * ```TypeScript
 * type Result = IsEqual<string, number> // `typeof Result` is `false`
 * ```
 *
 * ```TypeScript
 * type Result = IsEqual<{foo: string}, {foo: string}> // `typeof Result` is `true`
 * ```
 *
 * @typeParam A1 First type to compare
 * @typeParam A2 Second type to compare
 */
export type IsEqual<A1, A2> = IsStrictlyEqual<Unite<A1>, Unite<A2>>;

/**
 * Helper type for {@linkcode IsEqual}.
 */
type IsStrictlyEqual<A1, A2> = (<A>() => A extends A2 ? true : false) extends <A>() => A extends A1
  ? true
  : false
  ? true
  : false;

/**
 * Helper type for {@linkcode IsEqual}.
 */
type Unite<T> = T extends Record<string, unknown> ? {[K in keyof T]: T[K]} : T;
