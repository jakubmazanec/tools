import {
  createColumnHelper as createTanstackColumnHelper,
  type RowData,
} from '@tanstack/react-table';

import {type DataTableFeatures} from './internals.js';

export function createColumnHelper<TData extends RowData>() {
  return createTanstackColumnHelper<DataTableFeatures, TData>();
}
