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
      // TODO: remove when this is fixed: https://github.com/facebook/react/issues/31544
      // eslint-disable-next-line react-compiler/react-compiler -- false positive
      process.exitCode = 1;

      showBoundary(error);
      appExit(error as Error);
    },
    [appExit, showBoundary],
  );

  return {program, exit};
}
