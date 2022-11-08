import {type FormResult, createForm} from '@jakubmazanec/cli';

const TEMPLATE_ID_REGEXP = /^.+:.+$/;

export const CreateWorkspaceInput = createForm({
  rows: {
    templateId: {
      type: 'text',
      label: 'Enter template ID:',
      validate: (value: string) => {
        if (!TEMPLATE_ID_REGEXP.test(value)) {
          throw new Error(
            'Template ID must consist of a module ID and a template name separated by a colon.',
          );
        }
      },
    },
  },
});

export type CreateWorkspaceInputResult = FormResult<typeof CreateWorkspaceInput>;
