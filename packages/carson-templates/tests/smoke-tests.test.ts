import {
  runCreateProject,
  runCreateWorkspace,
  runUpdateWorkspace,
  Workspace,
} from '@jakubmazanec/carson';
import {createTempDirectory} from '@jakubmazanec/fs-utils';
import {execa} from 'execa';
import fs from 'fs-extra';
import path from 'node:path';
import {describe, expect, test, vitest} from 'vitest';

import {NPMRC_PATH, ONLY_ONE_STAR_REGEXP} from './constants.js';
import {observableToPromise} from './observableToPromise.js';
import {packageNameToDirectory} from './packageNameToDirectory.js';

vitest.setConfig({testTimeout: 3_600_000});

describe.each([
  {
    label: '#1',
    workspaceTemplateId: '@jakubmazanec/carson-templates:workspace',
    projectTemplateIds: [
      '@jakubmazanec/carson-templates:projects/carson-templates',
      '@jakubmazanec/carson-templates:projects/changesets-changelog',
      '@jakubmazanec/carson-templates:projects/eslint-config',
      '@jakubmazanec/carson-templates:projects/library',
      '@jakubmazanec/carson-templates:projects/remix-app',
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
    try {
      await execa('npm', ['run', 'build'], {cwd: workspacePath});
    } catch (error) {
      errors.push(error);
    }

    await fs.emptyDir(workspacePath);
    await fs.rmdir(workspacePath);

    if (errors.length) {
      console.log('errors', errors);
    }

    expect(errors).toHaveLength(0);
  });
});
