import {useState} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {type Locator, page} from 'vitest/browser';

import {Button, Combobox, defaultTheme, ThemeProvider} from '../source/main.js';

import '../.storybook/tailwind.css';

function getBorderColor(locator: Locator) {
  return getComputedStyle(locator.element()).borderColor;
}

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
  });

  test('keeps a danger border when invalid, also on hover and when disabled', async () => {
    let style = document.createElement('style');

    // Transitions would make the computed colour lag behind the hover.
    style.textContent = '* { transition: none !important; }';
    document.head.append(style);
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

    let invalidColor = getBorderColor(invalid);

    expect(getBorderColor(both)).toBe(invalidColor);

    await invalid.hover();

    expect(getBorderColor(valid)).not.toBe(invalidColor);
    expect(getBorderColor(invalid)).toBe(invalidColor);

    await both.hover();

    expect(getBorderColor(both)).toBe(invalidColor);

    style.remove();
  });
});
