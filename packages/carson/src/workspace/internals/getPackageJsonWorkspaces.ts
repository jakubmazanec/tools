import type {PackageJson} from '@jakubmazanec/zod-utils';

export function getPackageJsonWorkspaces(packageJson: PackageJson) {
  if (Array.isArray(packageJson.workspaces)) {
    return packageJson.workspaces;
  } else if (packageJson.workspaces?.packages) {
    return packageJson.workspaces.packages;
  }

  return undefined;
}
