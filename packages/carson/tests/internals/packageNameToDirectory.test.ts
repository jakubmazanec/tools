import {describe, expect, test} from 'vitest';

import {packageNameToDirectory} from '../../src/commands/internals.js';

describe('packageNameToDirectory()', () => {
  test.each([
    {
      packageName: 'foo',
      directory: 'foo',
    },
    {
      packageName: '@foo/bar',
      directory: 'bar',
    },
    {
      packageName: 'foo/bar',
      directory: 'foo',
    },
    {
      packageName: '@foo/bar/baz',
      directory: 'bar',
    },
  ])('correctly converts $packageName', ({packageName, directory}) => {
    expect(packageNameToDirectory(packageName)).toEqual(directory);
  });
});
