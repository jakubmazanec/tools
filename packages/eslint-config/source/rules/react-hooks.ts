import type eslint from 'eslint';

export const reactHooksRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-react-hooks rules
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',

  // TODO: re-enable once React Compiler support is added to the Carson templates.
  // in ways that need real component-level fixes, not a config change.
  // 'react-hooks/capitalized-calls': 'off', // validates against calling capitalized functions/methods instead of using JSX
  // 'react-hooks/config': 'error', // validates the compiler configuration options
  // 'react-hooks/error-boundaries': 'error', // validates usage of error boundaries instead of try/catch for errors in child components
  // 'react-hooks/exhaustive-effect-dependencies': 'error', // validates that effect dependencies are exhaustive and without extraneous values
  // 'react-hooks/fbt': 'off', // validates usage of fbt
  // 'react-hooks/gating': 'error', // validates configuration of gating mode
  // 'react-hooks/globals': 'error', // validates against assignment/mutation of globals during render
  // 'react-hooks/hooks': 'error', // validates the rules of hooks
  // 'react-hooks/immutability': 'error', // validates against mutating props, state, and other values that are immutable
  // 'react-hooks/incompatible-library': 'error', // validates against usage of libraries which are incompatible with memoization
  // 'react-hooks/invariant': 'off', // internal invariants
  // 'react-hooks/memo-dependencies': 'error', // validates that useMemo() and useCallback() specify comprehensive dependencies without extraneous values
  // 'react-hooks/memoized-effect-dependencies': 'error', // validates that effect dependencies are memoized
  // 'react-hooks/no-deriving-state-in-effects': 'error', // validates against deriving values from state in an effect
  // 'react-hooks/preserve-manual-memoization': 'error', // validates that existing manual memoization is preserved by the compiler
  // 'react-hooks/purity': 'error', // validates that components/hooks are pure
  // 'react-hooks/refs': 'error', // validates correct usage of refs, not reading/writing during render
  // 'react-hooks/rule-suppression': 'off', // validates against suppression of other rules
  // 'react-hooks/set-state-in-effect': 'error', // validates against calling setState synchronously in an effect
  // 'react-hooks/set-state-in-render': 'error', // validates against setting state during render
  // 'react-hooks/static-components': 'error', // validates that components are static, not recreated every render
  // 'react-hooks/syntax': 'off', // validates against invalid syntax
  // 'react-hooks/todo': 'off', // unimplemented features
  // 'react-hooks/unsupported-syntax': 'error', // validates against syntax that React Compiler does not plan to support
  // 'react-hooks/use-memo': 'error', // validates usage of the useMemo() hook against common mistakes
  // 'react-hooks/void-use-memo': 'error', // validates that useMemos always return a value and that the result is used
};
