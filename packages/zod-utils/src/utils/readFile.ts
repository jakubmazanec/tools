import {type If} from '@jakubmazanec/ts-utils';
import {type PathLike} from 'node:fs';
import fs from 'node:fs/promises';
import {type z, type ZodTypeAny, type ZodError} from 'zod';

export interface ReadFileOptions {
  parser?: (rawString: string) => unknown;
  throwOnZodError?: boolean;
}

export async function readFile<
  S extends ZodTypeAny,
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
  schema: ZodTypeAny,
  options?: ReadFileOptions,
) {
  let fileParser = options?.parser ?? JSON.parse;
  let rawJson = fileParser(await fs.readFile(path, {encoding: 'utf8'})) as unknown;

  if (options?.throwOnZodError) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- return type is actually defined via the function overload above
    return schema.parse(rawJson);
  }

  let result = schema.safeParse(rawJson);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- return type is actually defined via the function overload above
  return result.success ? result.data : result.error;
}
