import {type PackageJson} from '@jakubmazanec/zod-utils';

/**
 * Type alias for {@link Workspace.packageJson | Workspace.packageJson} property.
 */
export type WorkspacePackageJson<M extends boolean> = M extends true ? PackageJson : null;
