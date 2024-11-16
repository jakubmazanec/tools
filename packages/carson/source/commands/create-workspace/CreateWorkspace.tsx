import {colors, type CommandArguments, Header, icons, useProgram} from '@jakubmazanec/cli';
import chalk from 'chalk';
import {Box, Text} from 'ink';
import path from 'node:path';
import {useEffect, useState} from 'react';

import {type CommandStatus} from '../internals.js';
import {type createWorkspaceCommand} from './createWorkspaceCommand.js';
import {CreateWorkspaceInput, type CreateWorkspaceInputResult} from './CreateWorkspaceInput.js';
import {runCreateWorkspace} from './runCreateWorkspace.js';

export type CreateWorkspaceProps = {
  args: CommandArguments<typeof createWorkspaceCommand>;
};

export function CreateWorkspace({args}: CreateWorkspaceProps) {
  let [status, setStatus] = useState<CommandStatus>('not-started');
  let [subscription, setSubscription] = useState<ZenObservable.Subscription | null>(null);
  let [jobs, setJobs] = useState<string[]>([]);
  let [createWorkspaceInputResult, setCreateWorkspaceInputResult] =
    useState<CreateWorkspaceInputResult>(() => ({
      templateId: {value: args.options.template ?? '', isComplete: !!args.options.template},
    }));
  let {exit} = useProgram();
  let workspacePath = path.resolve(process.cwd(), args.options.path ?? '');

  useEffect(() => {
    if (Object.entries(createWorkspaceInputResult).every(([, result]) => result.isComplete)) {
      setStatus('in-progress');
    }
  }, [createWorkspaceInputResult]);

  useEffect(() => {
    if (status === 'in-progress' && !subscription) {
      let newSubscription = runCreateWorkspace({
        workspacePath,
        templateId: createWorkspaceInputResult.templateId.value,
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
  }, [createWorkspaceInputResult, status, subscription, args, exit, workspacePath]);

  return (
    <Box flexDirection="column">
      <Text>{`Creating workspace at ${chalk[colors.info](workspacePath)}.`}</Text>

      <CreateWorkspaceInput
        marginTop={1}
        values={createWorkspaceInputResult}
        onChange={setCreateWorkspaceInputResult}
        onComplete={setCreateWorkspaceInputResult}
      />

      {status === 'in-progress' || status === 'finished' ?
        <Box flexDirection="column" marginTop={1}>
          <Header icon={icons.success} marginBottom={1} showSpinner={status === 'in-progress'}>
            <Text>Creating workspace...</Text>
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
