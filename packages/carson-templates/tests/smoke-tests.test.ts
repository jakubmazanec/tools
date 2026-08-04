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

import {DEPENDENCY_VERSIONS, LINTER_CONFIG_PACKAGE_NAME} from '../source/main.js';
import {LINTER_CONFIG_PACKAGE_PATH, NPMRC_PATH, ONLY_ONE_STAR_REGEXP} from './constants.js';
import {observableToPromise} from './observableToPromise.js';
import {packageNameToDirectory} from './packageNameToDirectory.js';

vitest.setConfig({testTimeout: 3_600_000});

describe.each([
  {
    label: '#1',
    workspaceTemplateId: '@jakubmazanec/carson-templates:workspace',
    projectTemplateIds: [
      '@jakubmazanec/carson-templates:projects/app',
      '@jakubmazanec/carson-templates:projects/library',
      '@jakubmazanec/carson-templates:projects/react-library',
    ],
  },
])('Smoke tests $label', ({label, workspaceTemplateId, projectTemplateIds}) => {
  test('it works', async () => {
    let workspacePath = await createTempDirectory('carson-templates-test-');
    let errors: unknown[] = [];

    // First we create a new workspace.
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

    // Then we create all projects; be aware that if projectTemplateIds.length is greater than 1, workspace template must be for multi-project workspace.
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

    // Try updating the workspace.
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

    // Try installing dependencies.
    try {
      await execa('git', ['init'], {cwd: workspacePath});

      if (await fs.pathExists(NPMRC_PATH)) {
        await fs.copyFile(NPMRC_PATH, path.join(workspacePath, '.npmrc'));
      }

      let packageJson = (await fs.readJson(
        path.join(workspacePath, 'package.json'),
      )) as WorkspacePackageJson<true>;

      // We need to override the ESLint version, because when updating to its newer major version, the old ESLint config package is still installed with previous major version in its peer dependencies, which leads to failed `npm install`. We also need to override the ESLint config package with the local workspace copy, because its new major version isn't published on the registry yet.
      packageJson.overrides = {
        eslint: DEPENDENCY_VERSIONS.eslint!,
        [LINTER_CONFIG_PACKAGE_NAME]: `file:${LINTER_CONFIG_PACKAGE_PATH}`,
      };

      await fs.writeJson(path.join(workspacePath, 'package.json'), packageJson);

      // We disable scripts, so npm doesn't try to run Carson.
      await execa('npm', ['install', '--ignore-scripts'], {cwd: workspacePath});
    } catch (error) {
      errors.push(error);
    }

    // Try updating the workspace.
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

    // Try building everything.
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
