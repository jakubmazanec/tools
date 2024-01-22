/**
 * {@link Workspace.create} options parameter.
 */
export type WorkspaceCreateOptions = {
  path: string;
  templateId: string;
  args: Record<string, unknown>;
};
