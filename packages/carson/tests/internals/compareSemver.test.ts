import {describe, expect, test} from 'vitest';

import {compareSemver} from '../../src/workspace/internals.js';

describe('compareSemver()', () => {
  test.each([
    {
      semvers: ['^2.0.0', '2.0.0', '1.5.0', '1.x', '>=1.0.0 <2.0.0', '1.0.0'],
      sortedSemvers: ['1.0.0', '1.x', '>=1.0.0 <2.0.0', '1.5.0', '2.0.0', '^2.0.0'],
    },
    {
      semvers: ['1.0.x', '1.0.0', '1.x', '>=1.0.0 <2.0.0', '1.0.1', '1.0.x', '^1.0.0'],
      sortedSemvers: ['1.0.0', '1.x', '1.0.x', '1.0.x', '>=1.0.0 <2.0.0', '^1.0.0', '1.0.1'],
    },
  ])('is used to correctly sorts $semvers', ({semvers, sortedSemvers}) => {
    let result = semvers.sort(compareSemver);

    expect(result).toEqual(sortedSemvers);
  });
});
