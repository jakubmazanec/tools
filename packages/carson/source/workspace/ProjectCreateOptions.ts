import {type Workspace} from './Workspace.js';

/**
 * {@link Project.create | Project.create} options parameter.
 */
export type ProjectCreateOptions<M extends boolean> = {
  templateId: string;
  workspace: Workspace<M>;
  projectPath: string;
  projectName: string;
  args: Record<string, unknown>;
};
