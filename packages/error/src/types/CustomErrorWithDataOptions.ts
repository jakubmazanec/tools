/**
 * Type representing options object used when instantianting class returned from {@linkcode createCustomErrorWithData}.
 */
export type CustomErrorWithDataOptions<ErrorData> = {
  /** Array of values that are used as parameters to generate the error message. */
  messageParameters?: unknown[];

  /** Used for setting `cause` property of an error instance that indicates the specific original cause of the error. */
  cause?: unknown;

  /** Custom data that will be attached to the error instance. */
  data?: ErrorData;
};
