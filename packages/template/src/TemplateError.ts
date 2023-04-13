import {createCustomErrorWithData} from '@jakubmazanec/error';
import {type ZodIssue} from 'zod';

import {type Template} from './Template.js';

/**
 * A subclass of `Error` that indicates a template  failure.
 */
export const TemplateError = createCustomErrorWithData(
  'TemplateError',
  {
    INVALID_ATTRIBUTES: 'Invalid template attributes.',
    FAILED_FORMAT: 'Template render formatting has failed.',
    FAILED_RENDER: 'Rendering has failed.',
  },
  class TemplateErrorData {
    template?: Template;
    path?: string;
    zodIssues?: ZodIssue[];
  },
);
