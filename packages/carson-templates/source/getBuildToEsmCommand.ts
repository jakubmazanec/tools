import {type Workspace} from '@jakubmazanec/carson';
import semver from 'semver';

import {BUILD_DIRECTORY, DEPENDENCY_VERSIONS, SOURCE_DIRECTORY} from './constants.js';

export function getBuildToEsmCommand(workspace: Workspace | Workspace<false>) {
  let nodeVersion = workspace.allDependencies.getVersions().node?.[0] ?? DEPENDENCY_VERSIONS.node!;

  return `esbuild "${SOURCE_DIRECTORY}/**/*" --platform=node --target=node${semver.major(semver.minVersion(nodeVersion)!)}.${semver.minor(semver.minVersion(nodeVersion)!)} --outdir=${BUILD_DIRECTORY} --sourcemap`;
}
