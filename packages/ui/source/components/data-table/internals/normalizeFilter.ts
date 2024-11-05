import {type Column} from '@tanstack/react-table';

import {type DataTableProps} from '../DataTable.js';

export function normalizeFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  column: Column<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledFilters?: DataTableProps<any, any>['filters'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
): NonNullable<DataTableProps<any, any>['filters']>[number]['filter'] | null {
  if (controlledFilters === undefined) {
    let filter = column.getFilterValue();

    if (!filter) {
      return null;
    }

    return filter as string;
  }

  if (!controlledFilters) {
    return null;
  }

  let filter = controlledFilters.find((filter) => filter.column === column.id);

  if (!filter) {
    return null;
  }

  return filter.filter;
}
