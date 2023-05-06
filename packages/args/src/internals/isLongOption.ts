const LONG_OPTION_REGEXP = /^--[a-z][-a-z0-9]+$/iu;

/**
 * A function that checks if a value is an argument that looks like a long option, i.e. two dashes and a single word consisting only of letters, numbers (but not at the start of the word) or dashes; e.g. `'--some-option'`.
 *
 * @param value The value to check.
 * @return `true` if `value` is a long option.
 */
export function isLongOption(arg: string): boolean {
  return LONG_OPTION_REGEXP.test(arg);
}
