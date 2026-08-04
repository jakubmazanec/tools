import path from 'node:path';

import {LINTER_CONFIG_PACKAGE_NAME} from '../source/main.js';
import {packageNameToDirectory} from './packageNameToDirectory.js';

let directory = import.meta.dirname;

export const TEMPLATES_PATH = path.resolve(directory, '../templates');
export const NPMRC_PATH = path.resolve(directory, '../../../.npmrc');
export const LINTER_CONFIG_PACKAGE_PATH = path.resolve(
  directory,
  '../..',
  packageNameToDirectory(LINTER_CONFIG_PACKAGE_NAME),
);

export const ONLY_ONE_STAR_REGEXP = /^(?!(.*?\*){2,}|.*? |\*$).*?\*.*$/;
