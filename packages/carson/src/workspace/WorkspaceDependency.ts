import {type WorkspaceDependencyProject} from './WorkspaceDependencyProject.js';

/**
 * Dependency is an external piece of software (e.g. a package) that is installed in a {@link Workspace | a workspace} and usually required by one or more of its {@link Project | projects}.
 */
export type WorkspaceDependency = {
  /** Dependency name. */
  name: string;

  /** List of SemVer version ranges of the dependency that are installed in the workspace. */
  versions: string[];

  /** List of exact versions of the dependency that are installed in the workspace. */
  exactVersions: string[];

  /** Collection of projects that require the dependency. */
  projects: WorkspaceDependencyProject[];
};
