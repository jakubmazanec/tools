import path from 'node:path';
import {describe, expect, test} from 'vitest';

import {Workspace, WorkspaceDependencies} from '../src/workspace.js';
import {TEST_WORKSPACES_PATH} from './constants.js';

describe('WorkspaceDependencies', () => {
  describe('new WorkspaceDependencies()', () => {
    test('works', async () => {
      let workspace = await Workspace.read(TEST_WORKSPACES_PATH);
      let workspaceDependencies = new WorkspaceDependencies(
        {name: '@jakubmazanec/foo', versions: ['1.0.0'], exactVersions: ['1.0.0'], projects: []},
        workspace,
      );

      expect(workspaceDependencies.workspace).toBe(workspace);
      expect([...workspaceDependencies]).toEqual([
        {
          name: '@jakubmazanec/foo',
          versions: ['1.0.0'],
          exactVersions: ['1.0.0'],
          projects: [],
        },
      ]);
    });
  });

  describe('.fromWorkspace()', () => {
    test('correctly reads workspace dependencies', async () => {
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
      let workspaceDependencies = WorkspaceDependencies.fromWorkspace(workspace);

      expect([...workspaceDependencies]).toEqual([
        {
          name: 'react',
          versions: ['17.0.2', '^17.0.2'],
          exactVersions: ['17.0.2'],
          projects: [
            {name: '@jakubmazanec/bar', version: '17.0.2', exactVersion: '17.0.2'},
            {name: '@jakubmazanec/foo', version: '^17.0.2', exactVersion: '17.0.2'},
          ],
        },
        {
          name: '@jakubmazanec/bar',
          versions: ['^1.0.0'],
          exactVersions: ['1.0.0'],
          projects: [{name: '@jakubmazanec/foo', version: '^1.0.0', exactVersion: '1.0.0'}],
        },
      ]);
    });

    test('correctly reads workspace development dependencies', async () => {
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
      let workspaceDependencies = WorkspaceDependencies.fromWorkspace(workspace, {
        includeOnlyDevDependencies: true,
      });

      expect([...workspaceDependencies]).toEqual([
        {
          name: '@types/react',
          versions: ['17.0.43', '^17.0.43'],
          exactVersions: ['17.0.43'],
          projects: [
            {name: '@jakubmazanec/bar', version: '17.0.43', exactVersion: '17.0.43'},
            {name: '@jakubmazanec/foo', version: '^17.0.43', exactVersion: '17.0.43'},
          ],
        },
      ]);
    });

    test('correctly reads all workspace dependencies', async () => {
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
      let workspaceDependencies = WorkspaceDependencies.fromWorkspace(workspace, {
        includeDevDependencies: true,
      });

      expect([...workspaceDependencies]).toEqual([
        {
          name: 'react',
          versions: ['17.0.2', '^17.0.2'],
          exactVersions: ['17.0.2'],
          projects: [
            {
              exactVersion: '17.0.2',
              name: '@jakubmazanec/bar',
              version: '17.0.2',
            },
            {
              exactVersion: '17.0.2',
              name: '@jakubmazanec/foo',
              version: '^17.0.2',
            },
          ],
        },
        {
          name: '@types/react',
          versions: ['17.0.43', '^17.0.43'],
          exactVersions: ['17.0.43'],
          projects: [
            {
              exactVersion: '17.0.43',
              name: '@jakubmazanec/bar',
              version: '17.0.43',
            },
            {
              exactVersion: '17.0.43',
              name: '@jakubmazanec/foo',
              version: '^17.0.43',
            },
          ],
        },
        {
          name: '@jakubmazanec/bar',
          versions: ['^1.0.0'],
          exactVersions: ['1.0.0'],
          projects: [
            {
              exactVersion: '1.0.0',
              name: '@jakubmazanec/foo',
              version: '^1.0.0',
            },
          ],
        },
      ]);
    });
  });

  describe('.getVersions()', () => {
    test('correctly return object with versions of dependencies', async () => {
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
      let workspaceDependencies = WorkspaceDependencies.fromWorkspace(workspace, {
        includeDevDependencies: true,
      });

      expect(workspaceDependencies.getVersions()).toEqual({
        react: ['17.0.2', '^17.0.2'],
        '@jakubmazanec/bar': ['^1.0.0'],
        '@types/react': ['17.0.43', '^17.0.43'],
      });
    });

    test('correctly return object with exact versions of dependencies', async () => {
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
      let workspaceDependencies = WorkspaceDependencies.fromWorkspace(workspace, {
        includeDevDependencies: true,
      });

      expect(workspaceDependencies.getVersions({useExactVersions: true})).toEqual({
        react: ['17.0.2'],
        '@jakubmazanec/bar': ['1.0.0'],
        '@types/react': ['17.0.43'],
      });
    });
  });
});
