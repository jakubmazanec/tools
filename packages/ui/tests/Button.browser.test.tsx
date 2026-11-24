import {describe, expect, test, vitest} from 'vitest';
import {render} from 'vitest-browser-react';
import {page, userEvent} from 'vitest/browser';

import {Button, defaultTheme, Fieldset, ThemeProvider} from '../source/main.js';

import '../.storybook/tailwind.css';

describe(Button, () => {
  test('marks a pending submit Button', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Button submit aria-label="Pending" idle={false}>
          Save
        </Button>
        <Button disabled aria-label="Disabled">
          Save
        </Button>
      </ThemeProvider>,
    );

    let pending = page.getByRole('button', {name: 'Pending'});
    let disabled = page.getByRole('button', {name: 'Disabled'});

    await expect.element(pending).toHaveAttribute('data-pending');
    await expect.element(pending).toHaveAttribute('data-disabled');
    await expect.element(pending).toBeDisabled();
    await expect.element(pending).not.toHaveStyle({pointerEvents: 'none'});
    expect(getComputedStyle(pending.element()).backgroundColor).not.toBe(
      getComputedStyle(disabled.element()).backgroundColor,
    );
  });

  test('sets pointer-events: none only on elements the browser does not disable', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled aria-label="Link" as="a" href="#target">
          Link
        </Button>
        <Button disabled aria-label="Native">
          Native
        </Button>
        <Fieldset disabled>
          <Button aria-label="Inherited">Inherited</Button>
        </Fieldset>
      </ThemeProvider>,
    );

    await expect
      .element(page.getByRole('link', {name: 'Link'}))
      .toHaveStyle({pointerEvents: 'none'});
    await expect
      .element(page.getByRole('button', {name: 'Native'}))
      .not.toHaveStyle({pointerEvents: 'none'});
    await expect
      .element(page.getByRole('button', {name: 'Inherited'}))
      .not.toHaveStyle({pointerEvents: 'none'});
  });

  test('blocks Enter on a disabled link', async () => {
    globalThis.location.hash = '';
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled aria-label="Link" as="a" href="#target">
          Link
        </Button>
      </ThemeProvider>,
    );

    let link = page.getByRole('link', {name: 'Link'});

    await expect.element(link).toHaveAttribute('aria-disabled', 'true');
    await expect.element(link).toHaveAttribute('tabindex', '-1');

    (link.element() as HTMLElement).focus();

    await expect.element(link).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(globalThis.location.hash).not.toBe('#target');
  });

  test('blocks Enter on a link inside a disabled Fieldset', async () => {
    globalThis.location.hash = '';
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Fieldset disabled>
          <Button aria-label="Link" as="a" href="#target">
            Link
          </Button>
        </Fieldset>
      </ThemeProvider>,
    );

    let link = page.getByRole('link', {name: 'Link'});

    (link.element() as HTMLElement).focus();

    await expect.element(link).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(globalThis.location.hash).not.toBe('#target');
  });

  test('blocks Enter on a link inside a disabled Fieldset when onClick is undefined', async () => {
    globalThis.location.hash = '';
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Fieldset disabled>
          <Button aria-label="Link" as="a" href="#target" onClick={undefined}>
            Link
          </Button>
        </Fieldset>
      </ThemeProvider>,
    );

    let link = page.getByRole('link', {name: 'Link'});

    (link.element() as HTMLElement).focus();

    await expect.element(link).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(globalThis.location.hash).not.toBe('#target');
  });

  test('lets className replace the theme hover class', async () => {
    await render(
      <ThemeProvider theme={defaultTheme}>
        <Button aria-label="Save" className="hover:bg-red-600">
          Save
        </Button>
      </ThemeProvider>,
    );

    let button = page.getByRole('button', {name: 'Save'});

    await expect.element(button).toHaveClass('hover:bg-red-600');
    await expect.element(button).not.toHaveClass('hover:bg-neutral-800');
  });

  test('ignores a consumer onClick on a disabled link', async () => {
    let onClick = vitest.fn<() => void>();

    await render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled aria-label="Link" as="a" href="#target" onClick={onClick}>
          Link
        </Button>
      </ThemeProvider>,
    );
    (page.getByRole('link', {name: 'Link'}).element() as HTMLElement).click();

    expect(onClick).not.toHaveBeenCalled();
  });
});
