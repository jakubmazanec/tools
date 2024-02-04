import fs from 'fs-extra';

/**
 * Finds all directories that are direct sub-directories of a path.
 *
 * @param searchPath Search path.
 * @returns The list of directory names.
 */
export async function findDirectories(searchPath: string): Promise<string[]> {
  return (await fs.readdir(searchPath, {withFileTypes: true}))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}
