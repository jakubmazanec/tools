/**
 * Type alias for {@link Workspace.projectGlobs | Workspace.projectGlobs} property.
 */
export type WorkspaceProjectGlobs<M extends boolean> = M extends true ? string[] : null;
