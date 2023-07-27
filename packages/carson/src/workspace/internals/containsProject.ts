import fs from 'fs-extra';
import path from 'node:path';

import {CARSON_CONFIG_DIRECTORY, PACKAGE_JSON_FILENAME} from '../../constants.js';

export async function containsProject(directoryPath: string): Promise<boolean> {
  if (await fs.pathExists(path.join(directoryPath, PACKAGE_JSON_FILENAME))) {
    return true;
  }

  if (await fs.pathExists(path.join(directoryPath, CARSON_CONFIG_DIRECTORY))) {
    return true;
  }

  return false;
}
