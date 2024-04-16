import {z} from 'zod';

export const carsonTemplateConfigSchema = z
  .object({
    // disallowMultiProjectWorkspace: z.boolean().optional(),
    // disallowSingleProjectWorkspace: z.boolean().optional(),

    autoEject: z.boolean().optional(),
  })
  .strict();

/**
 * Carson template config.
 */
export type CarsonTemplateConfig = z.infer<typeof carsonTemplateConfigSchema>;
