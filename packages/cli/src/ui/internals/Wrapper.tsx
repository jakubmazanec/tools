import {Box, Spacer, Text} from 'ink';
import {useMemo, type FC, type PropsWithChildren} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {programContext} from './programContext.js';
import {type Program} from '../../program.js';
import {highlighted, notice} from '../colors.js';
import {Failure} from '../Failure.js';

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
              flexDirection="column"
              borderColor={notice}
              borderStyle="round"
              margin={1}
              paddingTop={1}
              paddingRight={4}
              paddingBottom={1}
              paddingLeft={4}
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
