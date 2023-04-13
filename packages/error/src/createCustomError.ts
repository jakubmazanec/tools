import {INTERNAL_ERROR_MESSAGES, UNKNOWN_ERROR} from './constants.js';
import {createErrorMessage} from './internals.js';
import {type CustomError, type CustomErrorOptions, type ErrorMessages} from './types.js';

/**
 * Function for creating custom error classes. Such custom error class properly subclasses built-in `Error` and simplifies
 * generating error messages via predefined error codes.
 *
 * @param errorName Error name.
 * @param errorMessages Object containing all possible error messages.
 * @return Class that implements {@linkcode CustomError}.
 */
export function createCustomError<ErrorCode extends string>(
  errorName: string,
  errorMessages: ErrorMessages<ErrorCode>,
): new (code: ErrorCode, options?: CustomErrorOptions) => CustomError<
  ErrorCode | typeof UNKNOWN_ERROR
> {
  return class InternalCustomError extends Error implements CustomError<ErrorCode> {
    code: ErrorCode | typeof UNKNOWN_ERROR;

    constructor(errorCode: ErrorCode, options?: CustomErrorOptions) {
      let errorMessage = createErrorMessage(errorCode, errorMessages, options?.messageParameters);
      let errorOptions: ErrorOptions = {};

      if (typeof options?.cause !== 'undefined') {
        errorOptions.cause = options.cause;
      }

      super(errorMessage, errorOptions);

      this.code = errorCode;
      this.name = errorName;

      // if the message is empty, we are making this an unknown error
      if (!this.message) {
        this.code = UNKNOWN_ERROR;
        this.message = createErrorMessage(UNKNOWN_ERROR, INTERNAL_ERROR_MESSAGES);
      }
    }
  };
}
