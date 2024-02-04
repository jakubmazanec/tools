/**
 * Rotate an array by `n` places.
 *
 * @param value An array to rotate.
 * @param n By how many places the items should move.
 * @returns The new item with items rotated.
 */
export function rotate<T>(value: T[], n: number) {
  let x = [...value];

  return [...x.splice(-n % x.length), ...x];
}
