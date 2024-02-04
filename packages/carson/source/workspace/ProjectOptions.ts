import {type PackageJson} from '@jakubmazanec/zod-utils';

import {type ProjectConfig} from './ProjectConfig.js';
import {type ProjectError} from './ProjectError.js';
import {type Workspace} from './Workspace.js';

/**
 * {@link Project.constructor | Project constructor} options parameter.
 */
export type ProjectOptions<M extends boolean> = {
  path: string;
  name?: string;
  config?: ProjectConfig;
  packageJson?: PackageJson;
  workspace: Workspace<M>;
  errors?: Array<InstanceType<typeof ProjectError>>;
};
