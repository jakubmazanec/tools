import type eslint from 'eslint';

export const perfectionistRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-perfectionist rules
  'perfectionist/sort-array-includes': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
    },
  ], // enforce sorted arrays before include method
  'perfectionist/sort-classes': 'off', // enforce sorted classes
  'perfectionist/sort-enums': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
    },
  ], // enforce sorted TypeScript enums
  'perfectionist/sort-exports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted exports
  'perfectionist/sort-imports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      sortSideEffects: true,
      matcher: 'regex',
      groups: [
        ['builtin', 'external', 'external-type', 'builtin-type'],
        [
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'style',
          'internal-type',
          'parent-type',
          'sibling-type',
          'index-type',
          'unknown',
        ],
        ['side-effect', 'side-effect-style'],
      ],
    },
  ], // enforce sorted imports
  'perfectionist/sort-interfaces': 'off', // enforce sorted interface properties
  'perfectionist/sort-intersection-types': [
    'error',
    {
      type: 'natural',
      ignoreCase: false,
      partitionByNewLine: true,
      groups: [
        'named',
        'object',
        'tuple',
        'conditional',
        'function',
        ['intersection', 'union'],
        'import',
        'operator',
        'keyword',
        'literal',
        'nullish',
      ],
    },
  ], // enforce sorted intersection types
  'perfectionist/sort-jsx-props': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      groups: ['reserved', 'shorthand', 'multiline', 'unknown', 'callback'],
      customGroups: {
        callback: 'on*',
        reserved: '{ref,key}',
      },
    },
  ], // enforce sorted JSX props
  'perfectionist/sort-maps': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
    },
  ], // enforce sorted Map elements
  'perfectionist/sort-named-exports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted named exports
  'perfectionist/sort-named-imports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted named imports
  'perfectionist/sort-object-types': 'off', // enforce sorted object types
  'perfectionist/sort-objects': 'off', // enforce sorted objects
  'perfectionist/sort-sets': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
    },
  ], // enforce sorted Set elements
  'perfectionist/sort-switch-case': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted switch case statements
  'perfectionist/sort-union-types': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
      groups: [
        'named',
        'object',
        'tuple',
        'conditional',
        'function',
        ['intersection', 'union'],
        'import',
        'operator',
        'keyword',
        'literal',
        'nullish',
      ],
    },
  ], // enforce sorted union types
  'perfectionist/sort-variable-declarations': 'off', // enforce sorted variable declarations
};
