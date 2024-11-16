import type eslint from 'eslint';

export const vitestRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-vitest
  'vitest/consistent-test-filename': 'error', // forbidden .spec test file pattern
  'vitest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'test'}], // prefer test or it but not both
  'vitest/expect-expect': 'error', // enforce having expectation in test body
  'vitest/max-expects': 'off', // enforce a maximum number of expect per test
  'vitest/max-nested-describe': 'off', // nested describe block should be less than set max value or default value
  'vitest/no-alias-methods': 'error', // disallow alias methods
  'vitest/no-commented-out-tests': 'warn', // disallow commented out tests
  'vitest/no-conditional-expect': 'error', // disallow conditional expects
  'vitest/no-conditional-in-test': 'off', // disallow conditional tests
  'vitest/no-conditional-tests': 'error', // disallow conditional tests
  'vitest/no-disabled-tests': 'error', // disallow disabled tests
  'vitest/no-duplicate-hooks': 'error', // disallow duplicate hooks and teardown hooks
  'vitest/no-focused-tests': 'error', // disallow focused tests
  'vitest/no-hooks': 'off', // disallow setup and teardown hooks
  'vitest/no-identical-title': 'error', // disallow identical titles
  'vitest/no-import-node-test': 'error', // disallow importing node:test
  'vitest/no-interpolation-in-snapshots': 'error', // disallow string interpolation in snapshots
  'vitest/no-large-snapshots': 'off', // disallow large snapshots
  'vitest/no-mocks-import': 'error', // disallow importing from mocks directory
  'vitest/no-restricted-matchers': 'off', // disallow the use of certain matchers
  'vitest/no-restricted-vi-methods': 'off', // disallow specific vi. methods
  'vitest/no-standalone-expect': 'error', // disallow using expect outside of it or test blocks
  'vitest/no-test-prefixes': 'error', // disallow using test as a prefix
  'vitest/no-test-return-statement': 'error', // disallow return statements in tests
  'vitest/prefer-called-with': 'error', // suggest using toBeCalledWith() or toHaveBeenCalledWith()
  'vitest/prefer-comparison-matcher': 'error', // suggest using the built-in comparison matchers
  'vitest/prefer-each': 'error', // prefer each rather than manual loops
  'vitest/prefer-equality-matcher': 'error', // suggest using the built-in quality matchers
  'vitest/prefer-expect-assertions': 'off', // suggest using expect assertions instead of callbacks
  'vitest/prefer-expect-resolves': 'error', // suggest using expect().resolves over expect(await ...) syntax
  'vitest/prefer-hooks-in-order': 'error', // prefer having hooks in consistent order
  'vitest/prefer-hooks-on-top': 'error', // suggest having hooks before any test cases
  'vitest/prefer-lowercase-title': 'off', // enforce lowercase titles
  'vitest/prefer-mock-promise-shorthand': 'error', // prefer mock resolved/rejected shorthands for promises
  'vitest/prefer-snapshot-hint': 'off', // prefer including a hint with external snapshots
  'vitest/prefer-spy-on': 'error', // suggest using vi.spyOn
  'vitest/prefer-strict-equal': 'off', // prefer strict equal over equal
  'vitest/prefer-to-be': 'error', // suggest using toBe()
  'vitest/prefer-to-be-falsy': 'error', // suggest using toBeFalsy()
  'vitest/prefer-to-be-object': 'error', // prefer toBeObject()
  'vitest/prefer-to-be-truthy': 'error', // suggest using toBeTruthy
  'vitest/prefer-to-contain': 'error', // prefer using toContain()
  'vitest/prefer-to-have-length': 'error', // suggest using toHaveLength()
  'vitest/prefer-todo': 'warn', // suggest using test.todo
  'vitest/require-hook': 'warn', // require setup and teardown to be within a hook
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error', // require local Test Context for concurrent snapshot tests
  'vitest/require-to-throw-message': 'error', // require toThrow() to be called with an error message
  'vitest/require-top-level-describe': 'error', // enforce that all tests are in a top-level describe
  'vitest/valid-describe-callback': 'error', // enforce valid describe callback
  'vitest/valid-expect': ['error', {alwaysAwait: true}], // enforce valid expect() usage
  'vitest/valid-title': 'warn', // enforce valid titles
};
