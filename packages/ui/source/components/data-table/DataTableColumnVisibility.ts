import {z} from 'zod';

export const dataTableColumnVisibilitySchema = z.record(z.string(), z.boolean());

export type DataTableColumnVisibility = z.infer<typeof dataTableColumnVisibilitySchema>;
