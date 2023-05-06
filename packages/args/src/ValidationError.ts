import {createCustomError} from '@jakubmazanec/error';

/**
 * A subclass of `Error` that indicates a validation issue.
 */
export const ValidationError = createCustomError('ValidationError', {
  INVALID_COMMAND:
    'Command "{0}" has invalid format. Only words consisting of letters, numbers or dashes separated by single space are allowed.',
  MISSING_PARAMETER: 'Parameter "{0}" is required but its value is undefined.',
  INVALID_PARAMETER_DEFAULT_AND_CHOICES:
    'Parameter "{0}" has invalid default value "{1}". Default value must be one of the `choices` elements.',
  INVALID_PARAMETER_ORDER:
    'Optional parameter "{0}" found before required parameter "{1}". Required parameter must be first.',
  MISSING_OPTION: 'Option "{0}" is required but its value is undefined.',
  INVALID_OPTION_DEFAULT_AND_CHOICES:
    'Option "{0}" has invalid default value "{1}". Default value must be one of the `choices` elements.',
  INVALID_OPTION_NAME:
    'Option "{0}" has invalid name. Only names consisting of letters, numbers or dashes are allowed.',
  REPEATED_OPTION_NAME:
    'Option "{0}" has invalid short name "{1}". Short option names must be unique.',
  INVALID_OPTION_ARITY: 'Option "{0}" has invalid number of values. Found "{1}", require "{2}".',
});
