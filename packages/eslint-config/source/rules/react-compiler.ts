import type eslint from 'eslint';

export const reactCompilerRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-react-compiler rules
  'react-compiler/react-compiler': 'error',
};
