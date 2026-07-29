import path from 'node:path';

let directory = import.meta.dirname;

export const TESTS_PATH = path.resolve(directory);
export const TEST_TEMPLATES_DIRECTORY_PATH = path.resolve(directory, './test-templates');
