import {
  runCreateProject,
  runCreateWorkspace,
  runUpdateWorkspace,
  Workspace,
  type WorkspacePackageJson,
} from '@jakubmazanec/carson';
import {createTempDirectory} from '@jakubmazanec/fs-utils';
import {execa} from 'execa';
import fs from 'fs-extra';
import path from 'node:path';
import {describe, expect, test, vitest} from 'vitest';

import {DEPENDENCY_VERSIONS} from '../source/main.js';
import {NPMRC_PATH, ONLY_ONE_STAR_REGEXP} from './constants.js';
import {observableToPromise} from './observableToPromise.js';
import {packageNameToDirectory} from './packageNameToDirectory.js';

vitest.setConfig({testTimeout: 3_600_000});

describe.each([
  {
    label: '#1',
    workspaceTemplateId: '@jakubmazanec/carson-templates:workspace',
    projectTemplateIds: [
      '@jakubmazanec/carson-templates:projects/library',
      '@jakubmazanec/carson-templates:projects/app',
    ],
  },
])('Smoke tests $label', ({label, workspaceTemplateId, projectTemplateIds}) => {
  test('it works', async () => {
    let workspacePath = await createTempDirectory('carson-templates-test-');
    let errors: unknown[] = [];

    // first we create a new workspace
    try {
      await observableToPromise(
        runCreateWorkspace({
          args: {
            command: 'create workspace',
            errors: [],
            options: {
              path: workspacePath,
              template: workspaceTemplateId,
            },
            parameters: null,
            unknownOptions: null,
            rest: [],
          },
          templateId: workspaceTemplateId,
          workspacePath,
        }),
      );
    } catch (error: unknown) {
      errors.push(error);
    }

    let workspace = await Workspace.read(workspacePath);

    // then we create all projects; be aware that if projectTemplateIds.length is greater than 1, workspace template must be for multi-project workspace
    for (let [index, projectTemplateId] of projectTemplateIds.entries()) {
      let projectName = `project-${index}`;
      let possiblePaths =
        workspace.projectGlobs ?
          workspace.projectGlobs
            .filter((projectGlob) => ONLY_ONE_STAR_REGEXP.test(projectGlob))
            .map((projectGlob) => projectGlob.replace(/\*/, packageNameToDirectory(projectName)))
            .map((projectGlob) => path.join(workspace.path, projectGlob))
        : [workspace.path];

      let projectPath = possiblePaths[0];

      if (!projectPath) {
        errors.push(
          new Error(`Cannot create path for project using template "${projectTemplateId}"!`),
        );

        break;
      }

      try {
        await observableToPromise(
          runCreateProject({
            args: {
              command: 'create project',
              errors: [],
              options: {
                name: projectName,
                path: workspacePath,
                template: projectTemplateId,
              },
              parameters: null,
              unknownOptions: null,
              rest: [],
            },
            templateId: projectTemplateId,
            projectPath,
            projectName,
            workspace,
          }),
        );
      } catch (error: unknown) {
        errors.push(error);
      }
    }

    // try updating the workspace
    try {
      await observableToPromise(
        runUpdateWorkspace({
          args: {
            command: 'update workspace',
            errors: [],
            options: {
              path: workspacePath,
            },
            parameters: null,
            unknownOptions: null,
            rest: [],
          },
          workspace,
        }),
      );
    } catch (error: unknown) {
      errors.push(error);
    }

    // try installing dependencies
    try {
      await execa('git', ['init'], {cwd: workspacePath});

      if (await fs.pathExists(NPMRC_PATH)) {
        await fs.copyFile(NPMRC_PATH, path.join(workspacePath, '.npmrc'));
      }

      // we need to override the ESLint version, because when updating to its newer major version, the old ESLint config package is still installed with previous major version in its peer dependencies, which leads to failed `npm install`
      let packageJson = (await fs.readJson(
        path.join(workspacePath, 'package.json'),
      )) as WorkspacePackageJson<true>;

      packageJson.overrides = {
        eslint: DEPENDENCY_VERSIONS.eslint!,
      };

      await fs.writeJson(path.join(workspacePath, 'package.json'), packageJson);

      // we disable scripts, so npm doesn't try to run Carson
      await execa('npm', ['install', '--ignore-scripts'], {cwd: workspacePath});
    } catch (error) {
      errors.push(error);
    }

    // try updating the workspace
    try {
      await observableToPromise(
        runUpdateWorkspace({
          args: {
            command: 'update workspace',
            errors: [],
            options: {
              path: workspacePath,
            },
            parameters: null,
            unknownOptions: null,
            rest: [],
          },
          workspace,
        }),
      );
    } catch (error: unknown) {
      errors.push(error);
    }

    // try building everything
    vitest.stubEnv('VITEST', '');

    try {
      await execa('npm', ['run', 'build'], {cwd: workspacePath});
    } catch (error) {
      errors.push(error);
    }

    vitest.unstubAllEnvs();

    await fs.emptyDir(workspacePath);
    await fs.rmdir(workspacePath);

    if (errors.length) {
      console.log('errors', errors);
    }

    expect(errors).toHaveLength(0);
  });
});
