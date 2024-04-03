import {z} from 'zod';

export const dataTableSearchSchema = z.string().nullable();

export type DataTableSearch = z.infer<typeof dataTableSearchSchema>;
