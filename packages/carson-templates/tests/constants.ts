import path from 'node:path';

let directory = import.meta.dirname;

export const TEMPLATES_PATH = path.resolve(directory, '../templates');
export const NPMRC_PATH = path.resolve(directory, '../../../.npmrc');

export const ONLY_ONE_STAR_REGEXP = /^(?!(.*?\*){2,}|.*? |\*$).*?\*.*$/;
