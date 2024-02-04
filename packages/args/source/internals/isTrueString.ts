const TRUE_STRING_REGEXP = /^\s*(?:true|1|yes|on)\s*$/iu;

/**
 * A function that checks if a string value is a true string. A true string is `'true'`, `'1'`, `'yes'`, or `'on'` (case insensitive).
 *
 * @param value The value to be tested.
 * @return `true` if string is a true string. */
export function isTrueString(value: string) {
  return TRUE_STRING_REGEXP.test(value);
}
