/**
 * Constructs a type consisting of the return type of function `T`.
 * Similarly like built-in `ReturnType` utility type, but works also on nullable and other types,
 * and if you use it with async function, it doesn't return the type as a `Promise`:
 *
 * ```TypeScript
 * interface Foo {
 *   get?: (id: number) => Promise<string>;
 * }
 *
 * declare const foo: Foo;
 *
 * type Result = ReturnType<typeof foo.get>; // `typeof Result` is `string`
 * ```
 *
 * @typeParam T Base for the new type
 */
export type ReturnType<T extends '' | false | ((...args: any[]) => any) | null | undefined> =
  T extends (...args: any[]) => infer R ? (R extends PromiseLike<infer J> ? J : R) : never;
