import {describe, test, expect} from '@jest/globals';
import path from 'node:path';
import {z} from 'zod';

import {TEST_TEMPLATES_DIRECTORY_PATH} from './constants.js';
import {Template} from '../src/Template.js';

describe('Template', () => {
  describe('rendering', () => {
    test.each([
      {
        label: 'good case #1',
        templateFilePath: 'json-with-no-variables.ejs',
        result: [
          {
            attributes: {to: 'foo.json'},
            data: null,
            content: '{\n  "foo": true\n}\n',
          },
        ],
      },
      {
        label: 'good case #2',
        templateFilePath: 'json-with-a-variable.ejs',
        result: [
          {
            attributes: {to: 'foo.json', variables: {name: 'foo'}},
            data: null,
            content: '{\n  "foo": true\n}\n',
          },
        ],
      },
      {
        label: 'good case #3',
        templateFilePath: 'json-with-multiple-variables.ejs',
        result: [
          {
            attributes: {to: 'foo.json', variables: {enabled: true, name: 'foo'}},
            data: null,
            content: '{\n  "foo": true\n}\n',
          },
          {
            attributes: {to: 'bar.json', variables: {enabled: true, name: 'bar'}},
            data: null,
            content: '{\n  "bar": true\n}\n',
          },
        ],
      },
    ])('$label', async ({templateFilePath, result}) => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, templateFilePath), null),
      ).resolves.toEqual(result);
    });

    test.each([
      {
        label: 'bad case #1',
        templateFilePath: 'json-with-bad-attributes.ejs',
        error: 'INVALID_ATTRIBUTES: Invalid template attributes.',
      },
      {
        label: 'bad case #2',
        templateFilePath: 'json-with-bad-content-syntax.ejs',
        error: 'FAILED_FORMAT: Template render formatting has failed.',
      },
      {
        label: 'bad case #3',
        templateFilePath: 'json-with-bad-yaml-syntax.ejs',
        error: 'INVALID_ATTRIBUTES: Invalid template attributes.',
      },
    ])('$label', async ({templateFilePath, error}) => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, templateFilePath), null),
      ).rejects.toThrow(error);
    });
  });

  describe('rendering with custom attributes or data schema', () => {
    test.each([
      {
        label: 'good case #1',
        templateFilePath: 'json-with-custom-attributes.ejs',
        attributesSchema: z.object({type: z.string()}),
        dataSchema: z.object({foo: z.number()}),
        data: {foo: 1},
        result: [
          {
            attributes: {to: 'foo.json', type: 'foo'},
            data: {foo: 1},
            content: '{\n  "foo": 1\n}\n',
          },
        ],
      },
      {
        label: 'good case #2',
        templateFilePath: 'json-with-custom-attributes.ejs',
        attributesSchema: z.object({type: z.string()}),
        dataSchema: z.object({foo: z.number()}),
        data: {foo: 2},
        result: [
          {
            attributes: {to: 'foo.json', type: 'foo'},
            data: {foo: 2},
            content: '{\n  "foo": 2\n}\n',
          },
        ],
      },
      {
        label: 'good case #3',
        templateFilePath: 'json-with-rendered-variables.ejs',
        dataSchema: z.object({foo: z.boolean(), bar: z.boolean()}),
        data: {foo: false, bar: true},
        result: [
          {
            attributes: {to: 'foo.json', variables: {name: 'foo', enabled: 'false'}},
            data: {foo: false, bar: true},
            content: '{\n  "foo": false\n}\n',
          },
          {
            attributes: {to: 'bar.json', variables: {name: 'bar', enabled: 'true'}},
            data: {foo: false, bar: true},
            content: '{\n  "bar": true\n}\n',
          },
        ],
      },
    ])('$label', async ({templateFilePath, attributesSchema, dataSchema, data, result}) => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, templateFilePath), data, {
          attributesSchema,
          dataSchema,
        }),
      ).resolves.toEqual(result);
    });

    test.each([
      {
        label: 'bad case #1',
        templateFilePath: 'json-with-bad-custom-attributes.ejs',
        attributesSchema: z.object({value: z.string()}),
        error: 'INVALID_ATTRIBUTES: Invalid template attributes.',
      },
    ])('handles $label', async ({templateFilePath, attributesSchema, error}) => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, templateFilePath), null, {
          attributesSchema,
        }),
      ).rejects.toThrow(error);
    });
  });

  describe('rendering template with extends', () => {
    test.each([
      {
        label: 'good case #1',
        templateFilePath: 'json-with-extends.ejs',
        attributesSchema: z.object({type: z.string()}),
        dataSchema: z.object({foo: z.number()}),
        data: {foo: 1},
        result: [
          {
            attributes: {extends: './json-with-custom-attributes.ejs', to: 'bar.json', type: 'foo'},
            data: {foo: 1},
            content: '{\n  "foo": 1\n}\n',
          },
        ],
      },
      {
        label: 'good case #2',
        templateFilePath: 'json-with-extends-extending.ejs',
        attributesSchema: z.object({type: z.string()}),
        dataSchema: z.object({foo: z.number()}),
        data: {foo: 1},
        result: [
          {
            attributes: {extends: './json-with-extends.ejs', to: 'bar.json', type: 'bar'},
            data: {foo: 1},
            content: '{\n  "foo": 1\n}\n',
          },
        ],
      },
    ])('$label', async ({templateFilePath, attributesSchema, dataSchema, data, result}) => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, templateFilePath), data, {
          attributesSchema,
          dataSchema,
        }),
      ).resolves.toEqual(result);
    });
  });

  describe('rendering with Prettier options', () => {
    test('good case #1', async () => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, 'js.ejs'), null, {
          disablePrettier: true,
        }),
      ).resolves.toEqual([
        {
          attributes: {to: 'foo.js'},
          data: null,
          content: "let foo = {\n  'foo-value': 42,\n}\n",
        },
      ]);
    });

    test('good case #2', async () => {
      await expect(
        Template.readAndRender(path.join(TEST_TEMPLATES_DIRECTORY_PATH, 'js.ejs'), null, {
          prettierOptions: {
            singleQuote: false,
            trailingComma: 'none',
          },
        }),
      ).resolves.toEqual([
        {
          attributes: {to: 'foo.js'},
          data: null,
          content: 'let foo = {\n  "foo-value": 42\n};\n',
        },
      ]);
    });
  });

  describe('rendering templates with invalid EJS', () => {
    test('bad case #1', async () => {
      await expect(
        Template.readAndRender(
          path.join(TEST_TEMPLATES_DIRECTORY_PATH, 'js-with-syntax-error.ejs'),
          null,
        ),
      ).rejects.toThrow('FAILED_RENDER: Template rendering has failed.');
    });
  });
});
