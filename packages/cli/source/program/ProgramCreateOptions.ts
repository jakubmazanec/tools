import {type ComponentType} from 'react';
import {type FallbackProps} from 'react-error-boundary';

/**
 * {@link Program.create} options parameter.
 */
export type ProgramCreateOptions = {
  /** Program name. */
  name?: string | undefined;

  /** More readable program name. */
  displayName?: string | undefined;

  /** Program version. */
  version?: string | undefined;

  /** Program description. */
  description?: string | undefined;

  /** Program executable name. */
  bin?: string | undefined;

  /** Custom error boundary fallback component */
  ErrorBoundaryFallbackComponent?: ComponentType<FallbackProps>;

  /** Perform check whether a newer version of the program is available. */
  checkForUpdate?: boolean;
};
