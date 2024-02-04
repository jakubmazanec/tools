import {describe, expect, test} from 'vitest';

import {readCarsonTemplate} from '../../source/template/internals/readCarsonTemplate.js';

describe('readCarsonTemplate()', () => {
  test('iworks', async () => {
    let result = await readCarsonTemplate('@jakubmazanec/carson-templates:workspace');

    expect(result.name).toBe('workspace');
  });
});
