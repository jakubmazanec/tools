import * as z from 'zod';

/**
 * Zod schema for {@link TemplateAttributesVariables}.
 */
export const templateVariablesSchema = z.union([
  z.record(z.unknown()),
  z.array(z.record(z.unknown())),
]);

/**
 * Type of `variables`` property of {@link TemplateAttributes}.
 */
export type TemplateAttributesVariables = z.infer<typeof templateVariablesSchema>;
