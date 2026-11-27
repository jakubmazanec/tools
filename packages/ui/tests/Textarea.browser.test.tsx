import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {defaultTheme, Field, Textarea, ThemeProvider} from '../source/main.js';
import {DangerReference, disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(Textarea, () => {
  test('is invalid with the invalid prop', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Textarea invalid aria-label="Text" />
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
            <Field field={fields.textarea}>
              <Textarea aria-label="Text" invalid={invalid} />
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

  test.each([
    {disabled: false, hovered: false},
    {disabled: false, hovered: true},
    {disabled: true, hovered: false},
    {disabled: true, hovered: true},
  ])(
    'keeps a danger border (disabled: $disabled, hovered: $hovered)',
    async ({disabled, hovered}) => {
      disableTransitions();
      await render(
        <ThemeProvider theme={defaultTheme}>
          <DangerReference />
          <Textarea invalid aria-label="Text" disabled={disabled} />
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
