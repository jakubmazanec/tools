import {describe, test, expect} from '@jest/globals';

import {readCarsonTemplate} from '../../src/template/internals/readCarsonTemplate.js';

describe('readCarsonTemplate()', () => {
  test('iworks', async () => {
    let result = await readCarsonTemplate('@jakubmazanec/carson-templates:workspace');

    expect(result.name).toBe('workspace');
  });
});
