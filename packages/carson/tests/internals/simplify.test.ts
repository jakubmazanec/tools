import {describe, expect, test} from 'vitest';

import {simplify} from '../../source/template/internals.js';

describe('simplify()', () => {
  test.each([
    {
      caseNumber: 1,
      a: undefined,
      expectedResult: null,
    },
    {
      caseNumber: 2,
      a: null,
      expectedResult: null,
    },
    {
      caseNumber: 3,
      a: 'foo',
      expectedResult: null,
    },
    {
      caseNumber: 4,
      a: 42,
      expectedResult: null,
    },
    {
      caseNumber: 5,
      a: true,
      expectedResult: null,
    },
    {
      caseNumber: 6,
      a: [1, 2, 3],
      expectedResult: null,
    },
    {
      caseNumber: 7,
      a: {foo: null},
      expectedResult: {foo: null},
    },
    {
      caseNumber: 8,
      a: {foo: 'foo'},
      expectedResult: {foo: null},
    },
    {
      caseNumber: 9,
      a: {foo: 42},
      expectedResult: {foo: null},
    },
    {
      caseNumber: 10,
      a: {foo: true},
      expectedResult: {foo: null},
    },
    {
      caseNumber: 11,
      a: {foo: {bar: true}},
      expectedResult: {foo: {bar: null}},
    },
  ])('correctly handles case #$caseNumber', ({a, expectedResult}) => {
    expect(simplify(a)).toEqual(expectedResult);
  });
});
