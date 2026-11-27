import {useState} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {Button, defaultTheme, Field, Listbox, ThemeProvider} from '../source/main.js';
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

  test('keeps a danger border when invalid, also on hover and when disabled', async () => {
    let style = document.createElement('style');

    // Transitions would make the computed colour lag behind the hover.
    style.textContent = '* { transition: none !important; }';
    document.head.append(style);
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Listbox items={[{value: 'done', label: 'Done'}]} placeholder="Valid" />
        <Listbox invalid items={[{value: 'done', label: 'Done'}]} placeholder="Invalid" />
        <Listbox disabled invalid items={[{value: 'done', label: 'Done'}]} placeholder="Both" />
      </ThemeProvider>,
    );

    let getBorderColor = (name: string) =>
      getComputedStyle(page.getByRole('button', {name}).element()).borderColor;

    // Move the mouse off the measured controls; an earlier test may have left it over one.
    await page.getByRole('button', {name: 'Valid'}).hover();

    let invalidColor = getBorderColor('Invalid');

    expect(getBorderColor('Both')).toBe(invalidColor);

    await page.getByRole('button', {name: 'Invalid'}).hover();

    expect(getBorderColor('Valid')).not.toBe(invalidColor);
    expect(getBorderColor('Invalid')).toBe(invalidColor);

    await page.getByRole('button', {name: 'Both'}).hover();

    expect(getBorderColor('Both')).toBe(invalidColor);

    style.remove();
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
