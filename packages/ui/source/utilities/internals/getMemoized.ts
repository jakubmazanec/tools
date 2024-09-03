import {cache} from './cache.js';

export function getMemoized<T>(createKey: () => string, createObject: () => T) {
  let key = createKey();
  let result = cache.get(key) as T;

  if (!result) {
    result = createObject();

    cache.set(key, result);
  }

  return result;
}
