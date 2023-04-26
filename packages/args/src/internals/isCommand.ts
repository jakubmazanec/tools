export const COMMAND_REGEXP = /^(?:[a-z][-a-z0-9]*[a-z])+(?:\s(?:[a-z][-a-z0-9]*[a-z])+)*$/iu;

/**
 * A function that checks if a value is an argument that looks like command, i.e. space-separated words consisting only of letters, numbers (but not at the start of the word) or dashes.
 *
 * @param value The value to check.
 * @return `true` if `value` is a command.
 */
export function isCommand(value: string): boolean {
  return COMMAND_REGEXP.test(value);
}
