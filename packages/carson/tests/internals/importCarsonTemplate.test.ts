import {describe, expect, test} from 'vitest';

import {importCarsonTemplate} from '../../source/template/internals/importCarsonTemplate.js';

describe('importCarsonTemplate()', () => {
  test('works', async () => {
    let result = await importCarsonTemplate('@jakubmazanec/template:foobar'); // this is not a Carson template, but doesn't matter, since we're actually testing importing code

    expect(typeof result.Template).toBe('function');
  });
});
