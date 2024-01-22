import {type PackageJson} from '@jakubmazanec/zod-utils';
import fs from 'fs-extra';
import path from 'node:path';

import {
  CARSON_CONFIG_DIRECTORY,
  PACKAGE_JSON_FILENAME,
  PROJECT_CONFIG_FILENAME,
} from '../../constants.js';

export async function containsProject(directoryPath: string): Promise<boolean> {
  let packageJsonPath = path.join(directoryPath, PACKAGE_JSON_FILENAME);

  if (await fs.pathExists(packageJsonPath)) {
    let packageJson = (await fs.readJson(packageJsonPath)) as PackageJson | undefined;

    if (packageJson?.name) {
      return true;
    }

    return false;
  }

  if (
    await fs.pathExists(path.join(directoryPath, CARSON_CONFIG_DIRECTORY, PROJECT_CONFIG_FILENAME))
  ) {
    return true;
  }

  return false;
}
