import type eslint from 'eslint';

export const commentLengthRules: eslint.Linter.Config['rules'] = {
  // eslint-plugin-comment-length rules
  'comment-length/limit-multi-line-comments': ['error', {maxLength: 100}], // enforce a maximum line length for multi-line comments
  'comment-length/limit-single-line-comments': ['error', {maxLength: 100}], // enforce a maximum line length for single-line comments
  'comment-length/limit-tagged-template-literal-comments': 'off', // enforce a maximum line length for comments inside tagged template literals
};
