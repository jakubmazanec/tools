/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {type ParametersConfig, type Argv, type OptionsConfig} from '@jakubmazanec/args';
import {type ComponentType} from 'react';
import {type FallbackProps} from 'react-error-boundary';

import {type Command} from './Command.js';
import {ProgramError} from './ProgramError.js';
import {type ProgramOptions} from './ProgramOptions.js';
import {type ProgramStreams} from './ProgramStreams.js';
import {Wrapper} from '../ui/internals.js';
import {Failure, Help} from '../ui.js';

/**
 * Program manages and executes {@link Command} instances attached to it based on parsing command line arguments.
 */
export class Program {
  /** Program name. */
  readonly name?: string;

  /** Program version. */
  readonly version?: string;

  /** Program description. */
  readonly description?: string;

  /** Program executable name. */
  readonly bin?: string;

  /** Program commands */
  readonly commands: Array<
    Command<string, ParametersConfig | undefined, OptionsConfig | undefined, boolean, boolean>
  > = [];

  protected isRendering = false;

  readonly streams: ProgramStreams = {
    stderr: process.stderr,
    stdin: process.stdin,
    stdout: process.stdout,
  };

  /** Custom error boundary fallback component */
  ErrorBoundaryFallbackComponent: ComponentType<FallbackProps>;

  constructor({name, version, description, bin, ErrorBoundaryFallbackComponent}: ProgramOptions) {
    if (name) {
      this.name = name;
    }

    if (version) {
      this.version = version;
    }

    if (description) {
      this.description = description;
    }

    if (bin) {
      this.bin = bin;
    }

    if (ErrorBoundaryFallbackComponent) {
      this.ErrorBoundaryFallbackComponent = ErrorBoundaryFallbackComponent;
    } else {
      this.ErrorBoundaryFallbackComponent = Failure;
    }
  }

  /**
   * Adds command to the program.
   *
   * @param command Command to add.
   * @returns Program instance.
   */
  addCommand(command: Command<any, any, any, any, any>): this {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- it doesn't matter here; `any` is used to make TypeScript happy in this method, but isn't propagated further.
    this.commands.push(command);

    return this;
  }

  /**
   * Renders a React element using Ink and outputs to the configured streams.
   *
   * @param element The React element to render.
   */
  async renderElement(element: React.ReactElement): Promise<void> {
    if (this.isRendering) {
      throw new ProgramError('NO_NESTED_RENDER');
    } else {
      this.isRendering = true;
    }

    let {render} = await import('ink');
    let {createElement} = await import('react');
    let {stdin, stdout, stderr} = this.streams;

    try {
      render(createElement(Wrapper, {program: this}, element), {
        exitOnCtrlC: true,
        patchConsole: true,
        stderr,
        stdin,
        stdout,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        await this.renderElement(
          createElement(this.ErrorBoundaryFallbackComponent, {error, resetErrorBoundary: () => {}}),
        );
      }
    } finally {
      this.isRendering = false;
    }
  }

  /**
   * Runs the program.
   *
   * @param argv Unparsed command line arguments.
   */
  async run(argv: Argv): Promise<void> {
    let hasCommandRun = false;

    for (let command of this.commands) {
      let parsedArgs = command.parseArguments(argv);

      if (parsedArgs.command) {
        hasCommandRun = true;

        if (parsedArgs.errors.length) {
          let {createElement} = await import('react');

          for (let error of parsedArgs.errors) {
            await this.renderElement(
              createElement(this.ErrorBoundaryFallbackComponent, {
                error,
                resetErrorBoundary: () => {},
              }),
            );
          }
        } else {
          try {
            await command.run(parsedArgs, this);
          } catch (error: unknown) {
            let {createElement} = await import('react');

            if (error instanceof Error) {
              await this.renderElement(
                createElement(this.ErrorBoundaryFallbackComponent, {
                  error,
                  resetErrorBoundary: () => {},
                }),
              );
            }
          }

          break;
        }
      }
    }

    if (!hasCommandRun) {
      let {createElement} = await import('react');

      await this.renderElement(createElement(Help, {program: this}));
    }
  }
}
