import {z} from 'zod';

import {Project} from '../workspace/Project.js';
import {Workspace} from '../workspace/Workspace.js';

// TODO: what about template data for workspace and template data for project, so we can get rid of the `.optional()`?
export const templateDataSchema = z
  .object({
    workspace: z.instanceof(Workspace).optional(),
    project: z.instanceof(Project).optional(),
    args: z.record(z.string(), z.unknown()).optional(),
  })
  .strict();

export type TemplateData = z.infer<typeof templateDataSchema>;
