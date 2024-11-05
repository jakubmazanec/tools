import {z} from 'zod';

export const dataTableSortingSchema = z.union([
  z.null(),
  z.object({
    column: z.string(),
    direction: z.enum(['ascending', 'descending']),
  }),
]);

export type DataTableSorting = z.infer<typeof dataTableSortingSchema>;
