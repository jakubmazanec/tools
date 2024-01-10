import {type If} from '@jakubmazanec/ts-utils';
import {type PathLike} from 'node:fs';
import type fs from 'node:fs/promises';
import {type ZodError} from 'zod';

import {type PackageJson, packageJsonSchema} from '../types.js';
import {readFile} from './readFile.js';

export interface ReadPackageJsonOptions {
  throwOnZodError?: boolean;
}

export async function readPackageJson<O extends ReadPackageJsonOptions | undefined = undefined>(
  path: fs.FileHandle | PathLike,
  options?: O,
): Promise<
  O extends undefined ? PackageJson | ZodError<PackageJson>
  : If<NonNullable<O>['throwOnZodError'], true, PackageJson, PackageJson | ZodError<PackageJson>>
>;
export async function readPackageJson(
  path: fs.FileHandle | PathLike,
  options?: ReadPackageJsonOptions,
) {
  return readFile(path, packageJsonSchema, options);
}
