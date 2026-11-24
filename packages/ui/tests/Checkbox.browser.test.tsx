import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {Checkbox, CheckboxField, defaultTheme, ThemeProvider} from '../source/main.js';

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
});
