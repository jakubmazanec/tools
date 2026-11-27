import {type ReactNode} from 'react';
import {z} from 'zod';

import {
  Button,
  defaultTheme,
  Form,
  ThemeProvider,
  useForm,
  type UseFormReturn,
} from '../source/main.js';

const schema = z.object({
  input: z.string({error: 'Required'}),
  textarea: z.string({error: 'Required'}),
  listbox: z.string({error: 'Required'}),
  combobox: z.string({error: 'Required'}),
  checkbox: z.boolean({error: 'Required'}),
  radioGroup: z.enum(['first', 'second'], {error: 'Required'}),
});

export type ConformFields = UseFormReturn<typeof schema>['fields'];

export function ConformForm({children}: {children: (fields: ConformFields) => ReactNode}) {
  let {form, fields} = useForm({
    schema,
    onSubmit(event) {
      event.preventDefault();
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Form form={form}>
        {children(fields)}
        <Button submit>Submit</Button>
      </Form>
    </ThemeProvider>
  );
}
