import {describe, test, expect} from '@jest/globals';
import path from 'node:path';

import {PROJECT_PATH} from './constants.js';
import {isDirectory} from '../src/isDirectory.js';

describe('isDirectory()', () => {
  test.each([
    {
      targetPath: path.join(PROJECT_PATH, 'tests'),
      result: true,
    },
    {
      targetPath: path.join(PROJECT_PATH, 'package.json'),
      result: false,
    },
  ])('correctly checks if $targetPath is directory', async ({targetPath, result}) => {
    await expect(isDirectory(targetPath)).resolves.toEqual(result);
  });
});
