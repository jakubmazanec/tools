/**
 * Extracts the non-optional keys of type `T`:
 *
 * ```TypeScript
 * type Result = RequiredKeys<{ foo: number; bar: string; baz?: boolean; }>; // `typeof Result` is `'foo' | 'bar`
 * ```
 *
 * @typeParam T Base for the new type
 */
export type RequiredKeys<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? K : never;
  }[keyof T],
  undefined
>;
