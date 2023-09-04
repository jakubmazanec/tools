import path from 'node:path';
import url from 'node:url';

let directory = path.dirname(url.fileURLToPath(import.meta.url));

export const TEMPLATES_PATH = path.resolve(directory, '../templates');

export const ONLY_ONE_STAR_REGEXP = /^(?!(.*?\*){2,}|.*? |\*$).*?\*.*$/;
