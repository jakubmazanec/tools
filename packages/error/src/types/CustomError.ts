import {type UNKNOWN_ERROR} from '../constants.js';

/**
 * Type representing custom error.
 */
export type CustomError<ErrorCode extends string> = Error & {
  /** String that is used to quickly determine the nature of the error and why it could have occurred. */
  code: ErrorCode | typeof UNKNOWN_ERROR;
};
