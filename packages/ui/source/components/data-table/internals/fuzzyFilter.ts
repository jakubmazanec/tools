import {rankings, rankItem} from '@tanstack/match-sorter-utils';
import {type FilterMeta, type Row, type RowData} from '@tanstack/react-table';

export function fuzzyFilter<TData extends RowData>(
  row: Row<TData>,
  columnId: string,
  value: unknown,
  addMeta: (meta: FilterMeta) => void,
) {
  let cellValue = row.getValue(columnId);

  if (cellValue === undefined || cellValue === null) {
    return false;
  }

  let itemRank = rankItem(cellValue, value as string, {threshold: rankings.CONTAINS});

  addMeta({itemRank});

  return itemRank.passed;
}
