import {type ComponentType} from 'react';
import {type FallbackProps} from 'react-error-boundary';

/**
 * {@link Project.constructor | Program constructor} options parameter.
 */
export type ProgramOptions = {
  /** Program name. */
  name?: string | undefined;

  /** Program version. */
  version?: string | undefined;

  /** Program description. */
  description?: string | undefined;

  /** Program executable name. */
  bin?: string | undefined;

  /** Custom error boundary fallback component */
  ErrorBoundaryFallbackComponent?: ComponentType<FallbackProps>;
};
