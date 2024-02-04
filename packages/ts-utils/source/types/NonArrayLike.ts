/* eslint-disable @typescript-eslint/no-explicit-any -- needed */

export type NonArrayLike<T> = T extends ArrayLike<any> ? never : T;
