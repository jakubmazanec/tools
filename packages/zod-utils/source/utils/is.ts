import {type z, type ZodTypeAny} from 'zod';

export function is<S extends ZodTypeAny>(value: unknown, schema: S): value is z.infer<S> {
  return schema.safeParse(value).success;
}
