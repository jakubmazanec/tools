import {describe, test, expect} from '@jest/globals';

import {is} from '../src/main.js';

const isNull = (value: unknown) => value === null;
const isString = (value: unknown) => typeof value === 'string';

describe('is', () => {
  test('helps with type narrowing', () => {
    const maybeString = 'foo' as number | string;
    const maybeNumber = 42 as number | string;
    const results = [];

    if (is<string>(maybeString, typeof maybeString === 'string')) {
      results.push(maybeString.toUpperCase());
    } else {
      results.push(maybeString + 1);
    }

    if (is<number>(maybeNumber, typeof maybeNumber === 'number')) {
      results.push(maybeNumber + 1);
    } else {
      results.push(maybeNumber.toUpperCase());
    }

    expect(results).toEqual(['FOO', 43]);
  });

  test.each([
    {
      value: null,
      tester: isNull,
      expectedResult: true,
    },
    {
      value: 'foo',
      tester: isString,
      expectedResult: true,
    },
    {
      value: 42,
      tester: isString,
      expectedResult: false,
    },
  ])(
    'argument $value tested with $tester should have result $expectedResult',
    ({value, tester, expectedResult}) => {
      const result = is(value, tester(value));

      expect(result).toEqual(expectedResult);
    },
  );
});
