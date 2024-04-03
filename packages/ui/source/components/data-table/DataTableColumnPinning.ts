import {z} from 'zod';

export const dataTableColumnPinningSchema = z.record(z.string(), z.enum(['left', 'right']));

export type DataTableColumnPinning = z.infer<typeof dataTableColumnPinningSchema>;
