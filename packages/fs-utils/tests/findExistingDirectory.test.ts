import path from 'node:path';

import {PROJECT_PATH} from './constants.js';
import {findExistingDirectory} from '../src/findExistingDirectory.js';

describe('findExistingDirectory()', () => {
  test.each([
    {
      targetPath: path.join(PROJECT_PATH, 'tests'),
      existingPath: path.join(PROJECT_PATH, 'tests'),
    },
    {
      targetPath: path.join(PROJECT_PATH, 'this-folder-should-not-exist'),
      existingPath: PROJECT_PATH,
    },
    {
      targetPath: path.join(PROJECT_PATH, 'package.json', 'this-folder-should-not-exist'),
      existingPath: PROJECT_PATH,
    },
  ])('from $targetPath find existing directory', async ({targetPath, existingPath}) => {
    await expect(findExistingDirectory(targetPath)).resolves.toEqual(existingPath);
  });
});
