import fs from 'fs-extra';
import path from 'node:path';

import {CARSON_CONFIG_DIRECTORY, PROJECT_CONFIG_FILENAME} from '../constants.js';
import {prettify} from '../template/internals.js';
import {type ProjectConfig} from './ProjectConfig.js';

/**
 * {@link saveProjectConfig} options parameter.
 */
export type SaveProjectConfigOptions = {
  projectPath: string;
  projectConfig: ProjectConfig;
};

/**
 * Saves project configuration to the config file.
 *
 * @param options Options.
 */
export async function saveProjectConfig({projectPath, projectConfig}: SaveProjectConfigOptions) {
  await fs.ensureDir(path.join(projectPath, CARSON_CONFIG_DIRECTORY));

  let projectConfigPath = path.join(projectPath, CARSON_CONFIG_DIRECTORY, PROJECT_CONFIG_FILENAME);

  await fs.writeFile(
    projectConfigPath,
    await prettify(JSON.stringify(projectConfig), projectConfigPath),
    {encoding: 'utf8'},
  );
}
