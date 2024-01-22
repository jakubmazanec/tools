/**
 * Maps all keys of type `T` to a new object type. Useful for converting interfaces to types or showing better hints from the language server.
 *
 * @typeParam T Base for the new type.
 */
export type Simplify<T> = {[KeyType in keyof T]: T[KeyType]};
