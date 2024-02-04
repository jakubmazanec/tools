const SHORT_OPTION_REGEXP = /^-[a-z]{1}$/iu;

/**
 * A function that checks if a value is an argument that looks like a short option, i.e. a dash and a single letter; e.g. `'-x'`.
 *
 * @param value The value to check.
 * @return `true` if `value` is a short option.
 */
export function isShortOption(arg: string): boolean {
  return SHORT_OPTION_REGEXP.test(arg);
}
