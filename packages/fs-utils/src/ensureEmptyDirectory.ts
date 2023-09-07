import fs from 'fs-extra';
import path from 'node:path';

import {isEmptyDirectory} from './isEmptyDirectory.js';

/**
 * {@link ensureEmptyDirectory} options parameter.
 */
export type EnsureEmptyDirectoryOptions = {
  /** Allows presence of a `.git` directory */
  allowGit?: boolean | undefined;
};

/**
 * Ensures that a path is actually an empty directory. If the path doesn't exist, the directory is created; if the path exists but isn't an ampty directory, error is thrown.
 *
 * @param path The target path.
 */
export async function ensureEmptyDirectory(
  targetPath: string,
  {allowGit}: EnsureEmptyDirectoryOptions = {},
) {
  await fs.ensureDir(targetPath);

  if (!(await isEmptyDirectory(targetPath))) {
    if (!allowGit) {
      throw new Error(`Directory "${targetPath}" must be empty.`);
    }

    let files = await fs.readdir(targetPath);

    if (files.length !== 1) {
      throw new Error(`Directory "${targetPath}" can contain only ".git" directory.`);
    }

    if (files[0] !== '.git') {
      throw new Error(`Directory "${targetPath}" can contain only ".git" directory.`);
    }

    if (!(await fs.stat(path.join(targetPath, files[0] as string))).isDirectory()) {
      throw new Error(`Directory "${targetPath}" can contain only ".git" directory.`);
    }
  }
}
