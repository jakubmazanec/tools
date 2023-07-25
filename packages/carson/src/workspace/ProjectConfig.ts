import {z} from 'zod';

export const projectConfigSchema = z
  .object({
    template: z.string().optional(),
  })
  .catchall(z.unknown());

/**
 * A project configuration.
 */
export type ProjectConfig = z.infer<typeof projectConfigSchema>;
