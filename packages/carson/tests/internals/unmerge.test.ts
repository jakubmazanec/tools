import {merge, unmerge} from '../../src/template/internals.js';

describe('unmerge()', () => {
  test.each([
    {
      caseNumber: 1,
      a: undefined,
      b: undefined,
      expectedResult: undefined,
    },
    {
      caseNumber: 2,
      a: null,
      b: null,
      expectedResult: null,
    },
    {
      caseNumber: 3,
      a: null,
      b: undefined,
      expectedResult: null,
    },
    {
      caseNumber: 4,
      a: undefined,
      b: null,
      expectedResult: undefined,
    },
    {
      caseNumber: 5,
      a: null,
      b: 'foo',
      expectedResult: null,
    },
    {
      caseNumber: 6,
      a: null,
      b: [1, 2, 3],
      expectedResult: null,
    },
    {
      caseNumber: 7,
      a: null,
      b: {foo: true},
      expectedResult: null,
    },
    {
      caseNumber: 8,
      a: 'foo',
      b: null,
      expectedResult: 'foo',
    },
    {
      caseNumber: 9,
      a: [1, 2, 3],
      b: null,
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 10,
      a: {foo: true},
      b: null,
      expectedResult: {foo: true},
    },
    {
      caseNumber: 11,
      a: 'foo',
      b: 'foo',
      expectedResult: 'foo',
    },
    {
      caseNumber: 12,
      a: [1, 2, 3],
      b: [4, 5, 6],
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 13,
      a: 'foo',
      b: {foo: true},
      expectedResult: 'foo',
    },
    {
      caseNumber: 14,
      a: [1, 2, 3],
      b: {foo: true},
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 15,
      a: {foo: true},
      b: 'foo',
      expectedResult: {foo: true},
    },
    {
      caseNumber: 16,
      a: {foo: true},
      b: [1, 2, 3],
      expectedResult: {foo: true},
    },
    {
      caseNumber: 17,
      a: {foo: true},
      b: {foo: false},
      expectedResult: {},
    },
    {
      caseNumber: 18,
      a: {foo: {bar: true}},
      b: {foo: {bar: false}},
      expectedResult: {},
    },
    {
      caseNumber: 19,
      a: {foo: true},
      b: {bar: true},
      expectedResult: {foo: true},
    },
    {
      caseNumber: 20,
      a: {foo: [1, 2, 3]},
      b: {foo: [4, 5, 6]},
      expectedResult: {},
    },
    {
      caseNumber: 21,
      a: {foo: [1, 2, 3]},
      b: {bar: [4, 5, 6]},
      expectedResult: {foo: [1, 2, 3]},
    },
    {
      caseNumber: 22,
      a: {foo: {bar: true}},
      b: {foo: {baz: true}},
      expectedResult: {foo: {bar: true}},
    },
  ])('correctly handles case #$caseNumber', ({caseNumber, a, b, expectedResult}) => {
    expect(unmerge(a, b)).toEqual(expectedResult);
  });

  test.each([
    {
      caseNumber: 1,
      a: undefined,
      b: undefined,
      expectedResult: undefined,
    },
    {
      caseNumber: 2,
      a: null,
      b: null,
      expectedResult: null,
    },
    {
      caseNumber: 3,
      a: null,
      b: undefined,
      expectedResult: null,
    },
    {
      caseNumber: 4,
      a: undefined,
      b: null,
      expectedResult: undefined,
    },
    {
      caseNumber: 5,
      a: null,
      b: 'foo',
      expectedResult: null,
    },
    {
      caseNumber: 6,
      a: null,
      b: [1, 2, 3],
      expectedResult: null,
    },
    {
      caseNumber: 7,
      a: null,
      b: {foo: true},
      expectedResult: null,
    },
    {
      caseNumber: 8,
      a: 'foo',
      b: null,
      expectedResult: 'foo',
    },
    {
      caseNumber: 9,
      a: [1, 2, 3],
      b: null,
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 10,
      a: {foo: true},
      b: null,
      expectedResult: {foo: true},
    },
    {
      caseNumber: 11,
      a: 'foo',
      b: 'foo',
      expectedResult: 'foo',
    },
    {
      caseNumber: 12,
      a: [1, 2, 3],
      b: [4, 5, 6],
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 13,
      a: 'foo',
      b: {foo: true},
      expectedResult: 'foo',
    },
    {
      caseNumber: 14,
      a: [1, 2, 3],
      b: {foo: true},
      expectedResult: [1, 2, 3],
    },
    {
      caseNumber: 15,
      a: {foo: true},
      b: 'foo',
      expectedResult: {foo: true},
    },
    {
      caseNumber: 16,
      a: {foo: true},
      b: [1, 2, 3],
      expectedResult: {foo: true},
    },
    {
      caseNumber: 17,
      a: {},
      b: {foo: true},
    },
    {
      caseNumber: 18,
      a: {},
      b: {foo: {bar: true}},
    },
    {
      caseNumber: 19,
      a: {foo: true},
      b: {bar: true},
    },
    {
      caseNumber: 20,
      a: {},
      b: {foo: [4, 5, 6]},
    },
    {
      caseNumber: 21,
      a: {foo: [1, 2, 3]},
      b: {bar: [4, 5, 6]},
    },
    {
      caseNumber: 22,
      a: {foo: {bar: true}},
      b: {foo: {baz: true}},
      expectedResult: {foo: {bar: true}},
    },
  ])('with merge() correctly handles case #$caseNumber', ({caseNumber, a, b}) => {
    expect(unmerge(merge(a, b), b)).toEqual(a);
  });
});
