import {type PackageJson} from '@jakubmazanec/zod-utils';

import {type WorkspaceConfig} from './WorkspaceConfig.js';
import {type WorkspaceError} from './WorkspaceError.js';
import {type WorkspaceOptionsProject} from './WorkspaceOptionsProject.js';
import {type WorkspaceRepository} from './WorkspaceRepository.js';

/**
 * {@link Workspace.constructor | Workspace constructor} options parameter.
 */
export type WorkspaceOptions<M extends boolean> =
  M extends true ?
    {
      path: string;
      isMultiProject?: M;
      projectGlobs?: string[];
      projects?: WorkspaceOptionsProject[];
      config?: WorkspaceConfig;
      packageJson?: PackageJson;
      repository?: WorkspaceRepository;
      errors?: Array<InstanceType<typeof WorkspaceError>>;
    }
  : {
      path: string;
      isMultiProject?: M;
      projects?: [WorkspaceOptionsProject];
      config?: WorkspaceConfig;
      repository?: WorkspaceRepository;
      errors?: Array<InstanceType<typeof WorkspaceError>>;
    };
