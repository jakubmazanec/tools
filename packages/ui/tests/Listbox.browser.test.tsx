import {useState} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {Button, defaultTheme, Field, Listbox, ThemeProvider} from '../source/main.js';
import {disableTransitions, getBorderColor} from './borderColor.js';
import {ConformForm} from './ConformForm.js';

import '../.storybook/tailwind.css';

describe(Listbox, () => {
  test('stays controlled when value is null', async () => {
    let consoleError = vitest.spyOn(console, 'error');

    function App() {
      let [value, setValue] = useState<string | null>(null);

      return (
        <ThemeProvider theme={defaultTheme}>
          <Listbox
            items={[{value: 'done', label: 'Done'}]}
            placeholder="Status"
            value={value}
            onChange={setValue}
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
    await page.getByRole('button', {name: 'Status'}).click();
    await page.getByRole('option', {name: 'Done'}).click();
    await page.getByRole('button', {name: 'Reset'}).click();

    expect(consoleError).not.toHaveBeenCalledWith(expect.stringContaining('uncontrolled'));

    consoleError.mockRestore();
  });

  test('marks its button invalid', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Listbox invalid items={[{value: 'done', label: 'Done'}]} placeholder="Status" />
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('button', {name: 'Status'}))
      .toHaveAttribute('data-invalid');
  });

  test.each([undefined, false])(
    'is invalid when its field has errors (invalid=%s)',
    async (invalid) => {
      await render(
        <ConformForm>
          {(fields) => (
            <Field field={fields.listbox}>
              <Listbox
                invalid={invalid}
                items={[{value: 'done', label: 'Done'}]}
                placeholder="Choice"
              />
            </Field>
          )}
        </ConformForm>,
      );
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect
        .element(page.getByRole('button', {name: 'Choice'}))
        .toHaveAttribute('data-invalid');
    },
  );

  test('keeps a danger border when invalid, also on hover and when disabled', async () => {
    disableTransitions();
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Listbox items={[{value: 'done', label: 'Done'}]} placeholder="Valid" />
        <Listbox invalid items={[{value: 'done', label: 'Done'}]} placeholder="Invalid" />
        <Listbox disabled invalid items={[{value: 'done', label: 'Done'}]} placeholder="Both" />
      </ThemeProvider>,
    );

    let getButtonBorderColor = (name: string) =>
      getBorderColor(page.getByRole('button', {name}).element());

    // Move the mouse off the measured controls; an earlier test may have left it over one.
    await page.getByRole('button', {name: 'Valid'}).hover();

    let invalidColor = getButtonBorderColor('Invalid');

    expect(getButtonBorderColor('Both')).toBe(invalidColor);

    await page.getByRole('button', {name: 'Invalid'}).hover();

    expect(getButtonBorderColor('Valid')).not.toBe(invalidColor);
    expect(getButtonBorderColor('Invalid')).toBe(invalidColor);

    await page.getByRole('button', {name: 'Both'}).hover();

    expect(getButtonBorderColor('Both')).toBe(invalidColor);
  });

  test('keeps its filter input valid when its field has errors', async () => {
    await render(
      <ConformForm>
        {(fields) => (
          <Field field={fields.listbox}>
            <Listbox showFilter items={[{value: 'done', label: 'Done'}]} placeholder="Choice" />
          </Field>
        )}
      </ConformForm>,
    );
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.getByRole('button', {name: 'Choice'}).click();

    let filter = page.getByRole('listbox').getByRole('textbox');

    await expect.element(filter).not.toHaveAttribute('data-invalid');
    await expect.element(filter).not.toHaveAttribute('aria-invalid');
  });
});
