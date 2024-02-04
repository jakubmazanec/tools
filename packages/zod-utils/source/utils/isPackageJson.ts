import {type PackageJson, packageJsonSchema} from '../types.js';

export function isPackageJson(value: unknown): value is PackageJson {
  return packageJsonSchema.safeParse(value).success;
}
