import {describe, test, expect} from 'vitest';

import {parseCarsonTemplateId} from '../../src/template/internals/parseCarsonTemplateId.js';

describe('parseCarsonTemplateId()', () => {
  test.each([
    {
      templateId: 'foo:bar',
      parsedTemplateId: ['foo', 'bar'],
    },
    {
      templateId: '@foo/bar:baz',
      parsedTemplateId: ['@foo/bar', 'baz'],
    },
    {
      templateId: '@foo/bar/baz:qux',
      parsedTemplateId: ['@foo/bar/baz', 'qux'],
    },
    {
      templateId: '@foo/bar:baz/qux',
      parsedTemplateId: ['@foo/bar', 'baz/qux'],
    },
  ])('is used to correctly parse $templateId', ({templateId, parsedTemplateId}) => {
    let result = parseCarsonTemplateId(templateId);

    expect(result).toEqual(parsedTemplateId);
  });
});
