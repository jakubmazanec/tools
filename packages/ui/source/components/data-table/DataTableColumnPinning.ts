import {z} from 'zod';

export const dataTableColumnPinningSchema = z.record(z.string(), z.enum(['start', 'end']));

export type DataTableColumnPinning = z.infer<typeof dataTableColumnPinningSchema>;
