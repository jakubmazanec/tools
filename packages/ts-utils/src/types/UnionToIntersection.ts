/**
 * Converts union type to intersection type:
 *
 * ```TypeScript
 * type Result = UnionToIntersection<{ foo: string } | { bar: string }>; // `typeof Result` is `{foo: string} & {bar: string}`
 * ```
 *
 * @typeParam U Base for the new type
 */
export type UnionToIntersection<U> = boolean extends U
  ? UnionToIntersectionHelper<Exclude<U, boolean>> & boolean
  : UnionToIntersectionHelper<U>;

/**
 * Helper type for {@link UnionToIntersection}.
 */
type UnionToIntersectionHelper<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
