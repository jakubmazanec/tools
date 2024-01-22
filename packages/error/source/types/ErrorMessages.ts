/**
 * Object type whose property keys are `ErrorCode` and whose property values are `string`.
 */
export type ErrorMessages<ErrorCode extends string> = Record<ErrorCode, string>;
