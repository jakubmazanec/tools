import {describe, test, expect} from 'vitest';
import path from 'node:path';

import {TEST_FILES_PATH} from './constants.js';
import {ensureEmptyDirectory} from '../src/ensureEmptyDirectory.js';
import {isEmptyDirectory} from '../src/isEmptyDirectory.js';

describe('isEmptyDirectory()', () => {
  test.each([
    {
      runEnsureEmpty: true,
      targetPath: path.join(TEST_FILES_PATH, 'empty-directory'),
      result: true,
    },
    {
      runEnsureEmpty: false,
      targetPath: path.join(TEST_FILES_PATH, 'this-directory-should-not-exist'),
      result: false,
    },
    {
      runEnsureEmpty: false,
      targetPath: path.join(TEST_FILES_PATH),
      result: false,
    },
  ])(
    'correctly checks if $targetPath is empty directory',
    async ({runEnsureEmpty, targetPath, result}) => {
      if (runEnsureEmpty) {
        await ensureEmptyDirectory(targetPath);
      }

      await expect(isEmptyDirectory(targetPath)).resolves.toEqual(result);
    },
  );
});
