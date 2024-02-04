/**
 * A type guard that checks whether variable is not `null` or `undefined`:
 *
 * ```TypeScript
 * declare let foobar: string | null;
 *
 * if (isNonNullable(foobar)) {
 *   // `typeof foobar` is now `string`
 * } else {
 *   // `typeof foobar` is now `null`
 * }
 * ```
 *
 * @typeParam T Type of `value`
 * @param value Value being checked
 * @return `true` if `value` is non-nullable
 */
export function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}
