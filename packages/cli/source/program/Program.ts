/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {type Argv, type OptionsConfig, type ParametersConfig} from '@jakubmazanec/args';
import fs from 'fs-extra';
import fetchLatestVersion from 'latest-version';
import path from 'node:path';
import {type ComponentType} from 'react';
import {type FallbackProps} from 'react-error-boundary';

import {CACHE_PATH} from '../constants.js';
import {Failure, Help} from '../ui.js';
import {Wrapper} from '../ui/internals.js';
import {type Command} from './Command.js';
import {type ProgramCreateOptions} from './ProgramCreateOptions.js';
import {ProgramError} from './ProgramError.js';
import {type ProgramOptions} from './ProgramOptions.js';
import {type ProgramStreams} from './ProgramStreams.js';

/**
 * Program manages and executes {@link Command} instances attached to it based on parsing command line arguments.
 */
export class Program {
  /** Program name. */
  readonly name?: string;

  /** More readable program name. */
  readonly displayName?: string;

  /** Program version. */
  readonly version?: string;

  /** Program latest version. */
  readonly latestVersion?: string;

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

  private constructor({
    name,
    displayName,
    version,
    latestVersion,
    description,
    bin,
    ErrorBoundaryFallbackComponent,
  }: ProgramOptions) {
    if (name) {
      this.name = name;
    }

    if (displayName) {
      this.displayName = displayName;
    }

    if (version) {
      this.version = version;
    }

    if (latestVersion) {
      this.latestVersion = latestVersion;
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

  static async create({
    name,
    version,
    description,
    bin,
    ErrorBoundaryFallbackComponent,
    checkForUpdate,
  }: ProgramCreateOptions) {
    let latestVersion: string | undefined;

    if (checkForUpdate && name) {
      // first we try to read the cached latest version
      type CachedLatestVersion = {
        value: string;
        datetime: number;
      };

      let cachePath = path.join(CACHE_PATH, name, 'latest-version.json');
      let cachedLatestVersion: CachedLatestVersion | undefined;

      try {
        cachedLatestVersion = (await fs.readJson(cachePath)) as CachedLatestVersion;
      } catch {
        // no-op
      }

      // if there is no cache or the cached value is old, refetch and recache
      if (!cachedLatestVersion || Date.now() - cachedLatestVersion.datetime > 86_400_00) {
        latestVersion = await fetchLatestVersion(name);

        await fs.ensureFile(cachePath);
        await fs.writeJson(cachePath, {
          value: latestVersion,
          datetime: Date.now(),
        });
      }
    }

    return new this({
      name,
      version,
      latestVersion,
      description,
      bin,
      ErrorBoundaryFallbackComponent,
    });
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
            process.exitCode = 1;

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
              process.exitCode = 1;

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
