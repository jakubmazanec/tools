import {createCustomErrorWithData} from '@jakubmazanec/error';

/**
 * A subclass of `Error` that indicates a Carson template failure.
 */
export const CarsonTemplateError = createCustomErrorWithData(
  'CarsonTemplateError',
  {
    INVALID_CARSON_TEMPLATE_ID:
      'Invalid Carson template ID "{0}". Carson template ID must consist of a module ID and a template name separated by a colon.',
    CARSON_TEMPLATE_NOT_FOUND: 'Carson template "{0}" was not found in module "{1}".',
    STRATEGY_UNSUPPORTED_EXTENSION:
      'Strategy "{0}" in the template file "{1}" doesn\'t support extension "{2}".',
    STRATEGY_MISSING_FILE: 'Strategy "{0}" in the template file "{1}" is missing file "{2}".',
    INVALID_SNAPSHOT: 'Invalid Carson template render snapshot.',
  },
  class CarsonTemplateErrorData {
    path?: string;
  },
);
