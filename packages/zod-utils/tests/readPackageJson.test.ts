import {describe, expect, test} from 'vitest';
import {ZodError} from 'zod';

import {readPackageJson} from '../src/main.js';

describe('readPackageJson', () => {
  describe('when trying to read non-existent file', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(readPackageJson('non-existent file', {throwOnZodError: true})).rejects.toThrow(
        'ENOENT',
      );
    });

    test('should throw if `throwOnZodError` is not set', async () => {
      await expect(readPackageJson('non-existent file')).rejects.toThrow('ENOENT');
    });
  });

  describe('when trying to read valid package.json', () => {
    test('should return parsed and valid data', async () => {
      const result = await readPackageJson('tests/test-files/valid/package.json');

      expect(result.name).toBe('foo');
    });
  });

  describe('when trying to read invalid package.json', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(
        readPackageJson('tests/test-files/invalid/package.json', {throwOnZodError: true}),
      ).rejects.toBeInstanceOf(ZodError);
    });

    test('should return ZodError if `throwOnZodError` is not set', async () => {
      const result = await readPackageJson('tests/test-files/invalid/package.json');

      expect(result).toBeInstanceOf(ZodError);
    });
  });
});
