import {type ReactNode} from 'react';
import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
import {type Locator, page} from 'vitest/browser';

import {
  Checkbox,
  CheckboxField,
  Combobox,
  defaultTheme,
  Description,
  Error,
  Field,
  Input,
  Listbox,
  Radio,
  RadioGroup,
  Textarea,
  ThemeProvider,
} from '../source/main.js';
import {type ConformFields, ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

function expectLinked(control: Locator, error: Element | null) {
  expect(error?.id).not.toBe('');
  expect(control.element().getAttribute('aria-describedby')?.split(' ')).toContain(error?.id);
}

describe(Error, () => {
  test.each<[string, (fields: ConformFields) => ReactNode, () => Locator]>([
    [
      'Input',
      (fields) => (
        <Field field={fields.input}>
          <Input aria-label="Control" />
          <Error />
        </Field>
      ),
      () => page.getByRole('textbox', {name: 'Control'}),
    ],
    [
      'Textarea',
      (fields) => (
        <Field field={fields.textarea}>
          <Textarea aria-label="Control" />
          <Error />
        </Field>
      ),
      () => page.getByRole('textbox', {name: 'Control'}),
    ],
    [
      'Listbox',
      (fields) => (
        <Field field={fields.listbox}>
          <Listbox items={[{value: 'done', label: 'Done'}]} placeholder="Choice" />
          <Error />
        </Field>
      ),
      () => page.getByRole('button', {name: 'Choice'}),
    ],
    [
      'Combobox',
      (fields) => (
        <Field field={fields.combobox}>
          <Combobox items={[{value: 'done', label: 'Done'}]} />
          <Error />
        </Field>
      ),
      () => page.getByRole('combobox'),
    ],
    [
      'Checkbox',
      (fields) => (
        <CheckboxField field={fields.checkbox}>
          <Checkbox aria-label="Control" />
          <Error />
        </CheckboxField>
      ),
      () => page.getByRole('checkbox', {name: 'Control'}),
    ],
    [
      'RadioGroup',
      (fields) => (
        <RadioGroup aria-label="Control" field={fields.radioGroup}>
          <Radio aria-label="First" value="first" />
          <Error />
        </RadioGroup>
      ),
      () => page.getByRole('radiogroup', {name: 'Control'}),
    ],
  ])('links its message to %s', async (_title, renderFields, control) => {
    let {container} = await render(<ConformForm>{renderFields}</ConformForm>);

    await page.getByRole('button', {name: 'Submit'}).click();

    await expect.element(page.getByText('Required')).toBeInTheDocument();

    expectLinked(control(), container.querySelector('[data-component="error"]'));
  });

  test('links its message and the Description', async () => {
    let {container} = await render(
      <ConformForm>
        {(fields) => (
          <Field field={fields.input}>
            <Input aria-label="Control" />
            <Description>Hint</Description>
            <Error />
          </Field>
        )}
      </ConformForm>,
    );

    await page.getByRole('button', {name: 'Submit'}).click();

    await expect.element(page.getByText('Required')).toBeInTheDocument();

    expect(
      page
        .getByRole('textbox', {name: 'Control'})
        .element()
        .getAttribute('aria-describedby')
        ?.split(' '),
    ).toContain(container.querySelector('[data-component="description"]')?.id);

    expectLinked(
      page.getByRole('textbox', {name: 'Control'}),
      container.querySelector('[data-component="error"]'),
    );
  });

  test('links its children without Conform', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Field name="x">
          <Input invalid aria-label="Control" />
          <Error>Fix it</Error>
        </Field>
      </ThemeProvider>,
    );

    await expect.element(page.getByText('Fix it')).toBeInTheDocument();

    expectLinked(
      page.getByRole('textbox', {name: 'Control'}),
      container.querySelector('[data-component="error"]'),
    );
  });

  test('links the radiogroup to an Error inside a named RadioGroup', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <RadioGroup invalid aria-label="Control" name="x">
          <Radio aria-label="First" value="first" />
          <Error>Fix it</Error>
        </RadioGroup>
      </ThemeProvider>,
    );

    await expect.element(page.getByText('Fix it')).toBeInTheDocument();

    expectLinked(
      page.getByRole('radiogroup', {name: 'Control'}),
      container.querySelector('[data-component="error"]'),
    );
  });

  test('keeps a custom element and links it', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Field name="x">
          <Input invalid aria-label="Control" />
          <Error as="span">Fix it</Error>
        </Field>
      </ThemeProvider>,
    );

    await expect.element(page.getByText('Fix it')).toBeInTheDocument();

    expect(container.querySelector('[data-component="error"]')?.tagName).toBe('SPAN');

    expectLinked(
      page.getByRole('textbox', {name: 'Control'}),
      container.querySelector('[data-component="error"]'),
    );
  });

  test('links each control only to the Error in its own Field', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Field name="a">
          <Input invalid aria-label="A" />
          <Error>Fix A</Error>
        </Field>
        <Field name="b">
          <Input invalid aria-label="B" />
          <Error>Fix B</Error>
        </Field>
      </ThemeProvider>,
    );

    await expect.element(page.getByText('Fix A')).toBeInTheDocument();

    let [errorA, errorB] = container.querySelectorAll('[data-component="error"]');

    expectLinked(page.getByRole('textbox', {name: 'A'}), errorA ?? null);
    expectLinked(page.getByRole('textbox', {name: 'B'}), errorB ?? null);

    expect(
      page.getByRole('textbox', {name: 'A'}).element().getAttribute('aria-describedby'),
    ).not.toContain(errorB?.id);
    expect(
      page.getByRole('textbox', {name: 'B'}).element().getAttribute('aria-describedby'),
    ).not.toContain(errorA?.id);
  });

  test('renders its children without a Field', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Error>Fix it</Error>
      </ThemeProvider>,
    );

    await expect.element(page.getByText('Fix it')).toBeInTheDocument();
  });
});
