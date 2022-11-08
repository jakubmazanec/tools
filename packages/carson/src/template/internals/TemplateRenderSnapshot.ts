import {templateAttributesSchema as baseTemplateAttributesSchema} from '@jakubmazanec/template';
import {z} from 'zod';

import {templateAttributesSchema} from '../TemplateAttributes.js';

export const templateRenderSnapshotSchema = z
  .object({
    attributes: baseTemplateAttributesSchema.pick({to: true}).merge(templateAttributesSchema),
    content: z.string(),
    template: z
      .object({
        path: z.string(),
      })
      .strict(),
  })
  .strict();

export type TemplateRenderSnapshot = z.infer<typeof templateRenderSnapshotSchema>;
