import chalk from 'chalk';
import {Box, Text, type BoxProps} from 'ink';

import * as colors from './colors.js';
import {Header} from './Header.js';
import * as icons from './icons.js';
import {type Program} from '../program.js';

/**
 * {@link Help} component props.
 */
export type HelpProps = BoxProps & {
  /** {@link Program} instance. */
  program: Program;
};

/**
 * A component that renders help information.
 */
export function Help({program, ...boxProps}: HelpProps) {
  return (
    <Box {...boxProps} flexDirection="column">
      <Text>{`${chalk[colors.notice](program.displayName ?? '?')} ${chalk[colors.muted](
        program.version ?? '?',
      )}`}</Text>
      <Text color={colors.body}>{program.description}</Text>

      {program.commands.length ? (
        <>
          <Header icon={icons.info} marginTop={1}>
            <Text color={colors.highlighted}>Usage</Text>
          </Header>
          {program.commands.map((command) => {
            let line = `${chalk[colors.muted](program.bin ?? '?')} ${command.name}`;

            if (command.parameters) {
              if (command.parameters.some((parameterConfig) => !!parameterConfig.required)) {
                line += ` ${chalk[colors.muted]('<parameters>')}`;
              } else {
                line += ` ${chalk[colors.muted]('[<parameters>]')}`;
              }
            }

            if (command.options) {
              if (
                Object.entries(command.options).some(([, optionConfig]) => !!optionConfig.required)
              ) {
                line += ` ${chalk[colors.muted]('<options>')}`;
              } else {
                line += ` ${chalk[colors.muted]('[<options>]')}`;
              }
            }

            if (command.description) {
              line += ` ${command.description}`;
            }

            return (
              <Box key={command.name} marginLeft={2} flexDirection="column">
                <Text>{line}</Text>
              </Box>
            );
          })}
        </>
      ) : null}
    </Box>
  );
}
