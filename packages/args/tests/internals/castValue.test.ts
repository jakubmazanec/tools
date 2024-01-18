import {describe, expect, test} from 'vitest';

import {castValue} from '../../src/internals.js';

describe('castValue()', () => {
  test.each([
    {value: 'false', type: 'boolean', result: false},
    {value: 'off', type: 'boolean', result: false},
    {value: 'no', type: 'boolean', result: false},
    {value: '0', type: 'boolean', result: false},
    {value: 'true', type: 'boolean', result: true},
    {value: 'on', type: 'boolean', result: true},
    {value: 'yes', type: 'boolean', result: true},
    {value: '1', type: 'boolean', result: true},
    {value: '42', type: 'boolean', result: true},
    {value: '-0', type: 'boolean', result: true},
    {value: '', type: 'boolean', result: false},

    {value: '0', type: 'number', result: 0},
    {value: '1', type: 'number', result: 1},
    {value: '-0', type: 'number', result: -0},
    {value: '-1', type: 'number', result: -1},
    {value: 'Infinity', type: 'number', result: Number.POSITIVE_INFINITY},
    {value: '', type: 'number', result: Number.NaN},
    {value: 'NaN', type: 'number', result: Number.NaN},

    {value: 'foobar', type: 'string', result: 'foobar'},
  ])('casts $value into $type', ({value, type, result}) => {
    expect(castValue(value, type as 'boolean' | 'number' | 'string')).toStrictEqual(result);
  });
});
