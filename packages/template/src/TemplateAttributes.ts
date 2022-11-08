import {z} from 'zod';

import {templateVariablesSchema} from './TemplateVariables.js';

/**
 * Zod schema for {@link TemplateAttributes}.
 */
export const templateAttributesSchema = z
  .object({
    to: z.string(),
    if: z.string().optional(),
    variables: templateVariablesSchema.optional(),
  })
  .strict();

/**
 * Type representing template attributes.
 */
export type TemplateAttributes = z.infer<typeof templateAttributesSchema>;
