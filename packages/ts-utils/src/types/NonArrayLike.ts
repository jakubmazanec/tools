export type NonArrayLike<T> = T extends ArrayLike<any> ? never : T;
