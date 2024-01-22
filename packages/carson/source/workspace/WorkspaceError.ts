import {createCustomErrorWithData} from '@jakubmazanec/error';
import {type ZodIssue} from 'zod';

/**
 * A subclass of `Error` that indicates a workspace failure.
 */
export const WorkspaceError = createCustomErrorWithData(
  'WorkspaceError',
  {
    INVALID_PACKAGE_JSON: 'Invalid package.json file "{0}".',
    INVALID_WORKSPACE_CONFIG: 'Invalid workspace config file "{0}".',
    NO_SUCH_WORKSPACE_PATH: 'Workspace path "{0}" doesn\'t exist.',
    NO_WORKSPACE_FOUND: 'No workspace was found at path "{0}".',
    PATH_MISMATCH:
      'In a single-project workspace, the workspace path must be the same as the project path.',
    WORKSPACE_PATH_NOT_EMPTY: 'Workspace path "{0}" must be an empty directory.',
    MISSING_CARSON_TEMPLATE_ID: 'Workspace config "{0}" is missing the Carson template ID.',

    DUPLICATE_PROJECT_NAME: 'Workspace already contains project with name "{0}"',
    DUPLICATE_PROJECT_PATH: 'Workspace already contains project with path "{0}"',
    TOO_MANY_PROJECTS: "Workspace can't contain more projects.",
  },
  class WorkspaceErrorData {
    path?: string;
    zodIssues?: ZodIssue[];
  },
);
