import {describe, test, expect} from 'vitest';

import path from 'node:path';

import {prettify} from '../../src/template/internals/prettify.js';
import {TEST_FILES_PATH} from '../constants.js';

describe('prettify()', () => {
  test('works', async () => {
    await expect(
      prettify('export const foo   =   "42"', path.join(TEST_FILES_PATH, 'foo.js')),
    ).resolves.toBe("export const foo = '42';\n");
  });

  test('works for unknown extensions', async () => {
    await expect(prettify('foo', path.join(TEST_FILES_PATH, 'foo.foo'))).resolves.toBe('foo');
  });
});
