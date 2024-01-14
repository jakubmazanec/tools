import {describe, test, expect} from 'vitest';

import {pathToPosixPath} from '../src/pathToPosixPath.js';

describe('pathToPosixPath()', () => {
  test.each([
    {
      path: '/',
      result: '/',
    },
    {
      path: 'c:/foo/bar/',
      result: 'c:/foo/bar/',
    },
    {
      path: 'c:\\foo\\bar\\',
      result: 'c:/foo/bar/',
    },
  ])('correctly checks if $path is a root path', ({path, result}) => {
    expect(pathToPosixPath(path)).toEqual(result);
  });
});
