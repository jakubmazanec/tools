import {Box} from 'ink';
import {useMemo, type FC, type PropsWithChildren} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {programContext} from './programContext.js';
import {type Program} from '../../program.js';
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
        <Box>{children}</Box>
      </programContext.Provider>
    </ErrorBoundary>
  );
};
