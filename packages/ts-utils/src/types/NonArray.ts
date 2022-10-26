/* eslint-disable @typescript-eslint/no-explicit-any -- needed */

export type NonArray<T> = T extends any[] ? never : T;
