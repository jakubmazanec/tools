import * as z from 'zod';

/**
 * Zod schema for {@linkcode TemplateAttributesVariables}.
 */
export const templateVariablesSchema = z.union([
  z.record(z.unknown()),
  z.array(z.record(z.unknown())),
]);

/**
 * Type of `variables`` property of {@linkcode TemplateAttributes}.
 */
export type TemplateAttributesVariables = z.infer<typeof templateVariablesSchema>;
