import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {defaultTheme, Field, Input, ThemeProvider} from '../source/main.js';
import {DangerReference, disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(Input, () => {
  test('hides the clear button when disabled', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Input disabled showClearButton aria-label="Input" />
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).toHaveStyle({display: 'none'});
  });

  test('hides the clear button inside a disabled Field', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Field disabled>
          <Input showClearButton aria-label="Input" />
        </Field>
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).toHaveStyle({display: 'none'});
  });

  test('shows the clear button otherwise', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Input showClearButton aria-label="Input" />
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).not.toHaveStyle({display: 'none'});
  });

  test('is invalid with the invalid prop', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Input invalid aria-label="Text" />
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('textbox', {name: 'Text'})).toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('textbox', {name: 'Text'}))
      .toHaveAttribute('aria-invalid', 'true');
  });

  test.each([undefined, false])(
    'is invalid when its field has errors (invalid=%s)',
    async (invalid) => {
      await render(
        <ConformForm>
          {(fields) => (
            <Field field={fields.input}>
              <Input aria-label="Text" invalid={invalid} />
            </Field>
          )}
        </ConformForm>,
      );
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect
        .element(page.getByRole('textbox', {name: 'Text'}))
        .toHaveAttribute('data-invalid');
      await expect
        .element(page.getByRole('textbox', {name: 'Text'}))
        .toHaveAttribute('aria-invalid', 'true');
    },
  );

  test('is valid again once its value is valid', async () => {
    await render(
      <ConformForm>
        {(fields) => (
          <Field field={fields.input}>
            <Input aria-label="Text" />
          </Field>
        )}
      </ConformForm>,
    );
    await page.getByRole('button', {name: 'Submit'}).click();

    await expect.element(page.getByRole('textbox', {name: 'Text'})).toHaveAttribute('data-invalid');

    await page.getByRole('textbox', {name: 'Text'}).fill('Jakub');

    await expect
      .element(page.getByRole('textbox', {name: 'Text'}))
      .not.toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('textbox', {name: 'Text'}))
      .not.toHaveAttribute('aria-invalid');
  });

  test.each([
    {disabled: false, hovered: false},
    {disabled: false, hovered: true},
    {disabled: true, hovered: false},
    {disabled: true, hovered: true},
    {disabled: false, hovered: false, className: 'border-blue-500'},
  ])(
    'keeps a danger border (disabled: $disabled, hovered: $hovered, className: $className)',
    async ({disabled, hovered, className}) => {
      disableTransitions();
      await render(
        <ThemeProvider theme={defaultTheme}>
          <DangerReference />
          <Input invalid aria-label="Text" className={className} disabled={disabled} />
        </ThemeProvider>,
      );
      await (
        hovered ?
          page.getByRole('textbox', {name: 'Text'})
        : page.getByText('Reference')).hover();

      expect(
        getBorderColor(page.getByRole('textbox', {name: 'Text'}).element().parentElement),
      ).toBe(getBorderColor(page.getByText('Reference').element()));
    },
  );
});
