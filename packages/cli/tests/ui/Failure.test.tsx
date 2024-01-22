import {render} from 'ink-testing-library';
import {describe, expect, test} from 'vitest';

import {Failure} from '../../source/ui/Failure.js';
import {getErrorDetail} from '../../source/ui/getErrorDetail.js';

describe('Failure', () => {
  test('works', () => {
    let error = new Error('Invalid foo!');
    let errorDetail = getErrorDetail(error);

    errorDetail.stack = '';

    let {lastFrame} = render(<Failure error={error} errorDetail={errorDetail} />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[31m×[39m [97mError[39m
        [31mInvalid foo![39m"
    `);
  });
});
