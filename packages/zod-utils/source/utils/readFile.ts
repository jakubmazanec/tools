import {type If} from '@jakubmazanec/ts-utils';
import {type PathLike} from 'node:fs';
import fs from 'node:fs/promises';
import {type z, type ZodError, type ZodType} from 'zod';

export interface ReadFileOptions {
  parser?: (rawString: string) => unknown;
  throwOnZodError?: boolean;
}

export async function readFile<
  S extends ZodType,
  O extends ReadFileOptions | undefined = undefined,
>(
  path: fs.FileHandle | PathLike,
  schema: S,
  options?: O,
): Promise<
  O extends undefined ? z.infer<S> | ZodError<z.infer<S>>
  : If<NonNullable<O>['throwOnZodError'], true, z.infer<S>, z.infer<S> | ZodError<z.infer<S>>>
>;
export async function readFile(
  path: fs.FileHandle | PathLike,
  schema: ZodType,
  options?: ReadFileOptions,
) {
  let fileParser = options?.parser ?? JSON.parse;
  let rawJson = fileParser(await fs.readFile(path, {encoding: 'utf8'})) as unknown;

  if (options?.throwOnZodError) {
    return schema.parse(rawJson);
  }

  let result = schema.safeParse(rawJson);

  return result.success ? result.data : result.error;
}
