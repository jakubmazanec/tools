import fs from 'fs-extra';

/**
 * Checks if a path is an empty directory.
 *
 * @param path The path to check.
 * @returns `true` if path is an empty directory, `false` otherwise.
 */
export async function isEmptyDirectory(path: string) {
  try {
    let directory = await fs.opendir(path);
    let entry = await directory.read();

    await directory.close();

    return entry === null;
  } catch {
    return false;
  }
}
