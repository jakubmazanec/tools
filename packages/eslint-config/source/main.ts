import type eslint from 'eslint';

let config: eslint.Linter.Config = {
  extends: [require.resolve('./presets/base.js')],

  reportUnusedDisableDirectives: true,

  // We can't define rules here otherwise they override the ones in the extending configs above. This is bad for actual `overrides`!
  rules: {},
};

export = config;
