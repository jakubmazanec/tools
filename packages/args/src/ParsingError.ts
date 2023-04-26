import {createCustomError} from '@jakubmazanec/error';

/**
 * A subclass of `Error` that indicates a parsing failure.
 */
export const ParsingError = createCustomError('ParsingError', {
  INVALID_PARAMETER: 'Invalid value "{0}" found. Allowed values for parameter "{1}" are: {2}.',
  UNKNOWN_PARAMETER: 'Unknown parameter "{0}" found. Unknown parameters are not allowed.',
  INVALID_OPTION: 'Invalid value "{0}" found. Allowed values for option "{1}" are: {2}.',
  UNKNOWN_OPTION: 'Unknown option "{0}" found. Unknown options are not allowed.',
});
