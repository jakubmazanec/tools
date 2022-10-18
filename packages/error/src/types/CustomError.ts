import type {UNKNOWN_ERROR} from '../constants.js';

/**
 * Type representing custom error.
 */
export type CustomError<ErrorCode extends string, ErrorData> = Error & {
  /** String that is used to quickly determine the nature of the error and why it could have occurred. */
  code: ErrorCode | typeof UNKNOWN_ERROR;

  /** Data related to the error that can be used during the error handling process to gain more information or take an action. */
  data?: ErrorData;
};
