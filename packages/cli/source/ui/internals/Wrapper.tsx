import {Box, Spacer, Text} from 'ink';
import {type FC, type PropsWithChildren, useMemo} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {type Program} from '../../program.js';
import {highlighted, notice} from '../colors.js';
import {Failure} from '../Failure.js';
import {programContext} from './programContext.js';

/**
 * {@link Wrapper} component props.
 */
export type WrapperProps = {
  program: Program;
};

/**
 * A component that wraps anything {@link Program} tries to render with an error boundary and all neccessary providers.
 */
export const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({program, children}) => {
  let programContextValue = useMemo(
    () => ({
      program,
    }),
    [program],
  );

  return (
    <ErrorBoundary FallbackComponent={Failure}>
      <programContext.Provider value={programContextValue}>
        {program.latestVersion && program.latestVersion !== program.version ?
          <Box>
            <Box
              borderColor={notice}
              borderStyle="round"
              flexDirection="column"
              margin={1}
              paddingBottom={1}
              paddingLeft={4}
              paddingRight={4}
              paddingTop={1}
            >
              <Text>
                New version <Text color={highlighted}>{program.latestVersion}</Text> is available!
              </Text>
              <Text>
                Run <Text color={highlighted}>{`npm install ${program.name} -D`}</Text> to update.
              </Text>
            </Box>
            <Spacer />
          </Box>
        : null}
        <Box>{children}</Box>
      </programContext.Provider>
    </ErrorBoundary>
  );
};
