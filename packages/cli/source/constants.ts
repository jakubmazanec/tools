import path from 'node:path';

let directory = import.meta.dirname;

export const PACKAGE_PATH = path.resolve(directory, '..');
export const CACHE_PATH = path.resolve(PACKAGE_PATH, 'node_modules/.cache');

export const DELIMITER = '$ ';
