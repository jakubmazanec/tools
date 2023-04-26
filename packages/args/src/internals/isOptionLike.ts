const OPTION_LIKE = /^-{1,2}[a-z][-a-z0-9]*=?/iu;

/**
 * A function that checks if a value is an argument that looks like a long option, short option, or a short options group i.e. one or two dashes and a single word consisting only of letters, numbers (but not at the start of the word) or dashes, optionally followed by `=`.
 *
 * @param value The value to check.
 * @return `true` if `value` is an option.
 */
export function isOptionLike(value: string): boolean {
  return OPTION_LIKE.test(value);
}
