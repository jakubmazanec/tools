/**
 * DO NOT EDIT!
 * This file was autogenerated by Carson.
 * Changes may cause incorrect behavior and will be lost when the file is regenerated.
 *
 * Run `npx carson update workspace` to regenerate.
 */

import _ from 'lodash';
import {defineConfig} from 'vitest/config';

export default defineConfig(
  _.merge(
    {
      test: {
        environment: 'happy-dom',
        setupFiles: ['tests/setup.ts'],
        coverage: {
          include: ['source/**'],
        },
      },
    },
    {},
  ),
);
