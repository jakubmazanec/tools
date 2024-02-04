/**
 * Converts a string representing a command into the arguments, i.e. array of strings.
 *
 * @param value The value to convert.
 * @return Arguments.
 */
export function commandToArguments(value: string): string[] {
  let rawArgs = value.split(' ');
  let args: string[] = [];

  for (let [, rawValue] of rawArgs.entries()) {
    if (rawValue === '' && args.at(-1)) {
      args[args.length - 1] += ' ';
    } else {
      args.push(rawValue);
    }
  }

  return args;
}
