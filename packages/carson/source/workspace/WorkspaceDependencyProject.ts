/**
 * Type alias for {@link WorkspaceDependency.projects | WorkspaceDependency.projects} property.
 */
export type WorkspaceDependencyProject = {
  /** Project name. */
  name: string;

  /** SemVer version range of the dependency that is actually is actually required by the project. */
  version: string;

  /** Exact version of the dependency that is actually is actually required by the project. */
  exactVersion: string;
};
