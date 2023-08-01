/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {type z, type AnyZodObject} from 'zod';

import {INTERNAL_ERROR_MESSAGES, UNKNOWN_ERROR} from './constants.js';
import {createErrorMessage} from './internals.js';
import {
  type CustomErrorWithData,
  type CustomErrorWithDataOptions,
  type ErrorMessages,
} from './types.js';

/**
 * Function for creating custom error classes. Such custom error class properly subclasses built-in `Error`, simplifies
 * generating error messages via predefined error codes and allows attaching custom data to the error instance.
 *
 * @param errorName Error name.
 * @param errorMessages Object containing all possible error messages.
 * @param errorData Runtime representation of the `ErrorData` type parameter; can be either a class expression, or a Zod schema.
 * @return Class that implements {@link CustomErrorWithData}.
 */
export function createCustomErrorWithData<ErrorCode extends string, ErrorData extends AnyZodObject>(
  errorName: string,
  errorMessages: ErrorMessages<ErrorCode>,
  errorData: ErrorData,
): new (
  code: ErrorCode,
  options?: CustomErrorWithDataOptions<z.infer<ErrorData>>,
) => CustomErrorWithData<ErrorCode | typeof UNKNOWN_ERROR, z.infer<ErrorData>>;
export function createCustomErrorWithData<
  ErrorCode extends string,
  ErrorData extends abstract new (...args: any) => any,
>(
  errorName: string,
  errorMessages: ErrorMessages<ErrorCode>,
  errorData: ErrorData,
): new (
  code: ErrorCode,
  options?: CustomErrorWithDataOptions<InstanceType<ErrorData>>,
) => CustomErrorWithData<ErrorCode | typeof UNKNOWN_ERROR, InstanceType<ErrorData>>;
export function createCustomErrorWithData<ErrorCode extends string, ErrorData>(
  errorName: string,
  errorMessages: ErrorMessages<ErrorCode>,
  errorData: ErrorData,
): new (
  code: ErrorCode,
  options?: CustomErrorWithDataOptions<ErrorData>,
) => CustomErrorWithData<ErrorCode | typeof UNKNOWN_ERROR, ErrorData> {
  return class InternalCustomError
    extends Error
    implements CustomErrorWithData<ErrorCode, ErrorData>
  {
    code: ErrorCode | typeof UNKNOWN_ERROR;
    data?: ErrorData;

    constructor(errorCode: ErrorCode, options?: CustomErrorWithDataOptions<ErrorData>) {
      let errorMessage = createErrorMessage(errorCode, errorMessages, options?.messageParameters);
      let errorOptions: ErrorOptions = {};

      if (typeof options?.cause !== 'undefined') {
        errorOptions.cause = options.cause;
      }

      super(errorMessage, errorOptions);

      this.code = errorCode;
      this.name = errorName;

      if (typeof options?.data !== 'undefined') {
        this.data = options.data;
      }

      // if the message is empty, we are making this an unknown error
      if (!this.message) {
        this.code = UNKNOWN_ERROR;
        this.message = createErrorMessage(UNKNOWN_ERROR, INTERNAL_ERROR_MESSAGES);
      }
    }
  };
}
