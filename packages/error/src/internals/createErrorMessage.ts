import {ERROR_MESSAGE_TOKEN_PATTERN} from '../constants.js';
import {type ErrorMessages} from '../types.js';

/**
 * A function that generates an error message based on provided error code and message parameters. It is used only internally.
 *
 * @param errorCode Error code.
 * @param errorMessages Object containing all possible error messages.
 * @param messageParameters Array of values that are used as message parameters.
 * @return Error message.
 */
export function createErrorMessage<T extends string>(
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
