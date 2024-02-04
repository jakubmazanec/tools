import path from 'node:path';
import {describe, expect, test} from 'vitest';

import {findDirectories} from '../source/findDirectories.js';
import {TEST_FILES_PATH} from './constants.js';

describe('findDirectories()', () => {
  test.each([
    {
      targetPath: path.join(TEST_FILES_PATH),
      directories: ['empty-directory'],
    },
  ])('from $targetPath find existing directory', async ({targetPath, directories}) => {
    await expect(findDirectories(targetPath)).resolves.toEqual(directories);
  });
});
