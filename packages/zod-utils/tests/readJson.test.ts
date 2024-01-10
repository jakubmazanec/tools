import {describe, test, expect} from '@jest/globals';
import {z, ZodError} from 'zod';

import {readJson} from '../src/main.js';

const fooSchema = z.object({
  foo: z.boolean(),
});

describe('readJson', () => {
  describe('when trying to read non-existent file', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(
        readJson('non-existent file', fooSchema, {throwOnZodError: true}),
      ).rejects.toThrow('ENOENT');
    });

    test('should throw if `throwOnZodError` is not set', async () => {
      await expect(readJson('non-existent file', fooSchema)).rejects.toThrow('ENOENT');
    });
  });

  describe('when trying to read valid package.json', () => {
    test('should return parsed and valid data', async () => {
      const result = await readJson('tests/test-files/valid/Foo.json', fooSchema);

      expect(result).not.toBeInstanceOf(ZodError);
    });
  });

  describe('when trying to read invalid package.json', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(
        readJson('tests/test-files/invalid/Foo.json', fooSchema, {throwOnZodError: true}),
      ).rejects.toBeInstanceOf(ZodError);
    });

    test('should return ZodError if `throwOnZodError` is not set', async () => {
      const result = await readJson('tests/test-files/invalid/Foo.json', fooSchema);

      expect(result).toBeInstanceOf(ZodError);
    });
  });
});
