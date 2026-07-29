import {describe, expect, test} from 'vitest';

import {assert as assertFn, is} from '../source/main.js';

const DEFAULT_ASSERTION_ERROR_MESSAGE = 'Wrong assertion encountered';
const ASSERTION_ERROR_MESSAGE = 'Assertion failed!';

describe(assertFn, () => {
  test('works with `is`', () => {
    const value = 'foo' as string | null;
    const results: string[] = [];

    assertFn(!is<null>(value, value === null));

    results.push(value.toUpperCase());

    expect(results).toEqual(['FOO']);
  });

  test('throws', () => {
    const x = null as number | null;

    expect(() => assertFn(x !== null)).toThrow(DEFAULT_ASSERTION_ERROR_MESSAGE);
  });

  test('throws with custom error', () => {
    const x = null as number | null;

    expect(() => assertFn(x !== null, ASSERTION_ERROR_MESSAGE)).toThrow(ASSERTION_ERROR_MESSAGE);
  });
});
