import {createCustomError} from '../src/main.js';

describe('createCustomError()', () => {
  test('creates custom error class', () => {
    const CustomError = createCustomError('CustomError', {UNKNOWN_ERROR: 'Unknown error!'});
    const customError = new CustomError('UNKNOWN_ERROR');

    expect(customError).toBeInstanceOf(Error);
    expect(customError).toBeInstanceOf(CustomError);
    expect(customError.message).toBe('UNKNOWN_ERROR: Unknown error!');
  });

  test('creates custom error class with data property', () => {
    const CustomError = createCustomError(
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
});
