import {getProgramDetail} from '../../src/program/getProgramDetail.js';

describe('getProgramDetail', () => {
  test('works', () => {
    let programDetail = getProgramDetail({
      name: 'App',
      version: '1.0.0',
      description: 'Test CLI app',
      bin: {
        foo: 'build/foo.js',
      },
    });

    expect(programDetail).toEqual({
      name: 'App',
      version: '1.0.0',
      description: 'Test CLI app',
      bin: 'foo',
    });
  });
});
