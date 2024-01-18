import fs from 'fs-extra';
import path from 'node:path';

import {CARSON_CONFIG_DIRECTORY, WORKSPACE_CONFIG_FILENAME} from '../constants.js';
import {prettify} from '../template/internals.js';
import {type WorkspaceConfig} from './WorkspaceConfig.js';

/**
 * {@link saveWorkspaceConfig} options parameter.
 */
export type SaveWorkspaceConfigOptions = {
  workspacePath: string;
  workspaceConfig: WorkspaceConfig;
};

/**
 * Saves workspace configuration to the config file.
 *
 * @param options Options.
 */
export async function saveWorkspaceConfig({
  workspacePath,
  workspaceConfig,
}: SaveWorkspaceConfigOptions) {
  await fs.ensureDir(path.join(workspacePath, CARSON_CONFIG_DIRECTORY));

  let workspaceConfigPath = path.join(
    workspacePath,
    CARSON_CONFIG_DIRECTORY,
    WORKSPACE_CONFIG_FILENAME,
  );

  await fs.writeFile(
    workspaceConfigPath,
    await prettify(JSON.stringify(workspaceConfig), workspaceConfigPath),
    {encoding: 'utf8'},
  );
}
