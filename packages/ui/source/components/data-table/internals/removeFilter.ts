import {type DataTableProps} from '../DataTable.js';

export function removeFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'],
  column: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let newFilters: DataTableProps<any, any>['filters'] = [];

  if (filters) {
    for (let filter of filters) {
      if (filter.column !== column) {
        newFilters.push(filter);
      }
    }
  } else {
    return null;
  }

  if (!newFilters.length) {
    return null;
  }

  return newFilters;
}
