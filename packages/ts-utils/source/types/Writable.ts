/**
 * Create a new type that removes `readonly` from object types's keys. Inverse of {@link Readonly<T>}.
 */
export type Writable<T> = {
  -readonly [K in keyof T]: T[K];
};
