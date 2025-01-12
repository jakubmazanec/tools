// TODO: enable tests when this is fixed: https://github.com/vadimdemedes/ink/issues/688
import {render} from 'ink-testing-library';
import {describe, expect, test, vitest} from 'vitest';

import {SelectInput} from '../../source/ui/form/SelectInput.js';
import {DOWN_ARROW, ENTER, ITEMS, UP_ARROW} from '../constants.js';
import {sleep} from '../sleep.js';

describe.todo('SelectInput', () => {
  test('renders list', () => {
    let {lastFrame} = render(<SelectInput items={ITEMS} label="Test" />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [92m●[39m [97mFoo[39m
        [90m○[39m [90mBar[39m"
    `);
  });

  test('renders list with initial index', () => {
    let {lastFrame} = render(<SelectInput initialIndex={1} items={ITEMS} label="Test" />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [90m○[39m [90mFoo[39m
        [92m●[39m [97mBar[39m"
    `);
  });

  test('ignore input when not in focus', async () => {
    let {stdin, lastFrame} = render(<SelectInput focus={false} items={ITEMS} label="Test" />);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [92m●[39m [97mFoo[39m
        [90m○[39m [90mBar[39m"
    `);
  });

  test('moving the list', async () => {
    let {stdin, lastFrame} = render(<SelectInput items={ITEMS} label="Test" />);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [90m○[39m [90mFoo[39m
        [92m●[39m [97mBar[39m"
    `);

    await sleep(100);

    stdin.write(UP_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [92m●[39m [97mFoo[39m
        [90m○[39m [90mBar[39m"
    `);

    await sleep(100);

    stdin.write('k');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [90m○[39m [90mFoo[39m
        [92m●[39m [97mBar[39m"
    `);

    await sleep(100);

    stdin.write('j');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [92m●[39m [97mFoo[39m
        [90m○[39m [90mBar[39m"
    `);
  });

  test('moves to the beginning of the list', async () => {
    let {stdin, lastFrame} = render(<SelectInput items={ITEMS} label="Test" />);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [90m○[39m [90mFoo[39m
        [92m●[39m [97mBar[39m"
    `);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [92m●[39m [97mFoo[39m
        [90m○[39m [90mBar[39m"
    `);
  });

  test('handles selecting', async () => {
    let handleSelect = vitest.fn();
    let {stdin} = render(<SelectInput items={ITEMS} label="Test" onSelect={handleSelect} />);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    stdin.write(ENTER);

    await sleep(100);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenLastCalledWith(ITEMS[1]);
  });

  test('handles highliting', async () => {
    let handleHighlight = vitest.fn();
    let {stdin} = render(<SelectInput items={ITEMS} label="Test" onHighlight={handleHighlight} />);

    await sleep(100);

    stdin.write(DOWN_ARROW);

    await sleep(100);

    stdin.write(UP_ARROW);

    await sleep(100);

    expect(handleHighlight).toHaveBeenCalledTimes(2);
    expect(handleHighlight).toHaveBeenLastCalledWith(ITEMS[0]);
  });
});
