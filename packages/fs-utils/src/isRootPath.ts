import path from 'node:path';

/**
 * Checks if a path is a file system root path.
 *
 * @param path The path to check.
 * @returns `true` if path is the root, `false` otherwise.
 */
export function isRootPath(value: string) {
  return value.toLowerCase() === path.parse(value).root.toLowerCase();
}
