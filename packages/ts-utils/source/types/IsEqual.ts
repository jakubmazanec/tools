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
 * @typeParam T First type to compare
 * @typeParam U Second type to compare
 */
export type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false;
