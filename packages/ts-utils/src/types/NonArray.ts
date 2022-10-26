export type NonArray<T> = T extends any[] ? never : T;
