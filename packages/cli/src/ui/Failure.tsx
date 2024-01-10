import {Box, Text, type BoxProps} from 'ink';

import * as colors from './colors.js';
import {type ErrorDetail} from './ErrorDetail.js';
import {getErrorDetail} from './getErrorDetail.js';
import {Header} from './Header.js';
import * as icons from './icons.js';

/**
 * {@link Failure} component props.
 */
export type FailureProps = BoxProps & {
  /** Error that describes a failure state. Function {@link getErrorDetail} is used for getting all the information from the error; you can use it to implement own retrieval logic and pass the result as `errorDetail` prop. */
  error: Error;

  /** Information about the failure state. Overrides information retireved from `error` prop. */
  errorDetail?: ErrorDetail;
};

/**
 * A component that renders a failure state.
 */
export function Failure({error, errorDetail, ...boxProps}: FailureProps) {
  let {label, description, stack, cause} = errorDetail ?? getErrorDetail(error);

  return (
    <Box {...boxProps} flexDirection="column">
      <Header icon={icons.error}>
        <Text color={colors.highlighted}>{label}</Text>
      </Header>

      {description ?
        <Box flexDirection="column" marginLeft={2}>
          <Text color={colors.failure}>{description}</Text>
        </Box>
      : null}

      {stack ?
        <Box flexDirection="column" marginTop={1} marginLeft={2}>
          <Text color={colors.muted}>{stack}</Text>
        </Box>
      : null}

      {cause ?
        <>
          <Box flexDirection="column" marginTop={1} marginLeft={2}>
            <Text color={colors.muted}>{cause.description}</Text>
          </Box>

          {cause.stack ?
            <Box flexDirection="column" marginTop={1} marginLeft={2}>
              <Text color={colors.muted}>{cause.stack}</Text>
            </Box>
          : null}
        </>
      : null}
    </Box>
  );
}
