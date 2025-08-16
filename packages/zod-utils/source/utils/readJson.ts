import {type If} from '@jakubmazanec/ts-utils';
import {type PathLike} from 'node:fs';
import type fs from 'node:fs/promises';
import {type z, type ZodError, type ZodType} from 'zod';

import {readFile} from './readFile.js';

export interface ReadJsonOptions {
  throwOnZodError?: boolean;
}

export async function readJson<
  S extends ZodType,
  O extends ReadJsonOptions | undefined = undefined,
>(
  path: fs.FileHandle | PathLike,
  schema: S,
  options?: O,
): Promise<
  O extends undefined ? z.infer<S> | ZodError<z.infer<S>>
  : If<NonNullable<O>['throwOnZodError'], true, z.infer<S>, z.infer<S> | ZodError<z.infer<S>>>
>;
export async function readJson(
  path: fs.FileHandle | PathLike,
  schema: ZodType,
  options?: ReadJsonOptions,
) {
  return readFile(path, schema, options);
}
