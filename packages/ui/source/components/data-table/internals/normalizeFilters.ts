import {type ReactTable} from '@tanstack/react-table';

import {type DataTableProps} from '../DataTable.js';
import {type DataTableFeatures} from './dataTableFeatures.js';

export function normalizeFilters(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: ReactTable<DataTableFeatures, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledFilters?: DataTableProps<any, any>['filters'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
): DataTableProps<any, any>['filters'] {
  if (controlledFilters === undefined) {
    let filters = table.state.columnFilters;

    if (!filters.length) {
      return null;
    }

    return filters.map((filter) => ({column: filter.id, filter: filter.value as string}));
  }

  if (!controlledFilters) {
    return null;
  }

  if (!controlledFilters.length) {
    return null;
  }

  return controlledFilters;
}
