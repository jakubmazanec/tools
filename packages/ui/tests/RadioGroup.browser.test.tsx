import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {defaultTheme, Radio, RadioGroup, ThemeProvider} from '../source/main.js';
import {DangerReference, disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(RadioGroup, () => {
  test('disables every Radio and ignores clicks', async () => {
    let onChange = vitest.fn<(value: unknown) => void>();

    await render(
      <ThemeProvider theme={defaultTheme}>
        <RadioGroup disabled onChange={onChange}>
          <Radio aria-label="First" value="first" />
          <Radio aria-label="Second" value="second" />
        </RadioGroup>
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('radio', {name: 'First'})).toHaveAttribute('data-disabled');
    await expect
      .element(page.getByRole('radio', {name: 'Second'}))
      .toHaveAttribute('data-disabled');

    await page.getByRole('radio', {name: 'Second'}).click({force: true});

    expect(onChange).not.toHaveBeenCalled();
  });

  test.each<[string, {name?: string}]>([
    ['without a name', {}],
    ['with a name', {name: 'priority'}],
  ])('is invalid with the invalid prop %s', async (_title, props) => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <RadioGroup invalid aria-label="Priority" {...props}>
          <Radio aria-label="First" value="first" />
        </RadioGroup>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('radiogroup', {name: 'Priority'}))
      .toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('radiogroup', {name: 'Priority'}))
      .toHaveAttribute('aria-invalid', 'true');
  });

  test.each([undefined, false])(
    'is invalid when its field has errors (invalid=%s)',
    async (invalid) => {
      await render(
        <ConformForm>
          {(fields) => (
            <RadioGroup aria-label="Priority" field={fields.radioGroup} invalid={invalid}>
              <Radio aria-label="First" value="first" />
            </RadioGroup>
          )}
        </ConformForm>,
      );
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect
        .element(page.getByRole('radiogroup', {name: 'Priority'}))
        .toHaveAttribute('data-invalid');
      await expect
        .element(page.getByRole('radiogroup', {name: 'Priority'}))
        .toHaveAttribute('aria-invalid', 'true');
    },
  );

  test.each<[string, {name?: string}]>([
    ['without a name', {}],
    ['with a name', {name: 'priority'}],
  ])('is valid without the prop or field errors %s', async (_title, props) => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <RadioGroup aria-label="Priority" {...props}>
          <Radio aria-label="First" value="first" />
        </RadioGroup>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('radiogroup', {name: 'Priority'}))
      .not.toHaveAttribute('data-invalid');
    await expect
      .element(page.getByRole('radiogroup', {name: 'Priority'}))
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
          <RadioGroup
            invalid
            aria-label="Priority"
            defaultValue={checked ? 'first' : undefined}
            disabled={disabled}
          >
            <Radio aria-label="First" value="first" />
          </RadioGroup>
        </ThemeProvider>,
      );
      await (
        hovered ?
          page.getByRole('radio', {name: 'First'})
        : page.getByText('Reference')).hover();

      expect(
        getBorderColor(
          page.getByRole('radio', {name: 'First'}).element().querySelector(':scope > span > *'),
        ),
      ).toBe(getBorderColor(page.getByText('Reference').element()));
    },
  );
});
