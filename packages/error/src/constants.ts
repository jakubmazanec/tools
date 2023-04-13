export const ERROR_MESSAGE_TOKEN_PATTERN = /\{(\d+)\}/gu;

/**
 * Code for an unknown error. You should never use nor encounter this error code.
 */
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

export const INTERNAL_ERROR_MESSAGES = {
  [UNKNOWN_ERROR]: 'An unknown error has occurred.',
};
