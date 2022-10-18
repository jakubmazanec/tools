/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {ERROR_MESSAGE_TOKEN_PATTERN, INTERNAL_ERROR_MESSAGES, UNKNOWN_ERROR} from './constants.js';
import type {CustomError, ErrorMessages} from './types.js';

function createErrorMessage<T extends string>(
  errorCode: T,
  errorMessages: ErrorMessages<T>,
  messageParameters: unknown[] = [],
): string {
  let errorMessage = errorMessages[errorCode];

  if (!errorMessage) {
    return '';
  }

  return `${errorCode}: ${errorMessage.replace(
    ERROR_MESSAGE_TOKEN_PATTERN,
    (match: string, index: number) => String(messageParameters[index]),
  )}`;
}

export interface CustomErrorOptions<T> {
  messageParameters?: unknown[];
  data: T;
}

/**
 * Function for creating custom error classes. Such custom error class properly subclasses built-in `Error`, simplifies
 * generating error messages via predefined error codes and allows attaching custom data to the error instance.
 */
export function createCustomError<
  ErrorCode extends string,
  // eslint-disable-next-line @typescript-eslint/no-redeclare -- because `ErrorData` is used only as a type, we don't mind
  ErrorData extends abstract new (...args: any) => any,
>(
  errorName: string,
  errorMessages: ErrorMessages<ErrorCode>,
  ErrorData?: ErrorData,
): new (code: ErrorCode, options?: CustomErrorOptions<InstanceType<ErrorData>>) => CustomError<
  ErrorCode | typeof UNKNOWN_ERROR,
  InstanceType<ErrorData>
> {
  return class InternalCustomError
    extends Error
    implements CustomError<ErrorCode, InstanceType<ErrorData>>
  {
    code: ErrorCode | typeof UNKNOWN_ERROR;
    data?: InstanceType<ErrorData>;

    constructor(errorCode: ErrorCode, options?: CustomErrorOptions<InstanceType<ErrorData>>) {
      super(createErrorMessage(errorCode, errorMessages, options?.messageParameters));

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
