import {type Project} from './Project.js';

/**
 * Type alias for {@link Workspace.projects | Workspace.projects} property.
 */
export type WorkspaceProjects<M extends boolean> = Array<Project<M>>; // TODO: should be `M extends true ? Array<Project<M>> : [Project<M>?]`; change when this is fixed: https://github.com/microsoft/TypeScript/issues/54302
