import * as z from 'zod';

/**
 * Zod schema for {@link TemplateAttributesVariables}.
 */
export const templateVariablesSchema = z.union([
  z.record(z.string(), z.unknown()),
  z.array(z.record(z.string(), z.unknown())),
]);

/**
 * Type of `variables`` property of {@link TemplateAttributes}.
 */
export type TemplateAttributesVariables = z.infer<typeof templateVariablesSchema>;
