import path from 'node:path';

let directory = import.meta.dirname;

export const PACKAGE_PATH = path.resolve(directory, '..');

export const CARSON_CONFIG_DIRECTORY = '.carson';
export const PROJECT_CONFIG_FILENAME = 'project.json';
export const WORKSPACE_CONFIG_FILENAME = 'workspace.json';
export const PROJECT_SNAPSHOT_FILENAME = 'project.snapshot';
export const WORKSPACE_SNAPSHOT_FILENAME = 'workspace.snapshot';
export const TEMPLATES_PATH = 'templates';
export const TEMPLATE_CONFIG_FILENAME = 'config.json';
export const PACKAGE_JSON_FILENAME = 'package.json';
