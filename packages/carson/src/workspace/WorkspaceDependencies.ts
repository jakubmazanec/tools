// TODO: try to fix
/* eslint-disable complexity -- TODO */
import _ from 'lodash';
import semver from 'semver';

import {compareSemver, compareWorkspaceDependencyProjectName} from './internals.js';
import {type Workspace} from './Workspace.js';
import {type WorkspaceDependenciesFromWorkspaceOptions} from './WorkspaceDependenciesFromWorkspaceOptions.js';
import {type WorkspaceDependenciesGetVersionsOptions} from './WorkspaceDependenciesGetVersionsOptions.js';
import {type WorkspaceDependency} from './WorkspaceDependency.js';

/**
 * A collection of {@link WorkspaceDependency | workspace dependencies} that are installed in {@link Workspace | a workspace}.
 */
export class WorkspaceDependencies<M extends boolean = true> extends Array<WorkspaceDependency> {
  /** The workspace the dependencies are installed in. */
  workspace: Workspace<M>;

  constructor(...args: [...WorkspaceDependency[], Workspace<M>]) {
    super();

    if (args.length === 1) {
      [this.workspace] = args as [Workspace<M>];
    } else {
      let values = args.slice(0, -1) as WorkspaceDependency[];
      let workspace = args.at(-1) as Workspace<M>;

      this.push(...values);

      this.workspace = workspace;
    }
  }

  /**
   * Adds one or more new dependencies.
   *
   * @param newWorkspaceDependencies The dependencies to add.
   * @returns The new length of the collection.
   */
  override push(...newWorkspaceDependencies: WorkspaceDependency[]): number {
    for (let newWorkspaceDependency of newWorkspaceDependencies) {
      let doesExist = false;

      for (let workspaceDependency of this) {
        if (workspaceDependency.name === newWorkspaceDependency.name) {
          doesExist = true;

          workspaceDependency.versions = _.union(
            workspaceDependency.versions,
            newWorkspaceDependency.versions,
          );
          workspaceDependency.exactVersions = _.union(
            workspaceDependency.exactVersions,
            newWorkspaceDependency.exactVersions,
          );
          workspaceDependency.projects = _.unionWith(
            workspaceDependency.projects,
            newWorkspaceDependency.projects,
            (a, b) => a.name === b.name,
          );

          workspaceDependency.versions.sort(compareSemver);
          workspaceDependency.exactVersions.sort(compareSemver);
          workspaceDependency.projects.sort(compareWorkspaceDependencyProjectName);
        }
      }

      if (!doesExist) {
        super.push(newWorkspaceDependency);
      }
    }

    return this.length;
  }

  /**
   * Creates new {@link WorkspaceDependencies} instance from a {@link Workspace} instance and its dependencies.
   *
   * @param workspace The workspace from which the dependnecies are taken.
   * @param options Options.
   * @returns The new {@link WorkspaceDependencies} instance.
   */
  static fromWorkspace<M extends boolean = true>(
    workspace: Workspace<M>,
    options?: WorkspaceDependenciesFromWorkspaceOptions,
  ) {
    let workspaceDependencies: WorkspaceDependency[] = [];

    if (options?.includeWorkspaceDependencies) {
      for (let [dependencyName, dependencyVersion] of Object.entries({
        ...workspace.packageJson?.dependencies,
        ...workspace.packageJson?.devDependencies,
      })) {
        let exactDependencyVersion = semver.validRange(dependencyVersion)
          ? semver.minVersion(dependencyVersion)?.format() ??
            semver.coerce(dependencyVersion)?.format() ??
            dependencyVersion.trim()
          : dependencyVersion.trim();

        let workspaceDependency: WorkspaceDependency = {
          name: dependencyName,
          versions: [dependencyVersion],
          exactVersions: [exactDependencyVersion],
          projects: [],
        };

        workspaceDependencies.push(workspaceDependency);
      }
    }

    for (let project of workspace.projects) {
      if (!options?.includeOnlyDevDependencies) {
        for (let [dependencyName, dependencyVersion] of Object.entries(
          project.packageJson.dependencies ?? {},
        )) {
          let exactDependencyVersion = semver.validRange(dependencyVersion)
            ? semver.minVersion(dependencyVersion)?.format() ??
              semver.coerce(dependencyVersion)?.format() ??
              dependencyVersion.trim()
            : dependencyVersion.trim();

          let workspaceDependency: WorkspaceDependency = {
            name: dependencyName,
            versions: [dependencyVersion],
            exactVersions: [exactDependencyVersion],
            projects: [],
          };

          if (project.name) {
            workspaceDependency.projects = [
              {
                name: project.name,
                version: dependencyVersion,
                exactVersion: exactDependencyVersion,
              },
            ];
          }

          workspaceDependencies.push(workspaceDependency);
        }
      }

      if (options?.includeDevDependencies || options?.includeOnlyDevDependencies) {
        for (let [dependencyName, dependencyVersion] of Object.entries(
          project.packageJson.devDependencies ?? {},
        )) {
          let exactDependencyVersion = semver.validRange(dependencyVersion)
            ? semver.minVersion(dependencyVersion)?.format() ??
              semver.coerce(dependencyVersion)?.format() ??
              dependencyVersion.trim()
            : dependencyVersion.trim();

          let workspaceDependency: WorkspaceDependency = {
            name: dependencyName,
            versions: [dependencyVersion],
            exactVersions: [exactDependencyVersion],
            projects: [],
          };

          if (project.name) {
            workspaceDependency.projects = [
              {
                name: project.name,
                version: dependencyVersion,
                exactVersion: exactDependencyVersion,
              },
            ];
          }

          workspaceDependencies.push(workspaceDependency);
        }
      }
    }

    return new this(...workspaceDependencies, workspace);
  }

  /**
   * Creates map of all dependnecies and their installed version.
   *
   * @param options Options.
   * @returns Object whose keys are dependency names and values are sorted versions.
   */
  getVersions(options?: WorkspaceDependenciesGetVersionsOptions) {
    let versions: Record<string, string[]> = {};

    for (let dependency of this) {
      versions[dependency.name] = options?.useExactVersions
        ? dependency.exactVersions
        : dependency.versions;
    }

    return versions;
  }
}
