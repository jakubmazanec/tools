import {Box, type BoxProps, Text} from 'ink';
import {type PropsWithChildren} from 'react';

import {Spinner} from './Spinner.js';

/**
 * {@link Header} component props.
 */
export type HeaderProps = BoxProps & {
  /** Icon (recommended is 1 character) to render before the header itself. */
  icon?: string;

  /** Show spinner instead of the icon. */
  showSpinner?: boolean;
};

/**
 * Header component.
 */
export function Header({
  children,
  icon,
  showSpinner = false,
  ...boxProps
}: PropsWithChildren<HeaderProps>) {
  return (
    <Box {...boxProps}>
      {icon || showSpinner ?
        <Box marginRight={1}>
          {showSpinner ?
            <Spinner />
          : null}
          {!showSpinner && icon ?
            <Text>{icon}</Text>
          : null}
        </Box>
      : null}
      <Box>{children}</Box>
    </Box>
  );
}
