import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page} from 'vitest/browser';

import {defaultTheme, Radio, RadioGroup, ThemeProvider} from '../source/main.js';

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
});
