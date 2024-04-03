import {z} from 'zod';

export const dataTableFacetingSchema = z.record(
  z.string(),
  z.object({
    values: z.unknown().array().optional(),
    min: z.unknown().optional(),
    max: z.unknown().optional(),
  }),
);

export type DataTableFaceting = z.infer<typeof dataTableFacetingSchema>;
