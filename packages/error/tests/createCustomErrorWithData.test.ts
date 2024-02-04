import {describe, expect, test} from 'vitest';
import {z} from 'zod';

import {createCustomErrorWithData} from '../source/main.js';

describe('createCustomErrorWithData()', () => {
  test('creates custom error class with data property', () => {
    const CustomError = createCustomErrorWithData(
      'CustomError',
      {FOO_ERROR: 'Error! Foo is {0}.'},
      class CustomErrorData {
        foo?: number;
      },
    );
    const customError = new CustomError('FOO_ERROR', {data: {foo: 42}, messageParameters: [42]});

    expect(customError).toBeInstanceOf(Error);
    expect(customError).toBeInstanceOf(CustomError);
    expect(customError.message).toBe('FOO_ERROR: Error! Foo is 42.');
    expect(customError.data?.foo).toBe(42);
  });

  test('creates custom error class with data property using Zod', () => {
    const CustomError = createCustomErrorWithData(
      'CustomError',
      {FOO_ERROR: 'Error! Foo is {0}.'},
      z.object({foo: z.number().optional()}),
    );
    const customError = new CustomError('FOO_ERROR', {data: {foo: 42}, messageParameters: [42]});

    expect(customError).toBeInstanceOf(Error);
    expect(customError).toBeInstanceOf(CustomError);
    expect(customError.message).toBe('FOO_ERROR: Error! Foo is 42.');
    expect(customError.data?.foo).toBe(42);
  });
});
