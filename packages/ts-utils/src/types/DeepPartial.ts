/* eslint-disable @typescript-eslint/no-empty-interface -- needed */

import type {Primitive} from './Primitive.js';

/**
 * Same as built-in `Partial`, but works recursively. Useful when 1) you have a config object to which you need to merge another object, which would be a deep partial of a default object, or 2) you need to test or mock complex object, but most of its keys would be redundant for this purpose.
 *
 * ```TypeScript
 * import { DeepPartial } from '@ori/ts-utils';
 * import { UiSettings } from './UiSettings';
 *
 * let settings: UiSettings = {
 *   lineNumbers: true,
 *   scrollbar: {
 *     useShadows: false,
 *     vertical: 'visible',
 *     horizontal: 'auto',
 *   },
 *   minimap: {
 *     enabled: false,
 *   },
 *   folding: {
 *     enabled: true,
 *   },
 * };
 *
 * function updateSettings(newSettings: DeepPartial<UiSettings>) {
 *   return { ...settings, ...newSettings };
 * }
 *
 * settings = updateSettings({ minimap: { enabled: true } });
 * ```
 *
 * @typeParam T Base for the new type
 */
export type DeepPartial<T> = T extends Date | Primitive | RegExp
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? DeepPartialMap<KeyType, ValueType>
  : T extends Set<infer ItemType>
  ? DeepPartialSet<ItemType>
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? DeepPartialReadonlyMap<KeyType, ValueType>
  : T extends ReadonlySet<infer ItemType>
  ? DeepPartialReadonlySet<ItemType>
  : T extends (...args: any[]) => unknown
  ? T | undefined
  : T extends object
  ? T extends Array<infer I> // Test for arrays/tuples, per https://github.com/microsoft/TypeScript/issues/35156
    ? I[] extends T // Test for arrays (non-tuples) specifically
      ? Array<DeepPartial<I | undefined>> // Recreate relevant array type to prevent eager evaluation of circular reference
      : DeepPartialObject<T> // Tuples behave properly
    : DeepPartialObject<T>
  : unknown;

/**
 * Helper type for {@linkcode DeepPartial}.
 */
interface DeepPartialMap<KeyType, ValueType>
  extends Map<DeepPartial<KeyType>, DeepPartial<ValueType>> {}

/**
 * Helper type for {@linkcode DeepPartial}.
 */
interface DeepPartialSet<T> extends Set<DeepPartial<T>> {}

/**
 * Helper type for {@linkcode DeepPartial}.
 */
interface DeepPartialReadonlyMap<KeyType, ValueType>
  extends ReadonlyMap<DeepPartial<KeyType>, DeepPartial<ValueType>> {}

/**
 * Helper type for {@linkcode DeepPartial}.
 */
interface DeepPartialReadonlySet<T> extends ReadonlySet<DeepPartial<T>> {}

/**
 * Helper type for {@linkcode DeepPartial}.
 */
type DeepPartialObject<ObjectType extends object> = {
  [KeyType in keyof ObjectType]?: DeepPartial<ObjectType[KeyType]>;
};
