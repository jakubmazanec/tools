import {describe, test, expect} from '@jest/globals';

import {commandToArguments} from '../../src/internals.js';

describe('commandToArgs()', () => {
  test.each([
    {command: 'foobar', args: ['foobar']},
    {command: 'two words', args: ['two', 'words']},
    {command: 'some  weird   spaces', args: ['some ', 'weird  ', 'spaces']},
  ])('splits correctly command $command into args $args', ({command, args}) => {
    const result = commandToArguments(command);

    expect(result).toEqual(args);
  });
});
