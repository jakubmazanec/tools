import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {
  Checkbox,
  CheckboxField,
  defaultTheme,
  Field,
  Radio,
  RadioField,
  RadioGroup,
  ThemeProvider,
} from '../source/main.js';

describe(Field, () => {
  test('disables a control inside a disabled Field', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Field disabled>
          <Checkbox aria-label="Checkbox" />
        </Field>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('checkbox', {name: 'Checkbox'}))
      .toHaveAttribute('data-disabled');
  });
});

describe(CheckboxField, () => {
  test('disables a control inside a disabled CheckboxField', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <CheckboxField disabled>
          <Checkbox aria-label="Checkbox" />
        </CheckboxField>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('checkbox', {name: 'Checkbox'}))
      .toHaveAttribute('data-disabled');
  });

  test('disables a control inside a disabled named CheckboxField', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <CheckboxField disabled name="agree">
          <Checkbox aria-label="Checkbox" />
        </CheckboxField>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('checkbox', {name: 'Checkbox'}))
      .toHaveAttribute('data-disabled');
  });
});

describe(RadioField, () => {
  test('disables a control inside a disabled RadioField', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <RadioGroup>
          <RadioField disabled>
            <Radio aria-label="Radio" value="a" />
          </RadioField>
        </RadioGroup>
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('radio', {name: 'Radio'})).toHaveAttribute('data-disabled');
  });
});
