import {ParsingError, ValidationError} from '@jakubmazanec/args';
import {zodIssuesToStrings} from '@jakubmazanec/zod-utils';
import {ZodError} from 'zod';

import {type ErrorDetail} from './ErrorDetail.js';

/**
 * Creates detailed information about an error.
 */
export function getErrorDetail(error: unknown): ErrorDetail {
  // TODO: add all codes
  if (error instanceof ParsingError) {
    switch (error.code) {
      default: {
        return {
          label: 'Parsing error',
          description: error.message,
        };
      }
    }
  }

  // TODO: add all codes
  if (error instanceof ValidationError) {
    switch (error.code) {
      default: {
        return {
          label: 'Validation error',
          description: error.message,
        };
      }
    }
  }

  // TODO: add all built-in errors
  if (error instanceof ReferenceError) {
    let errorDetail: ErrorDetail = {
      label: 'Error',
      description: error.message,
    };

    if (error.stack) {
      errorDetail.stack = error.stack;
    }

    return errorDetail;
  }

  if (error instanceof ZodError) {
    let errorDetail: ErrorDetail = {
      label: 'Error',
      description: zodIssuesToStrings(error.issues).join('\n'),
    };

    return errorDetail;
  }

  if (error instanceof Error) {
    let errorDetail: ErrorDetail = {
      label: 'Error',
      description: error.message,
    };

    if (error.stack) {
      errorDetail.stack = error.stack;
    }

    if (error.cause instanceof Error) {
      errorDetail.cause = {
        description: error.cause.message,
      };

      if (error.cause.stack) {
        errorDetail.cause.stack = error.cause.stack;
      }
    }

    return errorDetail;
  }

  return {
    label: 'Error',
  };
}
