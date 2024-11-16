import {type Primitive} from '../types.js';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- this is intended
export function tuple<T extends Array<Primitive | {}>>(...values: T) {
  return values;
}
