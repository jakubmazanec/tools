import {useState} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {Button, Combobox, defaultTheme, Field, ThemeProvider} from '../source/main.js';
import {disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(Combobox, () => {
  test('stays controlled when value is null', async () => {
    let consoleError = vitest.spyOn(console, 'error');

    function App() {
      let [value, setValue] = useState<string | null>(null);

      return (
        <ThemeProvider theme={defaultTheme}>
          <Combobox
            items={[{value: 'done', label: 'Done'}]}
            value={value}
            onChange={(selectedValue) => {
              setValue(selectedValue ?? null);
            }}
          />
          <Button
            onClick={() => {
              setValue(null);
            }}
          >
            Reset
          </Button>
        </ThemeProvider>
      );
    }

    await render(<App />);
    await page.getByRole('combobox').click();
    await page.getByRole('option', {name: 'Done'}).click();
    await page.getByRole('button', {name: 'Reset'}).click();

    expect(consoleError).not.toHaveBeenCalledWith(expect.stringContaining('uncontrolled'));

    consoleError.mockRestore();
  });

  test('marks its input invalid', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Combobox invalid items={[{value: 'done', label: 'Done'}]} />
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('combobox')).toHaveAttribute('data-invalid');
    await expect.element(page.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  test.each([undefined, false])(
    'is invalid when its field has errors (invalid=%s)',
    async (invalid) => {
      await render(
        <ConformForm>
          {(fields) => (
            <Field field={fields.combobox}>
              <Combobox invalid={invalid} items={[{value: 'done', label: 'Done'}]} />
            </Field>
          )}
        </ConformForm>,
      );
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect.element(page.getByRole('combobox')).toHaveAttribute('data-invalid');
      await expect.element(page.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    },
  );

  test('is valid without the prop or field errors', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Combobox items={[{value: 'done', label: 'Done'}]} />
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('combobox')).not.toHaveAttribute('data-invalid');
    await expect.element(page.getByRole('combobox')).not.toHaveAttribute('aria-invalid');
  });

  test('keeps a danger border when invalid, also on hover and when disabled', async () => {
    disableTransitions();
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Combobox items={[{value: 'done', label: 'Done'}]} />
        <Combobox invalid items={[{value: 'done', label: 'Done'}]} />
        <Combobox disabled invalid items={[{value: 'done', label: 'Done'}]} />
      </ThemeProvider>,
    );

    let valid = page.getByRole('combobox').nth(0);
    let invalid = page.getByRole('combobox').nth(1);
    let both = page.getByRole('combobox').nth(2);

    // Move the mouse off the measured controls; an earlier test may have left it over one.
    await valid.hover();

    let invalidColor = getBorderColor(invalid.element());

    expect(getBorderColor(both.element())).toBe(invalidColor);

    await invalid.hover();

    expect(getBorderColor(valid.element())).not.toBe(invalidColor);
    expect(getBorderColor(invalid.element())).toBe(invalidColor);

    await both.hover();

    expect(getBorderColor(both.element())).toBe(invalidColor);
  });
});
