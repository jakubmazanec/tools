import type eslint from 'eslint';

export const stylisticRules: eslint.Linter.Config['rules'] = {
  // @stylistic/js/eslint-plugin rules
  '@stylistic/js/array-bracket-newline': 'off', // enforce linebreaks after opening and before closing array brackets
  '@stylistic/js/array-bracket-spacing': 'off', // enforce consistent spacing inside array brackets
  '@stylistic/js/array-element-newline': 'off', // enforce line breaks after each array element
  '@stylistic/js/arrow-parens': 'off', // require parentheses around arrow function arguments
  '@stylistic/js/arrow-spacing': 'off', // enforce consistent spacing before and after the arrow in arrow functions
  '@stylistic/js/block-spacing': 'off', // disallow or enforce spaces inside of blocks after opening block and before closing block
  '@stylistic/js/brace-style': 'off', // enforce consistent brace style for blocks
  '@stylistic/js/comma-dangle': 'off', // require or disallow trailing commas
  '@stylistic/js/comma-spacing': 'off', // enforce consistent spacing before and after commas
  '@stylistic/js/comma-style': 'off', // enforce consistent comma style
  '@stylistic/js/curly-newline': 'off', // enforce consistent line breaks after opening and before closing braces
  '@stylistic/js/computed-property-spacing': 'off', // enforce consistent spacing inside computed property brackets
  '@stylistic/js/dot-location': 'off', // enforce consistent newlines before and after dots
  '@stylistic/js/eol-last': 'off', // require or disallow newline at the end of files
  '@stylistic/js/func-call-spacing': 'off', // require or disallow spacing between function identifiers and their invocations. Alias of `function-call-spacing`
  '@stylistic/js/function-call-argument-newline': 'off', // enforce line breaks between arguments of a function call
  '@stylistic/js/jsx-function-call-newline': 'off', // enforce line breaks before and after JSX elements when they are used as arguments to a function
  '@stylistic/js/function-call-spacing': 'off', // require or disallow spacing between function identifiers and their invocations
  '@stylistic/js/function-paren-newline': 'off', // enforce consistent line breaks inside function parentheses
  '@stylistic/js/generator-star-spacing': 'off', // enforce consistent spacing around `*` operators in generator functions
  '@stylistic/js/implicit-arrow-linebreak': 'off', // enforce the location of arrow function bodies
  '@stylistic/js/indent': 'off', // enforce consistent indentation
  '@stylistic/js/indent-binary-ops': 'off', // indentation for binary operators
  '@stylistic/js/jsx-child-element-spacing': 'off', // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  '@stylistic/js/jsx-closing-bracket-location': 'off', // enforce closing bracket location in JSX
  '@stylistic/js/jsx-closing-tag-location': 'off', // enforce closing tag location for multiline JSX
  '@stylistic/js/jsx-curly-brace-presence': 'off', // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSXchildren or attributes
  '@stylistic/js/jsx-curly-newline': 'off', // enforce consistent linebreaks in curly braces in JSX attributes and expressions
  '@stylistic/js/jsx-curly-spacing': 'off', // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  '@stylistic/js/jsx-equals-spacing': 'off', // enforce or disallow spaces around equal signs in JSX attributes
  '@stylistic/js/jsx-first-prop-new-line': 'off', // enforce proper position of the first property in JSX
  '@stylistic/js/jsx-indent-props': 'off', // enforce props indentation in JSX
  '@stylistic/js/jsx-max-props-per-line': 'off', // enforce maximum of props on a single line in JSX
  '@stylistic/js/jsx-newline': 'off', // require or prevent a new line after jsx elements and expressions.
  '@stylistic/js/jsx-one-expression-per-line': 'off', // require one JSX element per line
  '@stylistic/js/jsx-pascal-case': 'off', // enforce PascalCase for user-defined JSX components
  '@stylistic/js/jsx-props-no-multi-spaces': 'off', // disallow multiple spaces between inline JSX props
  '@stylistic/js/jsx-quotes': 'off', // enforce the consistent use of either double or single quotes in JSX attributes
  '@stylistic/js/jsx-self-closing-comp': 'off', // disallow extra closing tags for components without children
  '@stylistic/js/jsx-sort-props': 'off', // s  enforce props alphabetical sorting
  '@stylistic/js/jsx-tag-spacing': 'off', // enforce whitespace in and around the JSX opening and closing brackets
  '@stylistic/js/jsx-wrap-multilines': 'off', // disallow missing parentheses around multiline JSX
  '@stylistic/js/key-spacing': 'off', // enforce consistent spacing between keys and values in object literal properties
  '@stylistic/js/keyword-spacing': 'off', // enforce consistent spacing before and after keywords
  '@stylistic/js/linebreak-style': 'off', // enforce consistent linebreak style
  '@stylistic/js/line-comment-position': 'off', // enforce position of line comments
  '@stylistic/js/lines-around-comment': 'off', // require empty lines around comments
  '@stylistic/js/lines-between-class-members': ['warn', 'always', {exceptAfterSingleLine: true}], // require or disallow an empty line between class members
  '@stylistic/js/max-len': 'off', // enforce a maximum line length
  '@stylistic/js/max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
  '@stylistic/js/member-delimiter-style': 'off', // require a specific member delimiter style for interfaces and type literals
  '@stylistic/js/multiline-comment-style': 'off', // enforce a particular style for multiline comments
  '@stylistic/js/multiline-ternary': 'off', // enforce newlines between operands of ternary expressions
  '@stylistic/js/new-parens': 'off', // enforce or disallow parentheses when invoking a constructor with no arguments
  '@stylistic/js/newline-per-chained-call': 'off', // require a newline after each call in a method chain
  '@stylistic/js/no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
  '@stylistic/js/no-extra-parens': 'off', // disallow unnecessary parentheses
  '@stylistic/js/no-extra-semi': 'off', // disallow unnecessary semicolons
  '@stylistic/js/no-floating-decimal': 'off', // disallow leading or trailing decimal points in numeric literals
  '@stylistic/js/no-mixed-operators': 'off', // disallow mixed binary operators
  '@stylistic/js/no-mixed-spaces-and-tabs': 'off', // disallow mixed spaces and tabs for indentation
  '@stylistic/js/no-multi-spaces': 'off', // disallow multiple spaces
  '@stylistic/js/no-multiple-empty-lines': 'off', // disallow multiple empty lines
  '@stylistic/js/no-tabs': 'off', // disallow all tabs
  '@stylistic/js/no-trailing-spaces': 'off', // disallow trailing whitespace at the end of lines
  '@stylistic/js/no-whitespace-before-property': 'off', // disallow whitespace before properties
  '@stylistic/js/nonblock-statement-body-position': 'off', // enforce the location of single-line statements
  '@stylistic/js/object-curly-newline': 'off', // enforce consistent line breaks after opening and before closing braces
  '@stylistic/js/object-curly-spacing': 'off', // enforce consistent spacing inside braces
  '@stylistic/js/object-property-newline': 'off', // enforce placing object properties on separate lines
  '@stylistic/js/one-var-declaration-per-line': 'off', // require or disallow newlines around variable declarations
  '@stylistic/js/operator-linebreak': 'off', // enforce consistent linebreak style for operators
  '@stylistic/js/padded-blocks': 'off', // require or disallow padding within blocks
  '@stylistic/js/padding-line-between-statements': [
    'warn',
    {blankLine: 'always', prev: '*', next: 'continue'},
    {blankLine: 'always', prev: '*', next: 'break'},
    {blankLine: 'always', prev: '*', next: 'return'},
    {blankLine: 'always', prev: 'import', next: '*'},
    {blankLine: 'any', prev: 'import', next: 'import'},
  ], // require or disallow padding lines between statements
  '@stylistic/js/quote-props': 'off', // require quotes around object literal property names
  '@stylistic/js/quotes': 'off', // enforce the consistent use of either backticks, double, or single quotes
  '@stylistic/js/rest-spread-spacing': 'off', // enforce spacing between rest and spread operators and their expressions
  '@stylistic/js/semi': 'off', // require or disallow semicolons instead of ASI
  '@stylistic/js/semi-spacing': 'off', // enforce consistent spacing before and after semicolons
  '@stylistic/js/semi-style': 'off', // enforce location of semicolons
  '@stylistic/js/space-before-blocks': 'off', // enforce consistent spacing before blocks
  '@stylistic/js/space-before-function-paren': 'off', // enforce consistent spacing before `function` definition opening parenthesis
  '@stylistic/js/space-in-parens': 'off', // enforce consistent spacing inside parentheses
  '@stylistic/js/space-infix-ops': 'off', // require spacing around infix operators
  '@stylistic/js/space-unary-ops': 'off', // enforce consistent spacing before or after unary operators
  '@stylistic/js/spaced-comment': ['warn', 'always'], // enforce consistent spacing after the `//` or `/*` in a comment
  '@stylistic/js/switch-colon-spacing': 'off', // enforce spacing around colons of switch statements
  '@stylistic/js/template-curly-spacing': 'off', // require or disallow spacing around embedded expressions of template strings
  '@stylistic/js/template-tag-spacing': 'off', // require or disallow spacing between template tags and their literals
  '@stylistic/js/type-annotation-spacing': 'off', // require consistent spacing around type annotations
  '@stylistic/js/type-generic-spacing': 'off', // enforces consistent spacing inside TypeScript type generics
  '@stylistic/js/type-named-tuple-spacing': 'off', // Expect space before the type declaration in the named tuple
  '@stylistic/js/wrap-iife': 'off', // require parentheses around immediate `function` invocations
  '@stylistic/js/wrap-regex': 'off', // require parenthesis around regex literals
  '@stylistic/js/yield-star-spacing': 'off', // require or disallow spacing around the `*` in `yield*` expressions
};
