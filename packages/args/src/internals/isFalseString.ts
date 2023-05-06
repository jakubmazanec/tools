const FALSE_STRING_REGEXP = /^\s*(?:false|0|no|off)\s*$/iu;

/**
 * A function that checks if a string value is a false string. A false string is `'false'`, `'0'`, `'no'`, or `'off'` (case insensitive).
 *
 * @param value The value to be tested.
 * @return `true` if string is a false string. */
export function isFalseString(value: string) {
  return FALSE_STRING_REGEXP.test(value);
}
