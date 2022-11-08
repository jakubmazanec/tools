import {type If} from '@jakubmazanec/ts-utils';
import {type PathLike} from 'node:fs';
import type fs from 'node:fs/promises';
import {type z, type ZodTypeAny, type ZodError} from 'zod';

import {readFile} from './readFile.js';

export interface ReadJsonOptions {
  throwOnZodError?: boolean;
}

export async function readJson<
  S extends ZodTypeAny,
  O extends ReadJsonOptions | undefined = undefined,
>(
  path: fs.FileHandle | PathLike,
  schema: S,
  options?: O,
): Promise<
  O extends undefined
    ? z.infer<S> | ZodError<z.infer<S>>
    : If<NonNullable<O>['throwOnZodError'], true, z.infer<S>, z.infer<S> | ZodError<z.infer<S>>>
>;
export async function readJson(
  path: fs.FileHandle | PathLike,
  schema: ZodTypeAny,
  options?: ReadJsonOptions,
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- return type is actually defined via the function overload above
  return readFile(path, schema, options);
}
