import {createCustomErrorWithData} from '@jakubmazanec/error';
import {type ZodIssue} from 'zod';

/**
 * A subclass of `Error` that indicates a project failure.
 */
export const ProjectError = createCustomErrorWithData(
  'ProjectError',
  {
    INVALID_PACKAGE_JSON: 'Invalid package.json file "{0}".',
    INVALID_PROJECT_CONFIG: 'Invalid project config file "{0}".',
    NO_SUCH_PROJECT_PATH: 'Project path "{0}" doesn\'t exist.',
    PROJECT_PATH_NOT_EMPTY: 'Project path "{0}" must be an empty directory.',
    MISSING_CARSON_TEMPLATE_ID: 'Project config "{0}" is missing the Carson template ID.',
  },
  class ProjectErrorData {
    path?: string;
    zodIssues?: ZodIssue[];
  },
);
