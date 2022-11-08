import fs from 'fs-extra';
import path from 'node:path';

import {isDirectory} from './isDirectory.js';

/**
 * Travels up the file system tree from a starting path and returns path of the first existing directory.
 *
 * ```TypeScript
 * let result = findExistingDirectory('/foo/bar/baz'); // if there is no `bar` directory, `result` is `'/foo'`
 * ```
 *
 * @param searchPath Search path.
 */
export async function findExistingDirectory(searchPath: string) {
  let result = searchPath;
  let pathExists = await fs.pathExists(result);

  while (!pathExists) {
    result = path.dirname(result);
    pathExists = await fs.pathExists(result);
  }

  let isResultDirectory = await isDirectory(result);

  if (!isResultDirectory) {
    result = path.dirname(result);
  }

  return result;
}
