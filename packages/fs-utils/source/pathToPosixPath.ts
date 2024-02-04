import path from 'node:path';

/**
 * Converts path to POSIX path.
 *
 * @param value The path to convert.
 * @returns The converted path.
 */
export function pathToPosixPath(value: string): string {
  return value.split(path.win32.sep).join(path.posix.sep);
}
