import {type TsconfigJson, tsconfigJsonSchema} from '../types.js';

export function isTsconfigJson(value: unknown): value is TsconfigJson {
  return tsconfigJsonSchema.safeParse(value).success;
}
