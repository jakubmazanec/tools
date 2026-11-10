import {type Project, type Workspace} from '@jakubmazanec/carson';
import {describe, expect, test} from 'vitest';

import {getReferences, isRustProject} from '../source/main.js';

describe('getReferences()', () => {
  test('skips Rust projects', () => {
    let app = {
      name: 'app',
      relativePath: 'apps/app',
      config: {template: '@jakubmazanec/carson-templates:projects/app'},
    };
    let core = {
      name: 'core',
      relativePath: 'packages/core',
      config: {template: '@jakubmazanec/carson-templates:projects/rust'},
    };
    let library = {
      name: 'library',
      relativePath: 'packages/library',
      config: {template: '@jakubmazanec/carson-templates:projects/library'},
    };
    let workspace = {
      projects: [app, core, library],
      allDependencies: [
        {name: 'core', projects: [app]},
        {name: 'library', projects: [app]},
      ],
    };

    expect(getReferences(workspace as unknown as Workspace, app as unknown as Project)).toEqual([
      {path: '../../packages/library'},
    ]);
  });
});

describe('isRustProject()', () => {
  test('works', () => {
    expect(
      isRustProject({
        config: {template: '@jakubmazanec/carson-templates:projects/rust'},
      } as unknown as Project),
    ).toBe(true);
    expect(
      isRustProject({
        config: {template: '@jakubmazanec/carson-templates:projects/app'},
      } as unknown as Project),
    ).toBe(false);
    expect(isRustProject({config: {}} as unknown as Project)).toBe(false);
  });
});
