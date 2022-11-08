import {Header, icons, colors, type CommandArguments, useProgram} from '@jakubmazanec/cli';
import chalk from 'chalk';
import {Box, Text} from 'ink';
import path from 'node:path';
import {useEffect, useState} from 'react';

import {type createWorkspaceCommand} from './createWorkspaceCommand.js';
import {CreateWorkspaceInput, type CreateWorkspaceInputResult} from './CreateWorkspaceInput.js';
import {runCreateWorkspace} from './runCreateWorkspace.js';
import {type CommandStatus} from '../internals.js';

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
      <Text>{`Creating workspace at ${chalk[colors.highlighted](path)}.`}</Text>

      <CreateWorkspaceInput
        values={createWorkspaceInputResult}
        marginTop={1}
        onChange={setCreateWorkspaceInputResult}
        onComplete={setCreateWorkspaceInputResult}
      />

      {status === 'in-progress' || status === 'finished' ? (
        <Box marginTop={1} flexDirection="column">
          <Header showSpinner={status === 'in-progress'} icon={icons.success} marginBottom={1}>
            <Text>Creating workspace...</Text>
          </Header>

          {jobs.map((job) => (
            <Text key={job}>{`${icons.info} ${job}`}</Text>
          ))}
        </Box>
      ) : null}

      {status === 'finished' ? (
        <Header marginTop={1} icon={icons.success}>
          <Text>Done.</Text>
        </Header>
      ) : null}
    </Box>
  );
}
