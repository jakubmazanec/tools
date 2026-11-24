import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';

import {defaultTheme, Field, Input, ThemeProvider} from '../source/main.js';

import '../.storybook/tailwind.css';

describe(Input, () => {
  test('hides the clear button when disabled', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Input disabled showClearButton aria-label="Input" />
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).toHaveStyle({display: 'none'});
  });

  test('hides the clear button inside a disabled Field', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Field disabled>
          <Input showClearButton aria-label="Input" />
        </Field>
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).toHaveStyle({display: 'none'});
  });

  test('shows the clear button otherwise', async () => {
    let {container} = await render(
      <ThemeProvider theme={defaultTheme}>
        <Input showClearButton aria-label="Input" />
      </ThemeProvider>,
    );

    await expect.element(container.querySelector('button')).not.toHaveStyle({display: 'none'});
  });
});
