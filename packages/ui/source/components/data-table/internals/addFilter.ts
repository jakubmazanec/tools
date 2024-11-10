import {type DataTableProps} from '../DataTable.js';

export function addFilter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  filters: DataTableProps<any, any>['filters'],
  column: string,
  newFilter: unknown,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let newFilters: DataTableProps<any, any>['filters'] = [];

  if (filters) {
    let wasUpdated = false;

    for (let filter of filters) {
      if (filter.column === column) {
        newFilters.push({
          column,
          filter: newFilter as [number, number] | string,
        });

        wasUpdated = true;
      } else {
        newFilters.push(filter);
      }
    }

    if (!wasUpdated) {
      newFilters.push({
        column,
        filter: newFilter as [number, number] | string,
      });
    }
  } else {
    newFilters.push({
      column,
      filter: newFilter as [number, number] | string,
    });
  }

  return newFilters;
}
