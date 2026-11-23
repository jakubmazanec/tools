import {type Workspace} from '@jakubmazanec/carson';
import fs from 'fs-extra';
import path from 'node:path';
import {describe, expect, test} from 'vitest';

import {DEPENDENCY_VERSIONS, getDependencies} from '../source/main.js';

describe(getDependencies, () => {
  test('node and npm versions are the ones required by the templates package', async () => {
    let {engines} = (await fs.readJson(path.join(import.meta.dirname, '../package.json'))) as {
      engines: Record<string, string>;
    };

    expect({node: DEPENDENCY_VERSIONS.node, npm: DEPENDENCY_VERSIONS.npm}).toEqual(engines);
  });

  test('installed node version lower than the template one is raised even within the same major', () => {
    let workspace = {
      projects: [],
      allDependencies: [{name: 'node', exactVersions: ['26.0.0']}],
    } as unknown as Workspace;

    expect(getDependencies(['node'], workspace).node).toBe(DEPENDENCY_VERSIONS.node);
  });
});
