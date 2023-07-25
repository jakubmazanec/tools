import {z} from 'zod';

export const carsonTemplateConfigSchema = z
  .object({
    disallowMultiProjectWorkspace: z.boolean().optional(),
    disallowSingleProjectWorkspace: z.boolean().optional(),

    // TODO: add extends property to allow reuisng template files from another carson template
  })
  .strict();

/**
 * Carson template config.
 */
export type CarsonTemplateConfig = z.infer<typeof carsonTemplateConfigSchema>;
