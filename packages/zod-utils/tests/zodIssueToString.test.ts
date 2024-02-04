import {describe, expect, test} from 'vitest';
import * as z from 'zod';

import {zodIssuesToStrings} from '../source/main.js';

const stringSchema = z.string();
const stringNumberUnionSchema = z.union([z.string(), z.number()]);
const objectSchema = z
  .object({
    name: z.string(),
  })
  .strict();
const enumSchema = z.enum(['foo', 'bar']);

describe('zodIssuesToStrings', () => {
  test.each([
    {
      schema: stringSchema,
      value: 42,
      expectedIssuesCount: 1,
      expectedStrings: ['Expected "string" but received "number"'],
    },
    {
      schema: stringNumberUnionSchema,
      value: false,
      expectedIssuesCount: 1,
      expectedStrings: [
        'Invalid union: expected "string" but received "boolean"; expected "number" but received "boolean"',
      ],
    },
    {
      schema: objectSchema,
      value: {
        name: 42,
      },
      expectedIssuesCount: 1,
      expectedStrings: ['Expected "string" but received "number" at path "name"'],
    },
    {
      schema: objectSchema,
      value: {
        foo: 'bar',
      },
      expectedIssuesCount: 2,
      expectedStrings: [
        'Expected "string" but received "undefined" at path "name"',
        'Unrecognized key "foo"',
      ],
    },
    {
      schema: enumSchema,
      value: 'foobar',
      expectedIssuesCount: 1,
      expectedStrings: ['Expected "foo" or "bar"'],
    },
  ])(
    'a schema called with $value should result in $expectedIssuesCount issues',
    ({schema, value, expectedIssuesCount, expectedStrings}) => {
      const result = schema.safeParse(value);

      expect(
        !result.success &&
          (result as {error: z.ZodError}).error instanceof z.ZodError &&
          (result as {error: z.ZodError}).error.issues.length === expectedIssuesCount,
      ).toBeTruthy();
      expect(zodIssuesToStrings((result as {error: z.ZodError}).error.issues)).toEqual(
        expectedStrings,
      );
    },
  );
});
