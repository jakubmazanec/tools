/**
 * {@link Workspace.createProject | Workspace.createProject} options parameter.
 */
export type WorkspaceCreateProjectOptions = {
  templateId: string;
  projectPath: string;
  projectName: string;
  args: Record<string, unknown>;
};
