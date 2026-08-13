import type eslint from 'eslint';

export const vitestRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-vitest
  'vitest/consistent-each-for': [
    'error',
    {test: 'each', it: 'each', describe: 'each', suite: 'each'},
  ], // enforce using .each consistently
  'vitest/consistent-test-filename': 'error', // forbidden .spec test file pattern
  'vitest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'test'}], // prefer test or it but not both
  // TODO: drop the `no-autofix/` prefix once the upstream fixer is fixed. It drops `vi` from a
  // multi-specifier `vitest` import without adding `vitest`, so the calls it rewrites to `vitest.…`
  // reference an undefined identifier.
  'no-autofix/vitest/consistent-vitest-vi': ['error', {fn: 'vitest'}], // enforce using vitest consistently
  'vitest/expect-expect': 'error', // enforce having expectation in test body
  'vitest/hoisted-apis-on-top': 'error', // enforce hoisted APIs to be on top of the file
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
  'vitest/no-importing-vitest-globals': 'off', // disallow importing Vitest globals
  'vitest/no-interpolation-in-snapshots': 'error', // disallow string interpolation in snapshots
  'vitest/no-large-snapshots': 'off', // disallow large snapshots
  'vitest/no-mocks-import': 'error', // disallow importing from mocks directory
  'vitest/no-restricted-matchers': 'off', // disallow the use of certain matchers
  'vitest/no-restricted-vi-methods': 'off', // disallow specific vi. methods
  'vitest/no-standalone-expect': 'error', // disallow using expect outside of it or test blocks
  'vitest/no-test-prefixes': 'error', // disallow using test as a prefix
  'vitest/no-test-return-statement': 'error', // disallow return statements in tests
  'vitest/no-unneeded-async-expect-function': 'error', // disallow unnecessary async function wrapper for expected promises
  'vitest/padding-around-after-all-blocks': 'off', // enforce padding around `afterAll` blocks
  'vitest/padding-around-after-each-blocks': 'off', // enforce padding around `afterEach` blocks
  'vitest/padding-around-all': 'error', // enforce padding around vitest functions
  'vitest/padding-around-before-all-blocks': 'off', // enforce padding around `beforeAll` blocks
  'vitest/padding-around-before-each-blocks': 'off', // enforce padding around `beforeEach` blocks
  'vitest/padding-around-describe-blocks': 'off', // enforce padding around `describe` blocks
  'vitest/padding-around-expect-groups': 'off', // enforce padding around `expect` groups
  'vitest/padding-around-test-blocks': 'off', // enforce padding around afterAll blocks
  'vitest/prefer-called-exactly-once-with': 'off', // prefer toHaveBeenCalledExactlyOnceWith over toHaveBeenCalledOnce and toHaveBeenCalledWith
  'vitest/prefer-called-once': 'off', // enforce using toBeCalledOnce() or toHaveBeenCalledOnce()
  'vitest/prefer-called-times': 'error', // enforce using toBeCalledTimes(1) or toHaveBeenCalledTimes(1)
  'vitest/prefer-called-with': 'error', // suggest using toBeCalledWith() or toHaveBeenCalledWith()
  'vitest/prefer-comparison-matcher': 'error', // suggest using the built-in comparison matchers
  'vitest/prefer-describe-function-title': 'error', // enforce using a function as a describe title over an equivalent string
  'vitest/prefer-each': 'error', // prefer each rather than manual loops
  'vitest/prefer-equality-matcher': 'error', // suggest using the built-in quality matchers
  'vitest/prefer-expect-assertions': 'off', // suggest using expect assertions instead of callbacks
  'vitest/prefer-expect-resolves': 'error', // suggest using expect().resolves over expect(await ...) syntax
  'vitest/prefer-expect-type-of': 'error', // enforce using expect(...).toBeTypeOf(...) instead of expect(typeof ...).toBe(...)
  'vitest/prefer-hooks-in-order': 'error', // prefer having hooks in consistent order
  'vitest/prefer-hooks-on-top': 'error', // suggest having hooks before any test cases
  'vitest/prefer-import-in-mock': 'error', // prefer dynamic import in mock
  'vitest/prefer-importing-vitest-globals': 'error', // enforce importing Vitest globals
  'vitest/prefer-lowercase-title': 'off', // enforce lowercase titles
  'vitest/prefer-mock-promise-shorthand': 'error', // prefer mock resolved/rejected shorthands for promises
  'vitest/prefer-mock-return-shorthand': 'error', // prefer mock return shorthands
  'vitest/prefer-snapshot-hint': 'off', // prefer including a hint with external snapshots
  'vitest/prefer-spy-on': 'error', // suggest using vi.spyOn
  'vitest/prefer-strict-boolean-matchers': 'error', // enforce using toBe(true) and toBe(false) over matchers that coerce types to boolean
  'vitest/prefer-strict-equal': 'off', // prefer strict equal over equal
  'vitest/prefer-to-be': 'error', // suggest using toBe()
  'vitest/prefer-to-be-falsy': 'off', // suggest using toBeFalsy() — conflicts with vitest/prefer-strict-boolean-matchers, which this repo prefers
  'vitest/prefer-to-be-object': 'error', // prefer toBeObject()
  'vitest/prefer-to-be-truthy': 'off', // suggest using toBeTruthy — conflicts with vitest/prefer-strict-boolean-matchers, which this repo prefers
  'vitest/prefer-to-contain': 'error', // prefer using toContain()
  'vitest/prefer-to-have-been-called-times': 'error', // suggest using toHaveBeenCalledTimes()
  'vitest/prefer-to-have-length': 'error', // suggest using toHaveLength()
  'vitest/prefer-todo': 'warn', // suggest using test.todo
  'vitest/prefer-vi-mocked': 'error', // prefer `vi.mocked()` over `fn as Mock`
  'vitest/require-awaited-expect-poll': 'error', // ensure that every expect.poll call is awaited
  'vitest/require-hook': 'warn', // require setup and teardown to be within a hook
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error', // require local Test Context for concurrent snapshot tests
  'vitest/require-mock-type-parameters': 'error', // enforce using type parameters with vitest mock functions
  'vitest/require-test-timeout': 'off', // require tests to declare a timeout
  'vitest/require-to-throw-message': 'error', // require toThrow() to be called with an error message
  'vitest/require-top-level-describe': 'error', // enforce that all tests are in a top-level describe
  'vitest/unbound-method': 'off', // enforce unbound methods are called with their expected scope
  'vitest/valid-describe-callback': 'error', // enforce valid describe callback
  'vitest/valid-expect': ['error', {alwaysAwait: true}], // enforce valid expect() usage
  'vitest/valid-expect-in-promise': 'error', // require promises that have expectations in their chain to be valid
  'vitest/valid-title': 'warn', // enforce valid titles
  'vitest/warn-todo': 'warn', // disallow .todo usage
};
