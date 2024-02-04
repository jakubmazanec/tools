import {colors, type CommandArguments, Header, icons, useProgram} from '@jakubmazanec/cli';
import chalk from 'chalk';
import {Box, Text} from 'ink';
import {useEffect, useState} from 'react';

import {type Workspace} from '../../workspace.js';
import {runUpdateWorkspace} from './runUpdateWorkspace.js';
import {type updateWorkspaceCommand} from './updateWorkspaceCommand.js';

export type UpdateWorkspaceProps = {
  args: CommandArguments<typeof updateWorkspaceCommand>;
  workspace: Workspace | Workspace<false>;
};

export function UpdateWorkspace({workspace, args}: UpdateWorkspaceProps) {
  let [isFinished, setIsFinished] = useState(false);
  let [jobs, setJobs] = useState<string[]>([]);
  let {exit} = useProgram();

  useEffect(() => {
    let subscription = runUpdateWorkspace({workspace, args}).subscribe({
      next(value) {
        setJobs((previousJobs) => [...previousJobs, value]);
      },
      error(error) {
        exit(error);
      },
      complete() {
        setIsFinished(true);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [args, exit, workspace]);

  return (
    <Box flexDirection="column">
      <Text>{`Updating workspace at ${chalk[colors.info](workspace.path)}.`}</Text>

      <Box marginTop={1} flexDirection="column">
        <Header showSpinner={!isFinished} icon={icons.success} marginBottom={1}>
          <Text>Updating workspace and projects...</Text>
        </Header>

        {jobs.map((job) => (
          <Text key={job}>{`${icons.info} ${job}`}</Text>
        ))}
      </Box>

      {isFinished ?
        <Header marginTop={1} icon={icons.success}>
          <Text>Done.</Text>
        </Header>
      : null}
    </Box>
  );
}
