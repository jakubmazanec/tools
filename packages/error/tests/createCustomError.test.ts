import {createCustomError} from '../src/main.js';

describe('createCustomError()', () => {
  test('creates custom error class', () => {
    const CustomError = createCustomError('CustomError', {UNKNOWN_ERROR: 'Unknown error!'});
    const customError = new CustomError('UNKNOWN_ERROR');

    expect(customError).toBeInstanceOf(Error);
    expect(customError).toBeInstanceOf(CustomError);
    expect(customError.message).toBe('UNKNOWN_ERROR: Unknown error!');
  });

  test('always creates unique error class', () => {
    const CustomError1 = createCustomError('CustomError', {UNKNOWN_ERROR: 'Unknown error!'});
    const CustomError2 = createCustomError('CustomError', {UNKNOWN_ERROR: 'Unknown error!'});
    const customError1 = new CustomError1('UNKNOWN_ERROR');
    const customError2 = new CustomError2('UNKNOWN_ERROR');

    expect(customError1).toBeInstanceOf(Error);
    expect(customError1).toBeInstanceOf(CustomError1);
    expect(customError2).toBeInstanceOf(Error);
    expect(customError2).toBeInstanceOf(CustomError2);
    expect(customError1).not.toBeInstanceOf(CustomError2);
    expect(customError2).not.toBeInstanceOf(CustomError1);
  });
});
