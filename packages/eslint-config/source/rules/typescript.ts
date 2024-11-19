/* eslint-disable id-denylist -- we have to use identifiers like `String` in rule definitions */

import type eslint from 'eslint';

export const typescriptRules: eslint.Linter.Config['rules'] = {
  // override ESLint rules
  camelcase: 'off', // enforce camelcase naming convention
  'class-methods-use-this': 'off', // enforce that class methods utilize this
  'consistent-return': 'off', // require return statements to either always or never specify values
  'default-param-last': 'off', // enforce default parameters to be last
  'dot-notation': 'off', // enforce dot notation whenever possible
  'no-array-constructor': 'off', // disallow Array constructors
  'no-dupe-class-members': 'off', // disallow duplicate class members
  'no-duplicate-imports': 'off', // disallow duplicate module imports
  'no-empty-function': 'off', // disallow empty functions
  'no-implied-eval': 'off', // disallow the use of eval()-like methods
  'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
  'no-loop-func': 'off', // disallow function declarations and expressions inside loop statements
  'no-magic-numbers': 'off', // disallow magic numbers
  'no-redeclare': 'off', // disallow variable redeclaration
  'no-shadow': 'off', // disallow variable declarations from shadowing variables declared in the outer scope
  'no-throw-literal': 'off', // disallow throwing literals as exceptions
  'no-undef': 'off', // disallow the use of undeclared variables unless mentioned in /* global */ comments
  'no-underscore-dangle': 'off', // disallow dangling underscores in identifiers
  'no-unused-expressions': 'off', // disallow unused expressions
  'no-unused-vars': 'off', // disallow unused variables
  'no-use-before-define': 'off', // disallow the use of variables before they are defined
  'no-useless-constructor': 'off', // disallow unnecessary constructors
  'max-params': 'off', // enforce a maximum number of parameters in function definitions
  'prefer-destructuring': 'off', // require destructuring from arrays and/or objects
  'prefer-promise-reject-errors': 'off', // require using Error objects as Promise rejection reasons
  'require-await': 'off', // disallow async functions which have no await expression

  // override eslint-plugin-react rules
  'react/forbid-prop-types': 'off', // forbid certain propTypes
  'react/forbid-foreign-prop-types': 'off', // forbid using another component's propTypes
  'react/no-unused-prop-types': 'off', // prevent definitions of unused prop types
  'react/prop-types': 'off', // prevent missing props validation in a React component definition
  'react/sort-prop-types': 'off', // enforce propTypes declarations alphabetical sorting

  // @typescript-eslint/eslint-plugin rules
  '@typescript-eslint/adjacent-overload-signatures': 'error', // require that member overloads be consecutive
  '@typescript-eslint/array-type': ['error', {default: 'array-simple'}], // requires using either T[] or Array<T> for arrays
  '@typescript-eslint/await-thenable': 'error', // disallows awaiting a value that is not a Thenable
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      minimumDescriptionLength: 3,
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': false,
      'ts-nocheck': false,
    },
  ], // bans // @ts-<directive> comments from being used
  '@typescript-eslint/ban-tslint-comment': 'off', // bans // tslint:<rule-flag> comments from being used
  '@typescript-eslint/class-literal-property-style': 'off', // ensures that literals on classes are exposed in a consistent style
  '@typescript-eslint/class-methods-use-this': 'off', // enforce that class methods utilize this
  '@typescript-eslint/consistent-generic-constructors': 'off', // enforces specifying generic type arguments on type annotation or constructor name of a constructor call
  '@typescript-eslint/consistent-indexed-object-style': 'off', // enforce or disallow the use of the record type
  '@typescript-eslint/consistent-return': 'error', // require return statements to either always or never specify values
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ], // enforces consistent usage of type assertions
  '@typescript-eslint/consistent-type-definitions': 'off', // consistent with type definition either interface or type
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    {fixMixedExportsWithInlineTypeSpecifier: true},
  ], // enforces consistent usage of type exports
  '@typescript-eslint/consistent-type-imports': 'warn', // enforces consistent usage of type imports
  '@typescript-eslint/default-param-last': 'warn', // enforce default parameters to be last
  '@typescript-eslint/dot-notation': ['error', {allowKeywords: true}], // enforce dot notation whenever possible
  '@typescript-eslint/explicit-function-return-type': 'off', // require explicit return types on functions and class methods
  '@typescript-eslint/explicit-member-accessibility': ['warn', {accessibility: 'no-public'}], // require explicit accessibility modifiers on class properties and methods
  '@typescript-eslint/explicit-module-boundary-types': 'off', // require explicit return and argument types on exported functions' and classes' public class methods
  '@typescript-eslint/init-declarations': 'off', // require or disallow initialization in variable declarations
  '@typescript-eslint/max-params': ['warn', {max: 3}], // enforce a maximum number of parameters in function definitions
  '@typescript-eslint/member-ordering': [
    'warn',
    {
      default: {
        memberTypes: ['field', 'constructor', 'method'],
        order: 'as-written',
      },
    },
  ], // require a consistent member declaration order
  '@typescript-eslint/method-signature-style': ['error', 'property'], // enforces using a particular method signature syntax.
  '@typescript-eslint/naming-convention': [
    'warn',
    // interfaces cannot start with "I"
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    // variables and parameters must use camel case, pascal case or upper case with no leading and trailing underscores - exceptions are names that are only underscores (used e.g. for placeholder parameters)
    {
      selector: 'variableLike',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
      filter: {
        regex: '^(_+|__webpack_public_path__)$',
        match: false,
      },
    },
    // functions must use camel case or pascal case with no leading and trailing underscores
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    /* TODO [@jakubmazanec]: enable this when we can discern things defined in external packages and other stuff - {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'are',
              'was',
              'should',
              'has',
              'can',
              'does',
              'did',
              'will',
              'use',
              'allow',
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          // this allows destructured boolean variable names to retain their original name
          {
            selector: 'variable',
            types: ['boolean'],
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'property',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'are', 'was', 'should', 'has', 'can', 'did', 'will', 'use', 'allow'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'parameterProperty',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'are',
              'was',
              'should',
              'has',
              'can',
              'does',
              'did',
              'will',
              'use',
              'allow',
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'accessor',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'are',
              'was',
              'should',
              'has',
              'can',
              'does',
              'did',
              'will',
              'use',
              'allow',
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          }, */
    // "member-like" (i.e. properties, methods, etc.) must use camel case, pascal case or upper case with only leading underscore allowed
    {
      selector: 'memberLike',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'forbid',
      filter: {
        regex: String.raw`(^(\^|&|\$|\/|\\|:|!).*)|(^\d+$)|(^__typename$)|(^__html$)|(^x-tenant-context$)|(^accept-language$)`, // don't check: 1) properties starting with symbol ^, &, $, /, \, :, or !, 2) GraphQL specific property `__typename`, 3) React specific property `__html`, 4) HTTP request headers
        match: false,
      },
    },
    // "type-like" (i.e. interface, enum, etc.) must use pascal case
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ], // enforces naming conventions for everything across a codebase
  '@typescript-eslint/no-base-to-string': 'off', // requires that .toString() is only called on objects which provide useful information when stringified
  '@typescript-eslint/no-array-constructor': 'error', // disallow generic Array constructors
  '@typescript-eslint/no-array-delete': 'error', // disallow using the delete operator on array values
  '@typescript-eslint/no-confusing-non-null-assertion': 'off', // disallow non-null assertion in locations that may be confusing
  '@typescript-eslint/no-confusing-void-expression': [
    'warn',
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    },
  ], // requires expressions of type void to appear in statement position
  '@typescript-eslint/no-dupe-class-members': 'error', // disallow duplicate class members
  '@typescript-eslint/no-duplicate-enum-values': 'error', // disallow duplicate enum member values
  '@typescript-eslint/no-duplicate-type-constituents': 'error', // disallow duplicate constituents of union or intersection types
  '@typescript-eslint/no-dynamic-delete': 'off', // bans usage of the delete operator with computed key expressions
  '@typescript-eslint/no-empty-function': 'off', // disallow empty functions
  '@typescript-eslint/no-empty-object-type': 'error', // disallow accidentally using the "empty object" type
  '@typescript-eslint/no-explicit-any': ['error', {fixToUnknown: true}], // disallow usage of the any type
  '@typescript-eslint/no-extra-non-null-assertion': 'warn', // disallow extra non-null assertion
  '@typescript-eslint/no-extraneous-class': [
    'warn',
    {
      allowConstructorOnly: true,
      allowEmpty: false,
      allowStaticOnly: true,
    },
  ], // forbids the use of classes as namespaces
  '@typescript-eslint/no-floating-promises': 'error', // requires Promise-like values to be handled appropriately
  '@typescript-eslint/no-for-in-array': 'error', // disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-implied-eval': 'error', // disallow the use of eval()-like methods
  '@typescript-eslint/no-import-type-side-effects': 'off', // enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {ignoreParameters: false, ignoreProperties: false},
  ], // disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
  '@typescript-eslint/no-invalid-this': 'warn', // disallow this keywords outside of classes or class-like objects
  '@typescript-eslint/no-invalid-void-type': 'warn', // disallows usage of void type outside of generic or return types
  '@typescript-eslint/no-loop-func': 'warn', // disallow function declarations that contain unsafe references inside loop statements
  '@typescript-eslint/no-magic-numbers': 'off', // disallows magic numbers
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      checkNever: true,
    },
  ], // disallow the void operator except when used to discard a value
  '@typescript-eslint/no-misused-new': 'error', // enforce valid definition of new and constructor
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: {
        attributes: false,
      },
    },
  ], // avoid using promises in places not designed to handle them
  '@typescript-eslint/no-mixed-enums': 'error', // disallow enums from having both number and string members
  '@typescript-eslint/no-namespace': 'warn', // disallow the use of custom TypeScript modules and namespaces
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error', // disallows using a non-null assertion in the left operand of the nullish coalescing operator
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // disallows using a non-null assertion after an optional chain expression
  '@typescript-eslint/no-non-null-assertion': 'warn', // disallows non-null assertions using the ! postfix operator
  '@typescript-eslint/no-redundant-type-constituents': 'warn', // disallow members of unions and intersections that do nothing or override type information
  '@typescript-eslint/no-redeclare': 'error', // disallow variable redeclaration
  '@typescript-eslint/no-deprecated': 'warn', // disallow using code marked as @deprecated
  '@typescript-eslint/no-restricted-imports': 'off', // disallow specified modules when loaded by import
  '@typescript-eslint/no-restricted-types': [
    'error',
    {
      types: {
        Function:
          "Don't use Function as a type. Use explicit types like `(...args: any[]) => void`.",
        String: {message: 'Use string instead.', fixWith: 'string'},
      },
    },
  ], // disallow certain types
  '@typescript-eslint/no-require-imports': 'error', // disallows invocation of require()
  '@typescript-eslint/no-shadow': ['warn', {allow: ['resolve, reject']}], // disallow variable declarations from shadowing variables declared in the outer scope
  '@typescript-eslint/no-this-alias': 'warn', // disallow aliasing this
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // flags unnecessary equality comparisons against boolean literals
  '@typescript-eslint/no-unnecessary-condition': ['error', {allowConstantLoopConditions: true}], // prevents conditionals where the type is always truthy or always falsy
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error', // disallow unnecessary assignment of constructor property parameter
  '@typescript-eslint/no-unnecessary-qualifier': 'error', // warns when a namespace qualifier is unnecessary
  '@typescript-eslint/no-unnecessary-template-expression': 'error', // disallow unnecessary template expressions
  '@typescript-eslint/no-unnecessary-type-arguments': 'error', // warns if an explicitly specified type argument is the default for that type parameter
  '@typescript-eslint/no-unnecessary-type-assertion': 'error', // warns if a type assertion does not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-constraint': 'warn', // disallows unnecessary constraints on generic types
  '@typescript-eslint/no-unnecessary-type-parameters': 'off', // disallow type parameters that aren't used multiple times
  '@typescript-eslint/no-unsafe-argument': 'error', // disallows calling an function with an any type value
  '@typescript-eslint/no-unsafe-assignment': 'error', // disallows assigning any to variables and properties
  '@typescript-eslint/no-unsafe-call': 'error', // disallows calling an any type value
  '@typescript-eslint/no-unsafe-declaration-merging': 'error', // disallows unsafe declaration merging
  '@typescript-eslint/no-unsafe-enum-comparison': 'error', // disallow comparing an enum value with a non-enum value
  '@typescript-eslint/no-unused-expressions': 'error', // disallow unused expressions
  '@typescript-eslint/no-unsafe-function-type': 'error', // disallow using the unsafe built-in Function type
  '@typescript-eslint/no-unsafe-member-access': 'error', // disallows member access on any typed variables
  '@typescript-eslint/no-unsafe-return': 'error', // disallows returning any from a function
  // TODO: think about turning this on in the future
  '@typescript-eslint/no-unsafe-type-assertion': 'off', // disallow type assertions that narrow a type
  '@typescript-eslint/no-unsafe-unary-minus': 'error', // require unary negation to take a number
  '@typescript-eslint/no-unused-vars': [
    'error',
    {vars: 'all', args: 'none', ignoreRestSiblings: true},
  ], // disallow unused variables
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
    },
  ], // disallow the use of variables before they are defined
  '@typescript-eslint/no-useless-constructor': 'warn', // disallow unnecessary constructors
  '@typescript-eslint/no-useless-empty-export': 'error', // disallow empty exports that don't change anything in a module file
  '@typescript-eslint/no-wrapper-object-types': 'error', // disallow using confusing built-in primitive class wrappers
  '@typescript-eslint/non-nullable-type-assertion-style': 'off', // prefers a non-null assertion over explicit type cast when possible
  '@typescript-eslint/only-throw-error': 'error', // disallow throwing non-Error values as exceptions
  '@typescript-eslint/parameter-properties': 'error', // require or disallow the use of parameter properties in class constructors
  '@typescript-eslint/prefer-as-const': 'error', // prefer usage of as const over literal type
  '@typescript-eslint/prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {array: false, object: true},
      AssignmentExpression: {array: true, object: false},
    },
    {enforceForRenamedProperties: false},
  ], // require destructuring from arrays and/or objects
  '@typescript-eslint/prefer-enum-initializers': 'off', // prefer initializing each enums member value
  '@typescript-eslint/prefer-find': 'error', // enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
  '@typescript-eslint/prefer-for-of': 'warn', // prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  '@typescript-eslint/prefer-function-type': 'warn', // Use function types instead of interfaces with call signatures
  '@typescript-eslint/prefer-includes': 'warn', // enforce includes method over indexOf method
  '@typescript-eslint/prefer-literal-enum-member': 'warn', // require that all enum members be literal values to prevent unintended enum member name shadow issues
  '@typescript-eslint/prefer-namespace-keyword': 'error', // require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {ignoreConditionalTests: true, ignoreTernaryTests: true, ignoreMixedLogicalExpressions: true},
  ], // enforce the usage of the nullish coalescing operator instead of logical chaining
  '@typescript-eslint/prefer-optional-chain': 'error', // prefer using concise optional chain expressions instead of chained logical ands
  '@typescript-eslint/prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
  '@typescript-eslint/prefer-readonly': 'warn', // requires that private members are marked as readonly if they're never modified outside of the constructor
  '@typescript-eslint/prefer-readonly-parameter-types': 'off', // requires that function parameters are typed as readonly to prevent accidental mutation of inputs
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn', // prefer using type parameter when calling Array#reduce instead of casting
  '@typescript-eslint/prefer-regexp-exec': 'off', // prefer RegExp#exec() over String#match() if no global flag is provided
  '@typescript-eslint/prefer-return-this-type': 'warn', // enforce that this is used when only this type is returned
  '@typescript-eslint/prefer-string-starts-ends-with': 'off', // enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
  '@typescript-eslint/promise-function-async': 'warn', // requires any function or method that returns a Promise to be marked async
  '@typescript-eslint/related-getter-setter-pairs': 'warn', // enforce that get() types should be assignable to their equivalent set() type
  '@typescript-eslint/require-array-sort-compare': 'warn', // enforce giving compare argument to Array#sort
  '@typescript-eslint/require-await': 'off', // disallow async functions which have no await expression
  '@typescript-eslint/restrict-plus-operands': ['error'], // when adding two variables, operands must both be of type number or of type string
  '@typescript-eslint/restrict-template-expressions': 'off', // enforce template literal expressions to be of string type
  '@typescript-eslint/return-await': 'error', // rules for awaiting returned promises
  '@typescript-eslint/strict-boolean-expressions': [
    'warn',
    {
      allowNullableBoolean: true,
      allowNullableString: true,
    },
  ], // restricts the types allowed in boolean expressions
  '@typescript-eslint/switch-exhaustiveness-check': 'error', // exhaustiveness checking in switch with union type
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {path: 'never', types: 'never', lib: 'never'},
  ], // sets preference level for triple slash directives versus ES6-style import declarations
  '@typescript-eslint/typedef': 'off', // requires type annotations to exist
  '@typescript-eslint/unbound-method': 'off', // enforces unbound methods are called with their expected scope
  '@typescript-eslint/unified-signatures': 'error', // warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn', // enforce typing arguments in Promise rejection callbacks as unknown
};
