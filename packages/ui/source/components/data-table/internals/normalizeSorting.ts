import {type Header} from '@tanstack/react-table';

import {type DataTableProps} from '../DataTable.js';
import {type DataTableSorting} from '../DataTableSorting.js';

export function normalizeSorting(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  header: Header<any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  controlledSorting?: DataTableProps<any, any>['sorting'],
): DataTableSorting {
  if (controlledSorting === undefined) {
    let column = header.column.id;
    let isSorted = header.column.getIsSorted();

    if (!isSorted) {
      return null;
    }

    return {
      column,
      direction: isSorted === 'asc' ? 'ascending' : 'descending',
    };
  }

  let column = header.column.id;

  if (!controlledSorting) {
    return null;
  }

  if (controlledSorting.column !== column) {
    return null;
  }

  return {
    column,
    direction: controlledSorting.direction,
  };
}
