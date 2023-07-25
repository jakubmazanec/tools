/* eslint-disable @typescript-eslint/no-explicit-any -- needed */

import type {Primitive} from './Primitive.js';

/**
 * Same as built-in `Readonly`, but works recursively:
 *
 * ```TypeScript
 * import { DeepReadonly } from '@ori/ts-utils';
 *
 * const rawData = {
 *   foo: ['bar'],
 * };
 *
 * const data: DeepReadonly<typeof rawData> = rawData;
 *
 * data.foo.push('bar'); // error TS2339: Property 'push' does not exist on type 'readonly string[]'
 * ```
 *
 * @typeParam T Base for the new type
 */
export type DeepReadonly<T> = T extends Primitive | ((...args: any[]) => unknown)
  ? T
  : T extends ReadonlyMap<infer K, infer V>
  ? DeepReadonlyMap<K, V>
  : T extends ReadonlySet<infer I>
  ? DeepReadonlySet<I>
  : T extends object
  ? DeepReadonlyObject<T>
  : unknown;

/**
 * Helper type for {@link DeepReadonly}.
 */
type DeepReadonlyMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>;

/**
 * Helper type for {@link DeepReadonly}.
 */
type DeepReadonlySet<I> = ReadonlySet<DeepReadonly<I>>;

/**
 * Helper type for {@link DeepReadonly}.
 */
type DeepReadonlyObject<O extends object> = {
  readonly [K in keyof O]: DeepReadonly<O[K]>;
};
