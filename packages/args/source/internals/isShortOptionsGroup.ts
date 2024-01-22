export const SHORT_OPTIONS_GROUP_REGEXP = /^-[a-z]{2,}$/iu;

/**
 * A function that checks if a value is an argument that looks like a short options group, i.e. a dash and a single letter; e.g. `'-x'`.
 *
 * @param value The value to check.
 * @return `true` if `value` is a short option.
 */
export function isShortOptionsGroup(arg: string): boolean {
  return SHORT_OPTIONS_GROUP_REGEXP.test(arg);
}
