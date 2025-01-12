// TODO: enable tests when this is fixed: https://github.com/vadimdemedes/ink/issues/688
import {Text} from 'ink';
import {render} from 'ink-testing-library';
import {describe, expect, test} from 'vitest';

import {Header} from '../../source/ui/Header.js';

describe.todo('Header', () => {
  test('works', () => {
    let {lastFrame} = render(
      <Header icon="!">
        <Text>Header</Text>
      </Header>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`"! Header"`);
  });
});
