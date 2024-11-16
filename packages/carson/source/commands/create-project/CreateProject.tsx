import {colors, type CommandArguments, Header, icons, useProgram} from '@jakubmazanec/cli';
import chalk from 'chalk';
import {Box, Text} from 'ink';
import path from 'node:path';
import {useEffect, useState} from 'react';

import {type Workspace} from '../../workspace.js';
import {type CommandStatus, packageNameToDirectory} from '../internals.js';
import {type createProjectCommand} from './createProjectCommand.js';
import {CreateProjectInput, type CreateProjectInputResult} from './CreateProjectInput.js';
import {runCreateProject} from './runCreateProject.js';

const ONLY_ONE_STAR_REGEXP = /^(?!(.*?\*){2,}|.*? |\*$).*?\*.*$/;

export type CreateProjectProps = {
  args: CommandArguments<typeof createProjectCommand>;
  workspace: Workspace | Workspace<false>;
};

export function CreateProject({args, workspace}: CreateProjectProps) {
  let [status, setStatus] = useState<CommandStatus>('not-started');
  let [subscription, setSubscription] = useState<ZenObservable.Subscription | null>(null);
  let [jobs, setJobs] = useState<string[]>([]);
  let [createProjectInputResult, setCreateProjectInputResult] = useState<CreateProjectInputResult>(
    () => ({
      projectName: {value: args.options.name ?? '', isComplete: !!args.options.name},
      projectPath: {value: '', isComplete: false},
      templateId: {value: args.options.template ?? '', isComplete: !!args.options.template},
    }),
  );
  let {exit} = useProgram();

  useEffect(() => {
    if (Object.entries(createProjectInputResult).every(([, result]) => result.isComplete)) {
      setStatus('in-progress');
    }
  }, [createProjectInputResult]);

  useEffect(() => {
    if (status === 'in-progress' && !subscription) {
      let newSubscription = runCreateProject({
        projectPath: createProjectInputResult.projectPath.value,
        templateId: createProjectInputResult.templateId.value,
        projectName: createProjectInputResult.projectName.value,
        workspace,
        args,
      }).subscribe({
        next(value) {
          setJobs((previousJobs) => [...previousJobs, value]);
        },
        error(error) {
          exit(error);
        },
        complete() {
          newSubscription.unsubscribe();
          setStatus('finished');
        },
      });
      setSubscription(newSubscription);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [args, createProjectInputResult, exit, status, subscription, workspace]);

  let possiblePaths: Array<{value: string; label: string}> = [];

  if (createProjectInputResult.projectName.value) {
    let destinationDirectory = packageNameToDirectory(createProjectInputResult.projectName.value);

    if (workspace.projectGlobs) {
      possiblePaths = workspace.projectGlobs
        .filter((projectGlob) => ONLY_ONE_STAR_REGEXP.test(projectGlob))
        .map((projectGlob) => projectGlob.replace(/\*/, destinationDirectory))
        .map((projectGlob) => path.join(workspace.path, projectGlob))
        .map((projectPath) => ({
          value: projectPath,
          label: path.relative(workspace.path, projectPath).replace('\\', '/'),
        }));

      if (!possiblePaths.length) {
        possiblePaths = workspace.projectGlobs
          .filter((projectGlob) => !ONLY_ONE_STAR_REGEXP.test(projectGlob))
          .map((projectGlob) => path.join(workspace.path, projectGlob))
          .map((projectPath) => ({
            value: projectPath,
            label: path.relative(workspace.path, projectPath).replace('\\', '/'),
          }));
      }

      if (!possiblePaths.length) {
        possiblePaths = [
          {
            value: workspace.path,
            label: workspace.path,
          },
        ];
      }
    } else {
      possiblePaths = [
        {
          value: workspace.path,
          label: workspace.path,
        },
      ];
    }
  }

  return (
    <Box flexDirection="column">
      <Text color={colors.body}>
        {`Creating project in the workspace at ${chalk[colors.info](workspace.path)}.`}
      </Text>

      <CreateProjectInput
        rows={{
          projectPath: {
            choices: possiblePaths,
          },
        }}
        marginTop={1}
        values={createProjectInputResult}
        onChange={setCreateProjectInputResult}
        onComplete={setCreateProjectInputResult}
      />

      {status === 'in-progress' || status === 'finished' ?
        <Box flexDirection="column" marginTop={1}>
          <Header icon={icons.success} marginBottom={1} showSpinner={status === 'in-progress'}>
            <Text>Creating project...</Text>
          </Header>

          {jobs.map((job) => (
            <Text key={job}>{`${icons.info} ${job}`}</Text>
          ))}
        </Box>
      : null}

      {status === 'finished' ?
        <Header icon={icons.success} marginTop={1}>
          <Text>Done.</Text>
        </Header>
      : null}
    </Box>
  );
}
