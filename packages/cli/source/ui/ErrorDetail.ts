/**
 * Detailed error information.
 */
export type ErrorDetail = {
  label: string;
  description?: string;
  stack?: string;
  cause?: {
    description?: string;
    stack?: string;
  };
};
