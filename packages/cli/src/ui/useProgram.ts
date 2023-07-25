import {useApp} from 'ink';
import {useCallback, useContext} from 'react';
import {useErrorBoundary} from 'react-error-boundary';

import {programContext} from './internals.js';

/**
 * A React hook for accessing {@link Program} instance and `exit` function that is used for showing an error (via an error boundary) and exiting.
 */
export function useProgram() {
  let {showBoundary} = useErrorBoundary();
  let {exit: appExit} = useApp();
  let {program} = useContext(programContext);

  let exit = useCallback(
    (error: unknown) => {
      showBoundary(error);
      appExit(error as Error);
    },
    [appExit, showBoundary],
  );

  return {program, exit};
}
