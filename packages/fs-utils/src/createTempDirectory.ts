import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';

/**
 * Creates a unique temporary directory in the operating system's default directory for temporary files. The name of the directory is random, but can be prefixed with a custom string.
 *
 * @param prefix The new directory name prefix.
 * @returns The new directory name.
 * */
export async function createTempDirectory(prefix?: string) {
  return fs.mkdtemp(path.join(os.tmpdir(), prefix ?? '/'));
}
