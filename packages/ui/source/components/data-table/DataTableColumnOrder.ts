import {z} from 'zod';

export const dataTableColumnOrderSchema = z.string().array();

export type DataTableColumnOrder = z.infer<typeof dataTableColumnOrderSchema>;
