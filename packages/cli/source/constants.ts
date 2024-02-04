import path from 'node:path';
import url from 'node:url';

let directory = path.dirname(url.fileURLToPath(import.meta.url));

export const PACKAGE_PATH = path.resolve(directory, '..');
export const CACHE_PATH = path.resolve(PACKAGE_PATH, 'node_modules/.cache');

export const DELIMITER = '$ ';
