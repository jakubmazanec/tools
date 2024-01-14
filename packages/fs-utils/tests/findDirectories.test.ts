import {describe, test, expect} from 'vitest';
import path from 'node:path';

import {TEST_FILES_PATH} from './constants.js';
import {findDirectories} from '../src/findDirectories.js';

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
