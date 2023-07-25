import {type PackageJson} from '@jakubmazanec/zod-utils';

import {type ProjectConfig} from './ProjectConfig.js';

/**
 * Type alias for {@link WorkspaceOptions.projects | WorkspaceOptions.projects} property.
 */
export type WorkspaceOptionsProject = {
  path: string;
  config?: ProjectConfig;
  packageJson?: PackageJson;
};
