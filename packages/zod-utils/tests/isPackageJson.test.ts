import {isPackageJson} from '../src/main.js';

describe('isPackageJson', () => {
  test.each([
    {value: {}, expectedResult: true},
    {value: {name: 'foo'}, expectedResult: true},
    {value: {name: 42}, expectedResult: false},
  ])('argument $value should return $expectedResult', ({value, expectedResult}) => {
    let result = isPackageJson(value);

    expect(result).toEqual(expectedResult);
  });
});
