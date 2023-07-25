import fs from 'fs-extra';

import {isEmptyDirectory} from './isEmptyDirectory.js';

/**
 * Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is created; if the path exists but isn't an ampty directory, error is thrown.
 *
 * @param path The target path.
 */
export async function ensureEmptyDirectory(targetPath: string) {
  await fs.ensureDir(targetPath);

  if (!(await isEmptyDirectory(targetPath))) {
    throw new Error(`Directory "${targetPath}" must be empty.`);
  }
}
