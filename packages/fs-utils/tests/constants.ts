import path from 'node:path';

let directory = import.meta.dirname;

export const TESTS_PATH = path.resolve(directory);
export const PROJECT_PATH = path.resolve(directory, '..');
export const TEST_FILES_PATH = path.resolve(directory, './test-files');
