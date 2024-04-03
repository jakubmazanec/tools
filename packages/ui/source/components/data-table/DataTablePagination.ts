import {z} from 'zod';

import {PAGE_SIZES} from './internals.js';

export const dataTablePaginationSchema = z.object({
  /** Page number, starts with 1. */
  page: z.number(),
  pageSize: z.union([
    z.literal(PAGE_SIZES[0]),
    z.literal(PAGE_SIZES[1]),
    z.literal(PAGE_SIZES[2]),
    z.literal(PAGE_SIZES[3]),
    z.literal(PAGE_SIZES[4]),
  ]),
  pageCount: z.number(),
});

export type DataTablePagination = z.infer<typeof dataTablePaginationSchema>;
