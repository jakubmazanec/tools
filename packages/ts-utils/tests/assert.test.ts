import {describe, expect, test} from 'vitest';

import {assert, is} from '../source/main.js';

const DEFAULT_ASSERTION_ERROR_MESSAGE = 'Wrong assertion encountered';
const ASSERTION_ERROR_MESSAGE = 'Assertion failed!';

describe('assert', () => {
  test('works with `is`', () => {
    const value = 'foo' as string | null;
    const results: string[] = [];

    assert(!is<null>(value, value === null));

    results.push(value.toUpperCase());

    expect(results).toEqual(['FOO']);
  });

  test('throws', () => {
    const x = null as number | null;

    expect(() => assert(x !== null)).toThrow(DEFAULT_ASSERTION_ERROR_MESSAGE);
  });

  test('throws with custom error', () => {
    const x = null as number | null;

    expect(() => assert(x !== null, ASSERTION_ERROR_MESSAGE)).toThrow(ASSERTION_ERROR_MESSAGE);
  });
});
