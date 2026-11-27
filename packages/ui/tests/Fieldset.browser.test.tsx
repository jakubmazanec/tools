import {type ReactElement} from 'react';
import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {type Locator, page} from 'vitest/browser';

import {
  Button,
  Checkbox,
  Combobox,
  defaultTheme,
  Fieldset,
  Input,
  Listbox,
  Radio,
  RadioGroup,
  Textarea,
  ThemeProvider,
} from '../source/main.js';

let controls: Array<
  [name: string, renderControl: (disabled?: boolean) => ReactElement, locate: () => Locator]
> = [
  [
    'Checkbox',
    (disabled) => <Checkbox aria-label="Checkbox" disabled={disabled} />,
    () => page.getByRole('checkbox', {name: 'Checkbox'}),
  ],
  [
    'Radio',
    (disabled) => (
      <RadioGroup>
        <Radio aria-label="Radio" disabled={disabled} value="a" />
      </RadioGroup>
    ),
    () => page.getByRole('radio', {name: 'Radio'}),
  ],
  [
    'Input',
    (disabled) => <Input aria-label="Input" disabled={disabled} />,
    () => page.getByRole('textbox', {name: 'Input'}),
  ],
  [
    'Textarea',
    (disabled) => <Textarea aria-label="Textarea" disabled={disabled} />,
    () => page.getByRole('textbox', {name: 'Textarea'}),
  ],
  [
    'Listbox',
    (disabled) => (
      <Listbox disabled={disabled} items={[{value: 'a', label: 'A'}]} placeholder="Listbox" />
    ),
    () => page.getByRole('button', {name: 'Listbox'}),
  ],
  [
    'Combobox',
    (disabled) => <Combobox disabled={disabled} items={[{value: 'a', label: 'A'}]} />,
    () => page.getByRole('combobox'),
  ],
  [
    'Button',
    (disabled) => (
      <Button aria-label="Button" disabled={disabled}>
        Button
      </Button>
    ),
    () => page.getByRole('button', {name: 'Button'}),
  ],
];

describe(Fieldset, () => {
  test.each(controls)(
    'disables %s inside a disabled Fieldset',
    async (_, renderControl, locate) => {
      await render(
        <ThemeProvider theme={defaultTheme}>
          <Fieldset disabled>{renderControl()}</Fieldset>
        </ThemeProvider>,
      );

      await expect.element(locate()).toHaveAttribute('data-disabled');
    },
  );

  test.each(controls)('disables %s with the disabled prop', async (_, renderControl, locate) => {
    await render(<ThemeProvider theme={defaultTheme}>{renderControl(true)}</ThemeProvider>);

    await expect.element(locate()).toHaveAttribute('data-disabled');
  });

  test('disables nested fieldsets', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Fieldset disabled aria-label="Outer">
          <Fieldset aria-label="Inner">
            <Checkbox aria-label="Checkbox" />
          </Fieldset>
        </Fieldset>
      </ThemeProvider>,
    );

    await expect.element(page.getByRole('group', {name: 'Inner'})).toHaveAttribute('data-disabled');
    await expect
      .element(page.getByRole('checkbox', {name: 'Checkbox'}))
      .toHaveAttribute('data-disabled');
  });

  test.each(controls)(
    'disables %s with disabled={false} inside a disabled Fieldset',
    async (_, renderControl, locate) => {
      await render(
        <ThemeProvider theme={defaultTheme}>
          <Fieldset disabled>{renderControl(false)}</Fieldset>
        </ThemeProvider>,
      );

      await expect.element(locate()).toHaveAttribute('data-disabled');
    },
  );

  test('ignores clicks on a Checkbox with disabled={false} inside a disabled Fieldset rendered as div', async () => {
    let onChange = vitest.fn<(checked: boolean) => void>();

    await render(
      <ThemeProvider theme={defaultTheme}>
        <Fieldset disabled as="div">
          <Checkbox aria-label="Checkbox" disabled={false} onChange={onChange} />
        </Fieldset>
      </ThemeProvider>,
    );
    // The Fieldset's aria-disabled makes Playwright treat the checkbox as disabled.
    await page.getByRole('checkbox', {name: 'Checkbox'}).click({force: true});

    expect(onChange).not.toHaveBeenCalled();
  });

  // Headless UI already blocks clicks inside a native disabled fieldset; only a non-native one
  // needs the inherited state.
  test.each(['fieldset', 'div'] as const)(
    'ignores clicks on a Checkbox inside a disabled Fieldset rendered as %s',
    async (as) => {
      let onChange = vitest.fn<(checked: boolean) => void>();

      await render(
        <ThemeProvider theme={defaultTheme}>
          <Fieldset disabled as={as}>
            <Checkbox aria-label="Checkbox" onChange={onChange} />
          </Fieldset>
        </ThemeProvider>,
      );
      await page.getByRole('checkbox', {name: 'Checkbox'}).click({force: true});

      expect(onChange).not.toHaveBeenCalled();
    },
  );
});
