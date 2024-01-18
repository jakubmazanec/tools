import path from 'node:path';
import {describe, expect, test} from 'vitest';

import {isDirectory} from '../src/isDirectory.js';
import {PROJECT_PATH} from './constants.js';

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
