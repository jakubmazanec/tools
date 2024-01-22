import {describe, expect, test} from 'vitest';
import {z, ZodError} from 'zod';

import {readFile} from '../source/main.js';

let fooSchema = z.object({
  foo: z.boolean(),
});

describe('readFile', () => {
  describe('when trying to read non-existent file', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(
        readFile('non-existent file', fooSchema, {parser: JSON.parse, throwOnZodError: true}),
      ).rejects.toThrow('ENOENT');
    });

    test('should throw if `throwOnZodError` is not set', async () => {
      await expect(readFile('non-existent file', fooSchema, {parser: JSON.parse})).rejects.toThrow(
        'ENOENT',
      );
    });
  });

  describe('when trying to read valid package.json', () => {
    test('should return parsed and valid data', async () => {
      let result = await readFile('tests/test-files/valid/Foo.json', fooSchema, {
        parser: JSON.parse,
      });

      expect(result).not.toBeInstanceOf(ZodError);
    });
  });

  describe('when trying to read invalid package.json', () => {
    test('should throw if `throwOnZodError` is `true`', async () => {
      await expect(
        readFile('tests/test-files/invalid/Foo.json', fooSchema, {
          parser: JSON.parse,
          throwOnZodError: true,
        }),
      ).rejects.toBeInstanceOf(ZodError);
    });

    test('should return ZodError if `throwOnZodError` is not set', async () => {
      let result = await readFile('tests/test-files/invalid/Foo.json', fooSchema, {
        parser: JSON.parse,
      });

      expect(result).toBeInstanceOf(ZodError);
    });
  });
});
