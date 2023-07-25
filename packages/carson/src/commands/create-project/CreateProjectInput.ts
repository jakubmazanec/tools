import {type FormResult, createForm} from '@jakubmazanec/cli';

const TEMPLATE_ID_REGEXP = /^.+:.+$/;
const PROJECT_NAME_ID_REGEXP = /^[\d./@a-z-]+$/;

export const CreateProjectInput = createForm({
  rows: {
    templateId: {
      type: 'text',
      label: 'What template do you want to use?',
      validate: (value: string) => {
        if (!TEMPLATE_ID_REGEXP.test(value)) {
          throw new Error(
            'Template ID must consist of a module ID and a template name separated by a colon.',
          );
        }
      },
    },
    projectName: {
      type: 'text',
      label: 'What is the project name?',
      validate: (value: string) => {
        if (!PROJECT_NAME_ID_REGEXP.test(value)) {
          throw new Error(
            'Project name can contain only lowercase letters, numbers, hyphen, @, dot or /.',
          );
        }
      },
    },
    projectPath: {
      type: 'select',
      label: 'What is the project location?',
    },
  },
});

export type CreateProjectInputResult = FormResult<typeof CreateProjectInput>;
