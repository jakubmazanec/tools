import {describe, test, expect} from '@jest/globals';

import {rotate} from '../../src/ui/internals/rotate.js';

describe('rotate', () => {
  test('works', () => {
    let result = rotate([1, 2, 3, 4, 5], 2);

    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
});
