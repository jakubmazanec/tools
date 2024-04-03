import {useCallback, useState} from 'react';
import {z} from 'zod';

import {
  Button,
  Checkbox,
  CheckboxField,
  Description,
  Error,
  Field,
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
  Listbox,
  Radio,
  RadioField,
  RadioGroup,
  Text,
  Textarea,
  useForm,
} from '../source/components.js';

const REMINDER = ['15 minutes before', '30 minutes before', '60 minutes before'] as const;
const PRIORITY = ['High', 'Medium', 'Low'] as const;

let schema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  alert: z.boolean().optional(),
  reminder: z.enum(REMINDER).optional(),
  tasks: z.array(
    z.object({
      description: z.string(),
      priority: z.enum(PRIORITY),
    }),
  ),
});

export function Example() {
  let [isIdle, setIsIdle] = useState(true);
  let {form, fields} = useForm({
    schema,
    onSubmit(event, context) {
      event.preventDefault();
      setIsIdle(false);

      console.log(
        'onSubmit!',
        context.submission?.status === 'success' ? context.submission.value : null,
        form.value,
      );

      setTimeout(() => setIsIdle(true), 1000);
    },
  });

  let tasksFields = fields.tasks.getFieldList();

  let insertTask = useCallback(() => {
    form.insert({name: fields.tasks.name});
  }, [fields.tasks.name, form]);

  return (
    <Form form={form}>
      <div>{form.errors}</div>

      <Field field={fields.name}>
        <Label>Name</Label>
        <Input showClearButton />
        <Error />
      </Field>

      <Fieldset>
        <Legend className="sb-unstyled">Notification</Legend>
        <Text className="sb-unstyled">
          Settings related to how you&apos;ll be notified about each task.
        </Text>

        <CheckboxField field={fields.alert}>
          <Checkbox />
          <Label>Alert?</Label>
          <Description className="sb-unstyled">Sound alert when notifying</Description>
          <Error />
        </CheckboxField>
      </Fieldset>

      <Field field={fields.reminder}>
        <Label>Reminder</Label>
        <Listbox showFilter items={REMINDER.map((value) => ({label: value, value}))} />
        <Error />
      </Field>

      {tasksFields.map((taskField, index) => {
        let taskFields = taskField.getFieldset();

        return (
          <Fieldset key={taskField.key}>
            <Legend className="sb-unstyled">Task</Legend>

            <Field field={taskFields.description}>
              <Label>Description</Label>
              <Textarea />
              <Error />
            </Field>

            <RadioGroup field={taskFields.priority}>
              {PRIORITY.map((value) => (
                <RadioField key={value}>
                  <Radio value={value} />
                  <Label>{value}</Label>
                  <Description className="sb-unstyled">
                    Tasks with higher priority are handled first
                  </Description>
                </RadioField>
              ))}
              <Error />
            </RadioGroup>

            <Button
              className="self-start"
              onClick={() => {
                form.remove({name: fields.tasks.name, index});
              }}
            >
              Remove task
            </Button>
          </Fieldset>
        );
      })}

      <Button className="self-start" onClick={insertTask}>
        Add task
      </Button>

      <Button submit idle={isIdle} className="self-center">
        Send
      </Button>
    </Form>
  );
}
