/**
 * A subclass of `Error` that indicates an assertion  failure.
 */
export class AssertionError extends Error {
  /**
   * @param message Message added to the default error message
   */
  constructor(message?: string) {
    super(`Wrong assertion encountered${message ? `: "${message}"` : ''}!`);

    this.name = 'AssertionError';
  }
}

/**
 * A function that throws {@link AssertionError} (with optional message defined with `errorMessage`) if
 * `condition` is falsy.
 * You can use it to narrow types:
 *
 * ```TypeScript
 * interface Foo {
 *   kind: 'Foo';
 * }
 *
 * interface Bar {
 *   kind: 'Bar';
 * }
 *
 * declare const foobar: Foo | Bar;
 *
 * assert(is<Foo>(foobar, foobar.kind === 'Foo'));
 *
 * // `typeof foobar` is now `Foo`
 * ```
 *
 * @param condition Condition we're asserting isn't falsy
 * @param errorMessage Message for the `AssertionError`
 */
export function assert(condition: unknown, errorMessage?: string): asserts condition {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- we don't mind here
  if (!condition) {
    throw new AssertionError(errorMessage);
  }
}
