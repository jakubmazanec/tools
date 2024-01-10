import {describe, test, expect} from '@jest/globals';

import {isRootPath} from '../src/isRootPath.js';

describe('isRootPath()', () => {
  test.each([
    {
      path: '/',
      result: true,
    },
    {
      path: 'c:/foo/bar/',
      result: false,
    },
  ])('correctly checks if $path is a root path', ({path, result}) => {
    expect(isRootPath(path)).toEqual(result);
  });
});
