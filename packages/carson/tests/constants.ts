import path from 'node:path';
import url from 'node:url';

let directory = path.dirname(url.fileURLToPath(import.meta.url));

export const TESTS_PATH = path.resolve(directory);
export const TEST_WORKSPACES_PATH = path.resolve(directory, './test-workspaces');
export const TEST_FILES_PATH = path.resolve(directory, './test-files');
