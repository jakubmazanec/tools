import {describe, expect, test} from 'vitest';

import {isNonNullable} from '../source/main.js';

describe('isNonNullable', () => {
  test.each([
    {value: undefined, expectedResult: false},
    {value: null, expectedResult: false},
    {value: 42, expectedResult: true},
    {value: Number.NaN, expectedResult: true},
    {value: 'foo', expectedResult: true},
    {value: '', expectedResult: true},
    {value: true, expectedResult: true},
    {value: false, expectedResult: true},
    {value: {}, expectedResult: true},
    {value: () => {}, expectedResult: true},
  ])('argument $value should return $expectedResult', ({value, expectedResult}) => {
    const result = isNonNullable(value);

    expect(result).toEqual(expectedResult);
  });
});
