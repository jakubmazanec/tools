import {type ReactElement} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {Checkbox, CheckboxField, defaultTheme, ThemeProvider} from '../source/main.js';
import {DangerReference, disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(Checkbox, () => {
  test('ignores clicks when disabled', async () => {
    let onChange = vitest.fn<(checked: boolean) => void>();

    await render(
      <ThemeProvider theme={defaultTheme}>
        <Checkbox disabled aria-label="Agree" onChange={onChange} />
      </ThemeProvider>,
    );
    await page.getByRole('checkbox', {name: 'Agree'}).click({force: true});

    expect(onChange).not.toHaveBeenCalled();
  });

  test('ignores clicks when disabled inside a named field', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <CheckboxField name="agree">
          <Checkbox disabled aria-label="Agree" />
        </CheckboxField>
      </ThemeProvider>,
    );
    await page.getByRole('checkbox', {name: 'Agree'}).click({force: true});

    await expect.element(page.getByRole('checkbox', {name: 'Agree'})).not.toBeChecked();
  });

  test.each<[string, () => ReactElement]>([
    ['alone', () => <Checkbox invalid aria-label="Agree" />],
    [
      'in a named CheckboxField',
      () => (
        <CheckboxField name="agree">
          <Checkbox invalid aria-label="Agree" />
        </CheckboxField>
      ),
    ],
  ])('is invalid with the invalid prop %s', async (_title, Component) => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Component />
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('checkbox', {name: 'Agree'}))
      .toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('checkbox', {name: 'Agree'}))
      .toHaveAttribute('aria-invalid', 'true');
  });

  test.each([undefined, false])(
    'is invalid when its field has errors (invalid=%s)',
    async (invalid) => {
      await render(
        <ConformForm>
          {(fields) => (
            <CheckboxField field={fields.checkbox}>
              <Checkbox aria-label="Agree" invalid={invalid} />
            </CheckboxField>
          )}
        </ConformForm>,
      );
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect
        .element(page.getByRole('checkbox', {name: 'Agree'}))
        .toHaveAttribute('data-invalid');
      await expect
        .element(page.getByRole('checkbox', {name: 'Agree'}))
        .toHaveAttribute('aria-invalid', 'true');
    },
  );

  test.each<[string, () => ReactElement]>([
    ['alone', () => <Checkbox aria-label="Agree" />],
    [
      'in a named CheckboxField',
      () => (
        <CheckboxField name="agree">
          <Checkbox aria-label="Agree" />
        </CheckboxField>
      ),
    ],
  ])('is valid without the prop or field errors %s', async (_title, Component) => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Component />
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('checkbox', {name: 'Agree'}))
      .not.toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('checkbox', {name: 'Agree'}))
      .not.toHaveAttribute('aria-invalid');
  });

  test.each([
    {checked: false, disabled: false, hovered: false},
    {checked: false, disabled: false, hovered: true},
    {checked: false, disabled: true, hovered: false},
    {checked: false, disabled: true, hovered: true},
    {checked: true, disabled: false, hovered: false},
    {checked: true, disabled: false, hovered: true},
    {checked: true, disabled: true, hovered: false},
    {checked: true, disabled: true, hovered: true},
  ])(
    'keeps a danger border (checked: $checked, disabled: $disabled, hovered: $hovered)',
    async ({checked, disabled, hovered}) => {
      disableTransitions();
      await render(
        <ThemeProvider theme={defaultTheme}>
          <DangerReference />
          <Checkbox invalid aria-label="Agree" checked={checked} disabled={disabled} />
        </ThemeProvider>,
      );
      await (
        hovered ?
          page.getByRole('checkbox', {name: 'Agree'})
        : page.getByText('Reference')).hover();

      expect(
        getBorderColor(
          page.getByRole('checkbox', {name: 'Agree'}).element().querySelector(':scope > span > *'),
        ),
      ).toBe(getBorderColor(page.getByText('Reference').element()));
    },
  );
});
