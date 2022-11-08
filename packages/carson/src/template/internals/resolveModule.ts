import {createRequire} from 'node:module';
import path from 'node:path';

export async function resolveModule(moduleId: string) {
  let require = createRequire(import.meta.url);
  let modulePath = path.dirname(require.resolve(`${moduleId}/package.json`));

  return modulePath;
}
