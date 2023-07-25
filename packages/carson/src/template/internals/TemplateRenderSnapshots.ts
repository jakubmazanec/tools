import {type z} from 'zod';

import {templateRenderSnapshotSchema} from './TemplateRenderSnapshot.js';

export const templateRenderSnapshotsSchema = templateRenderSnapshotSchema.array();

export type TemplateRenderSnapshots = z.infer<typeof templateRenderSnapshotsSchema>;
