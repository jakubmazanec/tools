/* eslint-disable @typescript-eslint/no-explicit-any -- needed */

/**
 * Constructs a tuple type from the types used in the parameters of a function type `T`.
 * Similarly like built-in `Parameters` utility type, but works also on nullable and other types.
 *
 * ```TypeScript
 * interface Foo {
 *   get?: (id: number) => string;
 * }
 *
 * declare const foo: Foo;
 *
 * type Result = Parameters<typeof foo.get>; // `typeof Result` is `[id: number]`
 * ```
 *
 * @typeParam T Base for the new type
 */
export type Parameters<T extends ((...args: any[]) => any) | '' | false | null | undefined> =
  T extends (...args: infer P) => any ? P : never;
