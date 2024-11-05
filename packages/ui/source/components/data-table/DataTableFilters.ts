import {z} from 'zod';

export const dataTableFiltersSchema = z.union([
  z.null(),
  z
    .object({
      column: z.string(),
      filter: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.tuple([z.number().nullable().optional(), z.number().nullable().optional()]),
      ]),
    })
    .array(),
]);

export type DataTableFilters = z.infer<typeof dataTableFiltersSchema>;
