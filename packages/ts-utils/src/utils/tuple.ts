import {type Primitive} from '../types.js';

// eslint-disable-next-line @typescript-eslint/ban-types -- this is intended
export function tuple<T extends Array<Primitive | {}>>(...values: T) {
  return values;
}
