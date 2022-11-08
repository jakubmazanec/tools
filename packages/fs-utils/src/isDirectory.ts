import fs from 'fs-extra';

/**
 * Checks if a path is a directory.
 *
 * @param path The path to check.
 * @returns `true` if path is a directory, `false` otherwise.
 */
export async function isDirectory(path: string): Promise<boolean> {
  let stat = await fs.lstat(path);

  return stat.isDirectory();
}
