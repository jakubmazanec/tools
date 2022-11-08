import {Text} from 'ink';
import {render} from 'ink-testing-library';

import {Header} from '../../src/ui/Header.js';

describe('Header', () => {
  test('works', () => {
    let {lastFrame} = render(
      <Header icon="!">
        <Text>Header</Text>
      </Header>,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`"! Header"`);
  });
});
