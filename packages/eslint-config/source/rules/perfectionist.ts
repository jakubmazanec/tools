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
  'perfectionist/sort-arrays': 'off', // enforce sorted arrays
  'perfectionist/sort-classes': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      groups: [
        'property',
        'private-property',
        'static-property',
        'static-block',
        'constructor',
        'init-method',
        'static-method',
        ['get-method', 'set-method'],
        ['method', 'function-property'],
        ['private-method', 'private-function-property'],
        'unknown',
      ],
      customGroups: [
        {
          groupName: 'init-method',
          selector: 'method',
          elementNamePattern: '^init$',
        },
      ],
    },
  ], // enforce sorted classes
  'perfectionist/sort-constructor-parameters': 'off', // enforce sorted constructor parameters
  'perfectionist/sort-decorators': 'off', // dnforce sorted decorators
  'perfectionist/sort-enums': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      partitionByNewLine: true,
    },
  ], // enforce sorted TypeScript enums
  'perfectionist/sort-export-attributes': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted export attributes
  'perfectionist/sort-exports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted exports
  'perfectionist/sort-heritage-clauses': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted heritage clauses
  'perfectionist/sort-import-attributes': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
    },
  ], // enforce sorted import attributes
  'perfectionist/sort-imports': [
    'error',
    {
      type: 'alphabetical',
      ignoreCase: false,
      sortSideEffects: true,
      groups: [
        ['builtin', 'external', 'type-external', 'type-builtin'],
        [
          'internal',
          'parent',
          'sibling',
          'index',
          'style',
          'type-internal',
          'type-parent',
          'type-sibling',
          'type-index',
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
      groups: ['reserved', 'shorthand-prop', 'multiline-prop', 'unknown', 'callback'],
      customGroups: [
        {groupName: 'callback', elementNamePattern: '^on.+'},
        {groupName: 'reserved', elementNamePattern: '^(ref|key)$'},
      ],
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
  'perfectionist/sort-modules': 'off', // enforce sorted module members
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
