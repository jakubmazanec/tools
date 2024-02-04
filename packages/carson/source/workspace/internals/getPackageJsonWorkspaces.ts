import {isPackageJson, type Json, type PackageJson} from '@jakubmazanec/zod-utils';

function isStringList(value: unknown): value is string[] {
  if (Array.isArray(value) && value.some((item) => typeof item === 'string')) {
    return true;
  }

  return false;
}

function isNonPrimitive(value: unknown): value is object {
  if (typeof value === 'object' && value !== null) {
    return true;
  }

  return false;
}

export function getPackageJsonWorkspaces(packageJson: Json | PackageJson): string[] | undefined {
  if (isPackageJson(packageJson)) {
    if (Array.isArray(packageJson.workspaces)) {
      return packageJson.workspaces;
    } else if (packageJson.workspaces?.packages) {
      return packageJson.workspaces.packages;
    }
  } else if (isNonPrimitive(packageJson) && !Array.isArray(packageJson)) {
    if (isStringList(packageJson.workspaces)) {
      return packageJson.workspaces;
    } else if (
      isNonPrimitive(packageJson.workspaces) &&
      !Array.isArray(packageJson.workspaces) &&
      isStringList(packageJson.workspaces.packages)
    ) {
      return packageJson.workspaces.packages;
    }
  }

  return undefined;
}
