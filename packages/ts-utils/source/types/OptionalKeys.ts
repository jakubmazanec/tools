/**
 * Extracts the optional keys of type `T`:
 *
 * ```TypeScript
 * type Result = OptionalKeys<{ foo?: number; bar?: string; baz: boolean; }>; // `typeof Result` is `'foo' | 'bar`
 * ```
 *
 * @typeParam T Base for the new type
 */
export type OptionalKeys<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;
