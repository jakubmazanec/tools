import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // @stylistic/eslint-plugin rules
  '@stylistic/array-bracket-newline': 'off', // enforce linebreaks after opening and before closing array brackets
  '@stylistic/array-bracket-spacing': 'off', // enforce consistent spacing inside array brackets
  '@stylistic/array-element-newline': 'off', // enforce line breaks after each array element
  '@stylistic/arrow-parens': 'off', // require parentheses around arrow function arguments
  '@stylistic/arrow-spacing': 'off', // enforce consistent spacing before and after the arrow in arrow functions
  '@stylistic/block-spacing': 'off', // disallow or enforce spaces inside of blocks after opening block and before closing block
  '@stylistic/brace-style': 'off', // enforce consistent brace style for blocks
  '@stylistic/comma-dangle': 'off', // require or disallow trailing commas
  '@stylistic/comma-spacing': 'off', // enforce consistent spacing before and after commas
  '@stylistic/comma-style': 'off', // enforce consistent comma style
  '@stylistic/computed-property-spacing': 'off', // enforce consistent spacing inside computed property brackets
  '@stylistic/dot-location': 'off', // enforce consistent newlines before and after dots
  '@stylistic/eol-last': 'off', // require or disallow newline at the end of files
  '@stylistic/func-call-spacing': 'off', // require or disallow spacing between function identifiers and their invocations. Alias of `function-call-spacing`
  '@stylistic/function-call-argument-newline': 'off', // enforce line breaks between arguments of a function call
  '@stylistic/function-call-spacing': 'off', // require or disallow spacing between function identifiers and their invocations
  '@stylistic/function-paren-newline': 'off', // enforce consistent line breaks inside function parentheses
  '@stylistic/generator-star-spacing': 'off', // enforce consistent spacing around `*` operators in generator functions
  '@stylistic/implicit-arrow-linebreak': 'off', // enforce the location of arrow function bodies
  '@stylistic/indent': 'off', // enforce consistent indentation
  '@stylistic/indent-binary-ops': 'off', // indentation for binary operators
  '@stylistic/jsx-child-element-spacing': 'off', // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  '@stylistic/jsx-closing-bracket-location': 'off', // enforce closing bracket location in JSX
  '@stylistic/jsx-closing-tag-location': 'off', // enforce closing tag location for multiline JSX
  '@stylistic/jsx-curly-brace-presence': 'off', // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSXchildren or attributes
  '@stylistic/jsx-curly-newline': 'off', // enforce consistent linebreaks in curly braces in JSX attributes and expressions
  '@stylistic/jsx-curly-spacing': 'off', // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  '@stylistic/jsx-equals-spacing': 'off', // enforce or disallow spaces around equal signs in JSX attributes
  '@stylistic/jsx-first-prop-new-line': 'off', // enforce proper position of the first property in JSX
  '@stylistic/jsx-indent': 'off', // enforce JSX indentation
  '@stylistic/jsx-indent-props': 'off', // enforce props indentation in JSX
  '@stylistic/jsx-max-props-per-line': 'off', // enforce maximum of props on a single line in JSX
  '@stylistic/jsx-newline': 'off', // require or prevent a new line after jsx elements and expressions.
  '@stylistic/jsx-one-expression-per-line': 'off', // require one JSX element per line
  '@stylistic/jsx-props-no-multi-spaces': 'off', // disallow multiple spaces between inline JSX props
  '@stylistic/jsx-quotes': 'off', // enforce the consistent use of either double or single quotes in JSX attributes
  '@stylistic/jsx-self-closing-comp': 'off', // disallow extra closing tags for components without children
  '@stylistic/jsx-sort-props': 'off', // s  enforce props alphabetical sorting
  '@stylistic/jsx-tag-spacing': 'off', // enforce whitespace in and around the JSX opening and closing brackets
  '@stylistic/jsx-wrap-multilines': 'off', // disallow missing parentheses around multiline JSX
  '@stylistic/key-spacing': 'off', // enforce consistent spacing between keys and values in object literal properties
  '@stylistic/keyword-spacing': 'off', // enforce consistent spacing before and after keywords
  '@stylistic/linebreak-style': 'off', // enforce consistent linebreak style
  '@stylistic/lines-around-comment': 'off', // require empty lines around comments
  '@stylistic/lines-between-class-members': ['warn', 'always', {exceptAfterSingleLine: true}], // require or disallow an empty line between class members
  '@stylistic/max-len': 'off', // enforce a maximum line length
  '@stylistic/max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
  '@stylistic/member-delimiter-style': 'off', // require a specific member delimiter style for interfaces and type literals
  '@stylistic/multiline-ternary': 'off', // enforce newlines between operands of ternary expressions
  '@stylistic/new-parens': 'off', // enforce or disallow parentheses when invoking a constructor with no arguments
  '@stylistic/newline-per-chained-call': 'off', // require a newline after each call in a method chain
  '@stylistic/no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
  '@stylistic/no-extra-parens': 'off', // disallow unnecessary parentheses
  '@stylistic/no-extra-semi': 'off', // disallow unnecessary semicolons
  '@stylistic/no-floating-decimal': 'off', // disallow leading or trailing decimal points in numeric literals
  '@stylistic/no-mixed-operators': 'off', // disallow mixed binary operators
  '@stylistic/no-mixed-spaces-and-tabs': 'off', // disallow mixed spaces and tabs for indentation
  '@stylistic/no-multi-spaces': 'off', // disallow multiple spaces
  '@stylistic/no-multiple-empty-lines': 'off', // disallow multiple empty lines
  '@stylistic/no-tabs': 'off', // disallow all tabs
  '@stylistic/no-trailing-spaces': 'off', // disallow trailing whitespace at the end of lines
  '@stylistic/no-whitespace-before-property': 'off', // disallow whitespace before properties
  '@stylistic/nonblock-statement-body-position': 'off', // enforce the location of single-line statements
  '@stylistic/object-curly-newline': 'off', // enforce consistent line breaks after opening and before closing braces
  '@stylistic/object-curly-spacing': 'off', // enforce consistent spacing inside braces
  '@stylistic/object-property-newline': 'off', // enforce placing object properties on separate lines
  '@stylistic/one-var-declaration-per-line': 'off', // require or disallow newlines around variable declarations
  '@stylistic/operator-linebreak': 'off', // enforce consistent linebreak style for operators
  '@stylistic/padded-blocks': 'off', // require or disallow padding within blocks
  '@stylistic/padding-line-between-statements': [
    'warn',
    {blankLine: 'always', prev: '*', next: 'return'},
    {blankLine: 'always', prev: 'import', next: '*'},
    {blankLine: 'any', prev: 'import', next: 'import'},
  ], // require or disallow padding lines between statements
  '@stylistic/quote-props': 'off', // require quotes around object literal property names
  '@stylistic/quotes': 'off', // enforce the consistent use of either backticks, double, or single quotes
  '@stylistic/rest-spread-spacing': 'off', // enforce spacing between rest and spread operators and their expressions
  '@stylistic/semi': 'off', // require or disallow semicolons instead of ASI
  '@stylistic/semi-spacing': 'off', // enforce consistent spacing before and after semicolons
  '@stylistic/semi-style': 'off', // enforce location of semicolons
  '@stylistic/space-before-blocks': 'off', // enforce consistent spacing before blocks
  '@stylistic/space-before-function-paren': 'off', // enforce consistent spacing before `function` definition opening parenthesis
  '@stylistic/space-in-parens': 'off', // enforce consistent spacing inside parentheses
  '@stylistic/space-infix-ops': 'off', // require spacing around infix operators
  '@stylistic/space-unary-ops': 'off', // enforce consistent spacing before or after unary operators
  '@stylistic/spaced-comment': ['warn', 'always'], // enforce consistent spacing after the `//` or `/*` in a comment
  '@stylistic/switch-colon-spacing': 'off', // enforce spacing around colons of switch statements
  '@stylistic/template-curly-spacing': 'off', // require or disallow spacing around embedded expressions of template strings
  '@stylistic/template-tag-spacing': 'off', // require or disallow spacing between template tags and their literals
  '@stylistic/type-annotation-spacing': 'off', // require consistent spacing around type annotations
  '@stylistic/type-generic-spacing': 'off', // enforces consistent spacing inside TypeScript type generics
  '@stylistic/type-named-tuple-spacing': 'off', // Expect space before the type declaration in the named tuple
  '@stylistic/wrap-iife': 'off', // require parentheses around immediate `function` invocations
  '@stylistic/wrap-regex': 'off', // require parenthesis around regex literals
  '@stylistic/yield-star-spacing': 'off', // require or disallow spacing around the `*` in `yield*` expressions
};

export default config;
