import {z} from 'zod';

export const workspaceConfigSchema = z
  .object({
    template: z.string().optional(),
    projects: z.string().array().optional(),
  })
  .catchall(z.unknown());

/**
 * A workspace configuration.
 */
export type WorkspaceConfig = z.infer<typeof workspaceConfigSchema>;
