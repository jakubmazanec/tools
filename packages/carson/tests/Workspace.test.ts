import path from 'node:path';
import {describe, expect, test, vitest} from 'vitest';

import {ProjectError} from '../source/workspace/ProjectError.js';
import {WorkspaceError} from '../source/workspace/WorkspaceError.js';
import {type WorkspaceOptionsProject} from '../source/workspace/WorkspaceOptionsProject.js';
import {TEST_WORKSPACES_PATH} from './constants.js';

// we need to mock `isRootPath` so it considers directory with test workspaces as the file system root
vitest.mock('@jakubmazanec/fs-utils', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@jakubmazanec/fs-utils')>();

  return {
    ...originalModule,
    isRootPath: vitest.fn().mockImplementation((value) => value === TEST_WORKSPACES_PATH),
  };
});

describe('Workspace', () => {
  describe('single-project', () => {
    test('correctly creates workspace with no project', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = new Workspace({
        path: TEST_WORKSPACES_PATH,
        isMultiProject: false,
      });

      expect(workspace.path).toBe(TEST_WORKSPACES_PATH);
      expect(workspace.isMultiProject).toBeFalsy();
      expect(workspace.projectGlobs).toBeNull();
      expect(
        workspace.projects.map(({workspace, ...rest}) => ({
          ...rest,
        })),
      ).toEqual([]);
      expect(workspace.config).toEqual({});
      expect(workspace.packageJson).toBeNull();
      expect([...workspace.allDependencies]).toEqual([]);
    });

    test('correctly creates workspace with one project with dependencies', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = new Workspace({
        path: TEST_WORKSPACES_PATH,
        isMultiProject: false,
        projects: [
          {
            path: TEST_WORKSPACES_PATH,
            packageJson: {
              name: '@jakubmazanec/foo',
              dependencies: {
                '@jakubmazanec/bar': '^1.0.0',
              },
            },
          },
        ],
      });

      expect(workspace.path).toBe(TEST_WORKSPACES_PATH);
      expect(workspace.isMultiProject).toBeFalsy();
      expect(workspace.projectGlobs).toBeNull();
      expect(
        workspace.projects.map(({workspace, ...rest}) => ({
          ...rest,
        })),
      ).toEqual([
        {
          name: '@jakubmazanec/foo',
          path: TEST_WORKSPACES_PATH,
          relativePath: '',
          config: {},
          packageJson: {
            name: '@jakubmazanec/foo',
            dependencies: {
              '@jakubmazanec/bar': '^1.0.0',
            },
          },
          errors: [],
        },
      ]);
      expect(workspace.config).toEqual({});
      expect(workspace.packageJson).toBeNull();
      expect([...workspace.allDependencies]).toEqual([
        {
          exactVersions: ['1.0.0'],
          name: '@jakubmazanec/bar',
          projects: [{name: '@jakubmazanec/foo', exactVersion: '1.0.0', version: '^1.0.0'}],
          versions: ['^1.0.0'],
        },
      ]);
    });

    test("correctly throws when paths don't match", async () => {
      let {Workspace} = await import('../source/workspace.js');

      expect(
        () =>
          new Workspace({
            path: TEST_WORKSPACES_PATH,
            isMultiProject: false,
            projects: [{path: path.join(TEST_WORKSPACES_PATH, 'wrong-path')}],
          }),
      ).toThrow(new WorkspaceError('PATH_MISMATCH'));
    });
  });

  describe('multi-project', () => {
    test('correctly creates workspace with no projects', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = new Workspace({
        path: TEST_WORKSPACES_PATH,
      });

      expect(workspace.path).toBe(TEST_WORKSPACES_PATH);
      expect(workspace.isMultiProject).toBeTruthy();
      expect(workspace.projectGlobs).toEqual([]);
      expect(workspace.projects).toEqual([]);
      expect(workspace.config).toEqual({});
      expect(workspace.packageJson).toEqual({});
      expect([...workspace.allDependencies]).toEqual([]);
    });

    test('correctly creates workspace with no projects but with root package.json', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = new Workspace({
        path: TEST_WORKSPACES_PATH,
        packageJson: {
          workspaces: ['./packages/*'],
        },
      });

      expect(workspace.path).toBe(TEST_WORKSPACES_PATH);
      expect(workspace.isMultiProject).toBeTruthy();
      expect(workspace.projectGlobs).toEqual(['./packages/*']);
      expect(workspace.projects).toEqual([]);
      expect(workspace.config).toEqual({});
      expect(workspace.packageJson).toEqual({workspaces: ['./packages/*']});
      expect([...workspace.allDependencies]).toEqual([]);
    });

    test('correctly creates workspace with one project with dependencies', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = new Workspace({
        path: TEST_WORKSPACES_PATH,
        projects: [
          {
            path: path.join(TEST_WORKSPACES_PATH, 'packages', 'foo'),
            packageJson: {
              name: '@jakubmazanec/foo',
              dependencies: {
                '@jakubmazanec/bar': '^1.0.0',
              },
            },
          },
        ],
      });

      expect(workspace.path).toBe(TEST_WORKSPACES_PATH);
      expect(workspace.isMultiProject).toBeTruthy();
      expect(workspace.projectGlobs).toEqual([]);
      expect(
        workspace.projects.map(({workspace, ...rest}) => ({
          ...rest,
        })),
      ).toEqual([
        {
          name: '@jakubmazanec/foo',
          path: path.join(TEST_WORKSPACES_PATH, 'packages', 'foo'),
          relativePath: 'packages/foo',
          config: {},
          packageJson: {
            name: '@jakubmazanec/foo',
            dependencies: {
              '@jakubmazanec/bar': '^1.0.0',
            },
          },
          errors: [],
        },
      ]);
      expect(workspace.config).toEqual({});
      expect(workspace.packageJson).toEqual({});
      expect([...workspace.allDependencies]).toEqual([
        {
          exactVersions: ['1.0.0'],
          name: '@jakubmazanec/bar',
          projects: [{name: '@jakubmazanec/foo', exactVersion: '1.0.0', version: '^1.0.0'}],
          versions: ['^1.0.0'],
        },
      ]);
    });
  });

  describe('.read()', () => {
    test.each([
      {
        workspacePath: 'single-project/bad',
        isMultiProject: false,
        projectGlobs: null,
        projects: [
          {
            name: undefined,
            path: '.',
            relativePath: '',
            config: {},
            packageJson: {},
            errors: [
              new ProjectError('INVALID_PACKAGE_JSON', {
                messageParameters: [
                  path.join(TEST_WORKSPACES_PATH, 'single-project/bad/package.json'),
                ],
                data: {
                  path: path.join(TEST_WORKSPACES_PATH, 'single-project/bad/package.json'),
                  zodIssues: [
                    {
                      code: 'invalid_type',
                      expected: 'string',
                      message: 'Expected string, received object',
                      path: ['name'],
                      received: 'object',
                    },
                  ],
                },
              }),
            ],
          },
        ],
        config: {},
        packageJson: null,
        allDependencies: [],
        errors: [],
      },
      {
        workspacePath: 'single-project/basic',
        isMultiProject: false,
        projectGlobs: null,
        projects: [
          {
            name: '@jakubmazanec/foo',
            path: '.',
            relativePath: '',
            config: {},
            packageJson: {name: '@jakubmazanec/foo'},
            errors: [],
          },
        ],
        config: {},
        packageJson: null,
        allDependencies: [],
        errors: [],
      },
      {
        workspacePath: 'single-project/with-bad-configs',
        isMultiProject: false,
        projectGlobs: null,
        projects: [
          {
            name: '@jakubmazanec/foo',
            path: '.',
            relativePath: '',
            config: {},
            packageJson: {name: '@jakubmazanec/foo'},
            errors: [
              new ProjectError('INVALID_PROJECT_CONFIG', {
                messageParameters: [
                  path.join(
                    TEST_WORKSPACES_PATH,
                    'single-project/with-bad-configs/.carson/project.json',
                  ),
                ],
                data: {
                  path: path.join(
                    TEST_WORKSPACES_PATH,
                    'single-project/with-bad-configs/.carson/project.json',
                  ),
                  zodIssues: [
                    {
                      code: 'invalid_type',
                      expected: 'string',
                      message: 'Expected string, received null',
                      path: ['template'],
                      received: 'null',
                    },
                  ],
                },
              }),
            ],
          },
        ],
        config: {},
        packageJson: null,
        allDependencies: [],
        errors: [
          new WorkspaceError('INVALID_WORKSPACE_CONFIG', {
            messageParameters: [
              path.join(
                TEST_WORKSPACES_PATH,
                'single-project/with-bad-configs/.carson/workspace.json',
              ),
            ],
            data: {
              path: path.join(
                TEST_WORKSPACES_PATH,
                'single-project/with-bad-configs/.carson/workspace.json',
              ),
              zodIssues: [
                {
                  code: 'invalid_type',
                  expected: 'string',
                  message: 'Expected string, received null',
                  path: ['template'],
                  received: 'null',
                },
              ],
            },
          }),
        ],
      },
      {
        workspacePath: 'single-project/with-dependencies',
        isMultiProject: false,
        projectGlobs: null,
        projects: [
          {
            name: '@jakubmazanec/foo',
            path: '.',
            relativePath: '',
            config: {
              template: '@jakubmazanec/qux:project',
            },
            packageJson: {
              name: '@jakubmazanec/foo',
              dependencies: {
                asd: '1.0.0 - 2.9999.9999',
                bar: '<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0',
                baz: '>1.0.2 <=2.3.4',
                boo: '^2.0.1',
                foo: 'http://asdf.com/asdf.tar.gz',
                qux: 'file:../dyl',
                til: 'latest',
              },
              engines: {
                node: '^24.0.0',
              },
            },
            errors: [],
          },
        ],
        config: {},
        packageJson: null,
        allDependencies: [
          {
            exactVersions: ['1.0.0'],
            name: 'asd',
            projects: [
              {
                exactVersion: '1.0.0',
                name: '@jakubmazanec/foo',
                version: '1.0.0 - 2.9999.9999',
              },
            ],
            versions: ['1.0.0 - 2.9999.9999'],
          },
          {
            exactVersions: ['0.0.0'],
            name: 'bar',
            projects: [
              {
                exactVersion: '0.0.0',
                name: '@jakubmazanec/foo',
                version: '<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0',
              },
            ],
            versions: ['<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0'],
          },
          {
            exactVersions: ['1.0.3'],
            name: 'baz',
            projects: [
              {
                exactVersion: '1.0.3',
                name: '@jakubmazanec/foo',
                version: '>1.0.2 <=2.3.4',
              },
            ],
            versions: ['>1.0.2 <=2.3.4'],
          },
          {
            exactVersions: ['2.0.1'],
            name: 'boo',
            projects: [
              {
                exactVersion: '2.0.1',
                name: '@jakubmazanec/foo',
                version: '^2.0.1',
              },
            ],
            versions: ['^2.0.1'],
          },
          {
            exactVersions: ['http://asdf.com/asdf.tar.gz'],
            name: 'foo',
            projects: [
              {
                exactVersion: 'http://asdf.com/asdf.tar.gz',
                name: '@jakubmazanec/foo',
                version: 'http://asdf.com/asdf.tar.gz',
              },
            ],
            versions: ['http://asdf.com/asdf.tar.gz'],
          },
          {
            exactVersions: ['file:../dyl'],
            name: 'qux',
            projects: [
              {
                exactVersion: 'file:../dyl',
                name: '@jakubmazanec/foo',
                version: 'file:../dyl',
              },
            ],
            versions: ['file:../dyl'],
          },
          {
            exactVersions: ['latest'],
            name: 'til',
            projects: [
              {
                exactVersion: 'latest',
                name: '@jakubmazanec/foo',
                version: 'latest',
              },
            ],
            versions: ['latest'],
          },
        ],
        errors: [],
      },
      {
        workspacePath: 'single-project/with-no-package-json',
        isMultiProject: false,
        projectGlobs: null,
        projects: [],
        config: {
          template: '@jakubmazanec/qux:workspace',
        },
        packageJson: null,
        allDependencies: [],
        errors: [],
      },
      {
        workspacePath: 'multi-project/basic',
        isMultiProject: true,
        projectGlobs: ['./packages/*'],
        projects: [],
        config: {},
        packageJson: {
          workspaces: ['./packages/*'],
        },
        allDependencies: [],
        errors: [],
      },
      {
        workspacePath: 'multi-project/with-bad-project',
        isMultiProject: true,
        projectGlobs: ['./packages/*'],
        projects: [
          {
            name: undefined,
            path: 'packages/foo',
            relativePath: 'packages/foo',
            config: {},
            packageJson: {},
            errors: [
              new ProjectError('INVALID_PACKAGE_JSON', {
                messageParameters: [
                  path.join(
                    TEST_WORKSPACES_PATH,
                    'multi-project/with-bad-project/packages/foo/package.json',
                  ),
                ],
                data: {
                  path: path.join(
                    TEST_WORKSPACES_PATH,
                    'multi-project/with-bad-project/packages/foo/package.json',
                  ),
                  zodIssues: [
                    {
                      code: 'invalid_type',
                      expected: 'string',
                      message: 'Expected string, received object',
                      path: ['name'],
                      received: 'object',
                    },
                  ],
                },
              }),
            ],
          },
        ],
        config: {},
        packageJson: {
          workspaces: ['./packages/*'],
        },
        allDependencies: [],
        errors: [],
      },
      {
        workspacePath: 'multi-project/with-bad-configs',
        isMultiProject: true,
        projectGlobs: ['./packages/*'],
        projects: [
          {
            name: '@jakubmazanec/foo',
            path: 'packages/foo',
            relativePath: 'packages/foo',
            config: {},
            packageJson: {
              name: '@jakubmazanec/foo',
            },
            errors: [
              new ProjectError('INVALID_PROJECT_CONFIG', {
                messageParameters: [
                  path.join(
                    TEST_WORKSPACES_PATH,
                    'multi-project/with-bad-configs/packages/foo/.carson/project.json',
                  ),
                ],
                data: {
                  path: path.join(
                    TEST_WORKSPACES_PATH,
                    'multi-project/with-bad-configs/packages/foo/.carson/project.json',
                  ),
                  zodIssues: [
                    {
                      code: 'invalid_type',
                      expected: 'string',
                      message: 'Expected string, received null',
                      path: ['template'],
                      received: 'null',
                    },
                  ],
                },
              }),
            ],
          },
        ],
        config: {},
        packageJson: {
          workspaces: ['./packages/*'],
        },
        allDependencies: [],
        errors: [
          new WorkspaceError('INVALID_WORKSPACE_CONFIG', {
            messageParameters: [
              path.join(
                TEST_WORKSPACES_PATH,
                'multi-project/with-bad-configs/.carson/workspace.json',
              ),
            ],
            data: {
              path: path.join(
                TEST_WORKSPACES_PATH,
                'multi-project/with-bad-configs/.carson/workspace.json',
              ),
              zodIssues: [
                {
                  code: 'invalid_type',
                  expected: 'string',
                  message: 'Expected string, received null',
                  path: ['template'],
                  received: 'null',
                },
              ],
            },
          }),
        ],
      },
      {
        workspacePath: 'multi-project/with-dependencies',
        isMultiProject: true,
        projectGlobs: ['./packages/*'],
        projects: [
          {
            name: '@jakubmazanec/bar',
            path: 'packages/bar',
            relativePath: 'packages/bar',
            config: {
              template: '@jakubmazanec/qux:project',
            },
            packageJson: {
              dependencies: {
                react: '17.0.2',
              },
              devDependencies: {
                '@types/react': '17.0.43',
              },
              name: '@jakubmazanec/bar',
              version: '1.0.0',
              engines: {
                node: '^24.0.0',
              },
            },
            errors: [],
          },
          {
            name: '@jakubmazanec/foo',
            path: 'packages/foo',
            relativePath: 'packages/foo',
            config: {
              template: '@jakubmazanec/qux:project',
            },
            packageJson: {
              dependencies: {
                '@jakubmazanec/bar': '^1.0.0',
                react: '^17.0.2',
              },
              devDependencies: {
                '@types/react': '^17.0.43',
              },
              name: '@jakubmazanec/foo',
              version: '1.0.0',
              engines: {
                node: '^24.0.0',
              },
            },
            errors: [],
          },
        ],
        config: {
          template: '@jakubmazanec/qux:workspace',
        },
        packageJson: {
          workspaces: ['./packages/*'],
          devDependencies: {
            'del-cli': '^4.0.1',
          },
          engines: {
            node: '^24.0.0',
          },
        },
        allDependencies: [
          {
            exactVersions: ['4.0.1'],
            name: 'del-cli',
            projects: [],
            versions: ['^4.0.1'],
          },
          {
            name: 'node',
            versions: ['^24.0.0'],
            exactVersions: ['24.0.0'],
            projects: [
              {
                exactVersion: '24.0.0',
                name: '@jakubmazanec/bar',
                version: '^24.0.0',
              },
              {
                exactVersion: '24.0.0',
                name: '@jakubmazanec/foo',
                version: '^24.0.0',
              },
            ],
          },
          {
            exactVersions: ['17.0.2'],
            name: 'react',
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
            versions: ['17.0.2', '^17.0.2'],
          },
          {
            exactVersions: ['17.0.43'],
            name: '@types/react',
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
            versions: ['17.0.43', '^17.0.43'],
          },
          {
            exactVersions: ['1.0.0'],
            name: '@jakubmazanec/bar',
            projects: [
              {
                exactVersion: '1.0.0',
                name: '@jakubmazanec/foo',
                version: '^1.0.0',
              },
            ],
            versions: ['^1.0.0'],
          },
        ],
        errors: [],
      },
      {
        workspacePath: 'multi-project/with-no-root-package-json',
        isMultiProject: true,
        projectGlobs: ['./packages/*'],
        projects: [
          {
            name: '@jakubmazanec/bar',
            path: 'packages/bar',
            relativePath: 'packages/bar',
            config: {
              template: '@jakubmazanec/qux:project',
            },
            packageJson: {
              name: '@jakubmazanec/bar',
              version: '1.0.0',
            },
            errors: [],
          },
          {
            name: '@jakubmazanec/foo',
            path: 'packages/foo',
            relativePath: 'packages/foo',
            config: {
              template: '@jakubmazanec/qux:project',
            },
            packageJson: {
              name: '@jakubmazanec/foo',
              version: '1.0.0',
            },
            errors: [],
          },
        ],
        config: {
          template: '@jakubmazanec/qux:workspace',
          projects: ['./packages/*'],
        },
        packageJson: {},
        allDependencies: [],
        errors: [],
      },
    ])(
      'correctly handles workspace "$workspacePath"',
      async ({
        workspacePath,
        isMultiProject,
        projectGlobs,
        projects,
        config,
        packageJson,
        allDependencies,
        errors,
      }) => {
        let {Workspace} = await import('../source/workspace.js');
        let workspace = await Workspace.read(path.join(TEST_WORKSPACES_PATH, workspacePath));

        let projectsWithCorrectPath = projects.map((project: WorkspaceOptionsProject) => ({
          ...project,
          path: path.join(TEST_WORKSPACES_PATH, workspacePath, project.path),
        }));

        expect(workspace.path).toBe(path.join(TEST_WORKSPACES_PATH, workspacePath));
        expect(workspace.isMultiProject).toBe(isMultiProject);
        expect(workspace.projectGlobs).toEqual(projectGlobs);
        expect(
          workspace.projects.map(({workspace, ...rest}) => ({
            ...rest,
          })),
        ).toEqual(projectsWithCorrectPath);
        expect(workspace.config).toEqual(config);
        expect(workspace.packageJson).toEqual(packageJson);
        expect([...workspace.allDependencies]).toEqual(allDependencies);
        expect(workspace.errors).toEqual(errors);
      },
    );

    test('correctly handles non-existent workspace', async () => {
      let {Workspace} = await import('../source/workspace.js');

      await expect(
        Workspace.read(path.join(TEST_WORKSPACES_PATH, 'this-directory-should-not-exist')),
      ).rejects.toEqual(
        new WorkspaceError('NO_SUCH_WORKSPACE_PATH', {
          messageParameters: [path.join(TEST_WORKSPACES_PATH, 'this-directory-should-not-exist')],
          data: {
            path: path.join(TEST_WORKSPACES_PATH, 'this-directory-should-not-exist'),
          },
        }),
      );
    });
  });

  describe('.findAndRead()', () => {
    test('returns undefined when no workspace is found', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.findAndRead(
        path.join(TEST_WORKSPACES_PATH, 'this-directory-should-not-exist'),
      );

      expect(workspace).toBeUndefined();
    });

    test('correctly finds nearest single-project workspace', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.findAndRead(
        path.join(TEST_WORKSPACES_PATH, 'single-project/with-source/source'),
      );

      expect(workspace?.path).toBe(path.join(TEST_WORKSPACES_PATH, 'single-project/with-source'));
    });

    test('correctly finds nearest multi-project workspace', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.findAndRead(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies/packages/foo'),
      );

      expect(workspace?.path).toBe(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );
    });

    test('correctly finds nearest multi-project workspace with no root package.json', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.findAndRead(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-no-root-package-json/packages/foo'),
      );

      expect(workspace?.path).toBe(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-no-root-package-json'),
      );
      expect(workspace?.projectGlobs).toEqual(['./packages/*']);
    });
  });

  describe('.getProject()', () => {
    test('returns correct project', async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );

      expect(workspace.getProject('@jakubmazanec/foo')?.name).toBe('@jakubmazanec/foo');
    });

    test("returns undefined when project isn't found", async () => {
      let {Workspace} = await import('../source/workspace.js');
      let workspace = await Workspace.read(
        path.join(TEST_WORKSPACES_PATH, 'multi-project/with-dependencies'),
      );

      expect(workspace.getProject('this-project-should-not-exist')).toBeUndefined();
    });
  });
});
